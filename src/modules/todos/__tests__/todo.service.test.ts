import { todoService } from "../todo.service";
import { db } from "../../../config/db";

vi.mock("../../../config/db", () => ({
    db: {
        select: vi.fn().mockReturnThis(),
        from: vi.fn().mockReturnThis(),
        where: vi.fn().mockReturnThis(),
        orderBy: vi.fn().mockReturnThis(),
        insert: vi.fn().mockReturnThis(),
        update: vi.fn().mockReturnThis()
    }
}))

describe("TodoService", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe("getTodos", () => {
        it("should get all todos", async () => {
            const mockTodos = [
                { id: 1, title: "Task 1", description: "Description 1", isCompleted: false, createdAt: new Date(), updatedAt: new Date() },
                { id: 2, title: "Task 2", description: "Description 2", isCompleted: true, createdAt: new Date(), updatedAt: new Date() },
                { id: 3, title: "Task 3", description: "Description 3", isCompleted: false, createdAt: new Date(), updatedAt: new Date() },
            ]

            vi.mocked(db.select).mockReturnValue({
                from: vi.fn().mockReturnThis(),
                where: vi.fn().mockReturnThis(),
                orderBy: vi.fn().mockReturnThis(),
                then: (onFullfilled: any) => Promise.resolve(mockTodos).then(onFullfilled),
            } as any);

            const result = await todoService.getTodos();
            expect(result).toEqual(mockTodos);
        });
    });

    describe("createTodo", () => {
        it("should create a new todo", async () => {
            const mockTodo = { id: 1, title: "Task 1", description: "Description 1", isCompleted: false, createdAt: new Date(), updatedAt: new Date() };
            const mockData = { title: "Task 1", description: "Description 1" };

            vi.mocked(db.insert).mockReturnValue({
                values: vi.fn().mockReturnThis(),
                returning: vi.fn().mockReturnThis(),
                then: (onFullfilled: any) => Promise.resolve([mockTodo]).then(onFullfilled),
            } as any);

            const result = await todoService.createTodo(mockData);
            expect(result).toEqual(mockTodo);
        });
    });

    describe("updateTodo", () => {
        it("should update an existing todo", async () => {
            const mockTodo = { id: 1, title: "Task 1", description: "Description 1", isCompleted: false, createdAt: new Date(), updatedAt: new Date() };
            const mockData = { title: "Task 1", description: "Description 1" };

            vi.mocked(db.update).mockReturnValue({
                set: vi.fn().mockReturnThis(),
                where: vi.fn().mockReturnThis(),
                returning: vi.fn().mockReturnThis(),
                then: (onFullfilled: any) => Promise.resolve([mockTodo]).then(onFullfilled),
            } as any);

            const result = await todoService.updateTodo(1, mockData);
            expect(result).toEqual(mockTodo);
        });
    })
}); 