import { z } from "zod";

export const paramsSchema = z.object({
    id: z.coerce.number().int().positive()
})

export const createTodoSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().nullable().optional(),
})

export type TodoParams = z.infer<typeof paramsSchema>
export type CreateTodoSchema = z.infer<typeof createTodoSchema>