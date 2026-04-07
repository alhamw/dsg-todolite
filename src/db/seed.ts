import { db } from "../config/db.js";
import { todos } from "./schema/todos.js";

async function seed() {
    console.log("Start Seeding....")

    const todoList = [
        {
            title: "Task 1",
            description: "Description 1",
            isCompleted: false,
        },
        {
            title: "Task 2",
            description: "Description 2",
            isCompleted: true,
        },
        {
            title: "Task 3",
            description: "Description 3",
            isCompleted: false,
        },
    ]

    await db.insert(todos).values(todoList);

    console.log("Seeding Completed")
    process.exit(0)
}

seed().catch((e) => {
    console.error("Seeding Failed: " + e)
    process.exit(1)
})