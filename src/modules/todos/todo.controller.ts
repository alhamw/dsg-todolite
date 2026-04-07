import { FastifyReply, FastifyRequest } from "fastify";
import { TodoService } from "./todo.service";

export async function getTodosHandler(request: FastifyRequest, reply: FastifyReply) {
    const todoService = new TodoService();
    const data = await todoService.getTodos();
    return reply.status(200).send(data);
}
