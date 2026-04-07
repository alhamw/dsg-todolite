import { db } from "../../config/db";
import { todos } from "../../db/schema/todos";
import { eq, desc } from "drizzle-orm";

export class TodoService {
    async getTodos() {
        return await db.select().from(todos).orderBy(desc(todos.createdAt));
    }
}