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
    const newLake = await db.lake.create({
      data: {
        name: body.name,
        ph: body.ph,
        temperature: body.temperature,
        tds: body.tds,
        turbidity: body.turbidity,
        location: body.location,
        userId: user.id,
        endangered: false,
      }
    })
    if (!newLake) {
      return new Response("Invalid Body", { status: 400 });
    }
    console.log(newLake)
    return new Response(JSON.stringify(newLake), { status: 201 });
  } catch (error) {
    return new Response("Invalid Body", { status: 400 });
  }
}
