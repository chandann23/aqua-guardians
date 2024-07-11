"use server"
import { getAuthSession } from '~/lib/auth';
import { db } from '~/lib/db';

interface LakeData {
  name: string;
  ph: number;
  temperature: number;
  tds: number;
  turbidity: number;
  location: string;
}


export const addLake = async ({ name, ph, temperature, tds, turbidity, location }: LakeData) => {
  const userParent = await getAuthSession();
  const user = userParent?.user
  if (!user) {
    throw new Error("User not found");
  }
  const lake = await db.lake.create({
    data: {
      name,
      locationUrl: location,
      ph,
      temperature,
      tds,
      turbidity,
      location,
      userId: user?.id,
      endangered: false
    },
  })
  return lake
}

export const getLake = async () => {
  const lakes = await db.lake.findMany()
  return lakes
}
