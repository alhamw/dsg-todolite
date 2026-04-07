import {
    getTodosHandler,
} from "../todo.controller";
import { todoService } from "../todo.service";
import { FastifyReply, FastifyRequest } from "fastify";

vi.mock("../todo.service", () => {
    const mockService = {
        getTodos: vi.fn(),
    };
    return {
        todoService: mockService,
        TodoService: vi.fn().mockImplementation(() => mockService),
    };
});

describe("getTodosHandler", () => {
    it("should return all todos", async () => {
        const mockTodos = [
            { id: 1, title: "Task 1", description: "Description 1", isCompleted: false, createdAt: new Date(), updatedAt: new Date() },
            { id: 2, title: "Task 2", description: "Description 2", isCompleted: true, createdAt: new Date(), updatedAt: new Date() }
        ];

        (todoService.getTodos as any).mockResolvedValue(mockTodos);

        const request = {} as FastifyRequest;
        const reply = {
            status: vi.fn().mockReturnThis(),
            send: vi.fn().mockReturnThis(),
        } as unknown as FastifyReply;

        await getTodosHandler(request, reply);

        expect(todoService.getTodos).toHaveBeenCalled();
        expect(reply.status).toHaveBeenCalledWith(200);
        expect(reply.send).toHaveBeenCalledWith(mockTodos);
    });
})
