import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { validate } from '@/api-lib/middlewares'
import { signUpSchema } from '@/api-lib/schemas'

// POST /api/users
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const error = await validate(signUpSchema, req.body)

  if (error.length) return res.status(400).json(error)

  const user = await prisma.user.create({
    data: {
      ...req.body,
    },
  })

  res.json(user)
}
