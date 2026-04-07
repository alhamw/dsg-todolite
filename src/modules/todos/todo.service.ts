import { db } from "../../config/db.js";
import { todos } from "../../db/schema/todos.js";
import { eq, desc } from "drizzle-orm";
import { CreateTodoSchema, UpdateTodoSchema } from "./todo.schema.js";

export class TodoService {
    async getTodos() {
        return await db.select().from(todos).orderBy(desc(todos.createdAt));
    }

    async getTodoById(id: number) {
        return await db.select().from(todos).where(eq(todos.id, id));
    }

    async createTodo(data: CreateTodoSchema) {
        const result = await db.insert(todos).values(data).returning()
        return result[0];
    }

    async updateTodo(id: number, data: UpdateTodoSchema) {
        const result = await db
            .update(todos)
            .set({ ...data, updatedAt: new Date() })
            .where(eq(todos.id, id))
            .returning()
        return result[0];
    }
}