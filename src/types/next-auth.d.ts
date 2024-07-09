
import type { AccessLevel } from "@prisma/client";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      access: AccessLevel;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access?: AccessLevel;
  }
}
