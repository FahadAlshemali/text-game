import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id }: { id?: string } = req.query;
  const situation = await prisma.situation.findUnique({ where: { id: +id! } });
  res.status(200).json({ situation });
}
