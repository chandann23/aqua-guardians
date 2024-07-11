import { getServerSession } from "next-auth";
import { db } from "~/lib/db";

export async function GET(req: Request) {
  const session = await getServerSession();
  const user = session?.user;
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const lakes = await db.lake.findMany();
    return new Response(JSON.stringify(lakes), { status: 200 });
  } catch (error) {
    console.error("Error fetching lakes:", error);
    return new Response("Error fetching lakes", { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession();
  const user = session?.user;
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const body = await req.json() as { name: string, ph: number, temperature: number, tds: number, turbidity: number, location: string, locationUrl: string };
    const dbUser = await db.user.findFirst({
      where: { email: user.email! }
    });
    if (!dbUser) {
      return new Response("User not found", { status: 404 });
    }
    const newLake = await db.lake.create({
      data: {
        ...body,
        userId: dbUser.id,
        endangered: false,
      }
    });
    return new Response(JSON.stringify(newLake), { status: 201 });
  } catch (error) {
    console.error("Error creating lake:", error);
    return new Response("Error creating lake", { status: 500 });
  }
}
