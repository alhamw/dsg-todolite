import { z } from "zod";

export const paramsSchema = z.object({
    id: z.coerce.number().int().positive()
})

export type TodoParams = z.infer<typeof paramsSchema>