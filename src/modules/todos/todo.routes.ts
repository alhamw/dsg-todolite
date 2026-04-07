import { FastifyPluginAsync } from "fastify";
import {
    getTodosHandler,
    getTodoByIdHandler,
    createTodoHandler,
    updateTodoHandler,
    deleteTodoHandler
} from "./todo.controller";
import {
    paramsSchema,
    createTodoSchema,
    updateTodoSchema
} from "./todo.schema";

const todoRoutes: FastifyPluginAsync = async (fastify, options) => {
    fastify.get("/", getTodosHandler);
    fastify.get("/:id", { schema: { params: paramsSchema } }, getTodoByIdHandler);
    fastify.post("/", { schema: { body: createTodoSchema } }, createTodoHandler);
    fastify.put("/:id", { schema: { params: paramsSchema, body: updateTodoSchema } }, updateTodoHandler);
    fastify.delete("/:id", { schema: { params: paramsSchema } }, deleteTodoHandler);
};

export default todoRoutes;