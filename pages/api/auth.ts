import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { validate } from '@/api-lib/middlewares'
import { signInSchema } from '@/api-lib/schemas'

// POST /api/auth
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const error = await validate(signInSchema, req.body)

  if (error.length) return res.status(400).json(error)
}
