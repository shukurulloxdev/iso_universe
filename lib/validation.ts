'use client'

import { z } from 'zod'

export const sendBotSchema = z.object({
	fullName: z.string(),
	tel: z.string(),
})
