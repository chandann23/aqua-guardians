import { getServerSession } from "next-auth";
import { db } from "~/lib/db";

export async function POST(res: Request) {
  const session = await getServerSession();
  const user = session?.user;
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const body = await res.json() as { name: string, ph: number, temperature: number, tds: number, turbidity: number, location: string }
    console.log(body)
    console.log(user)
    const dbuser = await db.user.findFirst({
      where: {
        email: user.email!
      }
    })
    if (!dbuser) {
      return new Response("Invalid Body", { status: 400 });
    }
    const newLake = await db.lake.create({
      data: {
        name: body.name,
        ph: body.ph,
        temperature: body.temperature,
        tds: body.tds,
        turbidity: body.turbidity,
        location: body.location,
        userId: dbuser.id,
        endangered: false,
      }
    })
    console.log("newLake", newLake)
    if (!newLake) {
      return new Response("Invalid Body", { status: 400 });
    }
    return new Response(JSON.stringify(newLake), { status: 201 });
  } catch (error) {
    return new Response("Invalid Body", { status: 400 });
  }
}
export async function GET(res: Request) {
  const session = await getServerSession();
  const user = session?.user;
  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const lakes = await db.lake.findMany()
    if (!lakes) {
      return new Response("Invalid Body", { status: 400 });
    }
    return new Response(JSON.stringify(lakes), { status: 201 });
  } catch (error) {
    return new Response("Invalid Body", { status: 400 });
  }
}
