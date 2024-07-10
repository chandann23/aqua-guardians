import { getServerSession } from "next-auth";
import { db } from "~/lib/db";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  console.log("PUT request received for lake ID:", params.id);
  const session = await getServerSession();
  const user = session?.user;

  if (!user) {
    console.log("Unauthorized access attempt");
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const id = params.id;
    const body = await req.json() as {
      name?: string,
      ph?: number,
      temperature?: number,
      tds?: number,
      turbidity?: number,
      location?: string,
      endangered?: boolean
    };
    console.log("Received update data:", body);

    const dbUser = await db.user.findFirst({
      where: { email: user.email! }
    });

    if (!dbUser) {
      console.log("User not found in database");
      return new Response("User not found", { status: 404 });
    }

    console.log("Looking for lake with ID:", id, "and userId:", dbUser.id);
    const existingLake = await db.lake.findFirst({
      where: {
        id: parseInt(id),
        userId: dbUser.id
      }
    });

    if (!existingLake) {
      console.log("Lake not found or user doesn't have permission");
      return new Response("Lake not found or you don't have permission to edit it", { status: 404 });
    }

    console.log("Existing lake found:", existingLake);

    const updatedLake = await db.lake.update({
      where: { id: parseInt(id) },
      data: {
        name: body.name ?? existingLake.name,
        ph: body.ph ?? existingLake.ph,
        temperature: body.temperature ?? existingLake.temperature,
        tds: body.tds ?? existingLake.tds,
        turbidity: body.turbidity ?? existingLake.turbidity,
        location: body.location ?? existingLake.location,
        endangered: body.endangered ?? existingLake.endangered,
      }
    });

    console.log("Lake updated successfully:", updatedLake);
    return new Response(JSON.stringify(updatedLake), { status: 200 });
  } catch (error) {
    console.error("Error in PUT function:", error);
    if (error instanceof SyntaxError) {
      return new Response("Invalid JSON", { status: 400 });
    }
    return new Response("Error updating lake", { status: 500 });
  }
}
