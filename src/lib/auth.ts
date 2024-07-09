import { type NextAuthOptions, getServerSession } from "next-auth";
import { db } from "./db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { type AccessLevel } from "@prisma/client";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user = {
          ...session.user,
          id: token.id as string,
          name: token.name!,
          access: token.access!,
          email: token.email!,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await db.user.findFirst({
          where: {
            email: user.email!,
          },
        });
        if (!dbUser) {
          token.id = user.id;
          return token;
        }
        if (dbUser) {
          token.id = dbUser.id;
          token.name = dbUser.name;
          token.access = dbUser.accessLevel;
          token.email = dbUser.email;
        }
      }
      return token;
    },
    redirect() {
      return "/dashboard";
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
