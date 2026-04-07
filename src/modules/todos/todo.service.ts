import { db } from "../../config/db";
import { todos } from "../../db/schema/todos";
import { eq, desc } from "drizzle-orm";
import { CreateTodoSchema, UpdateTodoSchema } from "./todo.schema";

export class TodoService {
    async getTodos() {
        return await db.select().from(todos).orderBy(desc(todos.createdAt));
    }

    async getTodoById(id: number) {
        const result = await db.select().from(todos).where(eq(todos.id, id))
        return result[0];
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

    async deleteTodo(id: number) {
        const result = await db.delete(todos).where(eq(todos.id, id)).returning();
        return result[0];
    }
}

export const todoService = new TodoService();