import { db } from "../../config/db";
import { todos } from "../../db/schema/todos";
import { eq, desc } from "drizzle-orm";
import { CreateTodoSchema } from "./todo.schema";

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
}