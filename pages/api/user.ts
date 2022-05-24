import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'

// POST /api/user
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await prisma.user.create({
    data: {
      ...req.body,
    },
  })
  res.json(user)
}
