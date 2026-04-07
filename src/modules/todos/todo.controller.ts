import { FastifyReply, FastifyRequest } from "fastify";
import { TodoService } from "./todo.service.js";
import { TodoParams, CreateTodoSchema, UpdateTodoSchema } from "./todo.schema.js";

export async function getTodosHandler(request: FastifyRequest, reply: FastifyReply) {
    const todoService = new TodoService();
    const data = await todoService.getTodos();
    return reply.status(200).send(data);
}

export async function getTodoByIdHandler(
    request: FastifyRequest<{ Params: TodoParams }>,
    reply: FastifyReply
) {
    const todoService = new TodoService();
    const { id } = request.params;
    const data = await todoService.getTodoById(id);

    if (!data) {
        return reply.status(404).send({ message: "Todo not found" });
    }

    return reply.status(200).send(data);
}

export async function createTodoHandler(
    request: FastifyRequest<{ Body: CreateTodoSchema }>,
    reply: FastifyReply
) {
    const todoService = new TodoService();
    const data = await todoService.createTodo(request.body);
    return reply.status(201).send(data);
}

export async function updateTodoHandler(
    request: FastifyRequest<{ Params: TodoParams, Body: UpdateTodoSchema }>,
    reply: FastifyReply
) {
    const todoService = new TodoService();
    const { id } = request.params;
    const data = await todoService.updateTodo(id, request.body);

    if (!data) {
        return reply.status(404).send({ message: "Todo not found" });
    }

    return reply.status(200).send(data);
}