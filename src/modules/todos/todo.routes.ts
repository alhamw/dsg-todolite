import { FastifyPluginAsync } from "fastify";
import {
    getTodosHandler,
    getTodoByIdHandler,
    createTodoHandler
} from "./todo.controller";
import { paramsSchema, createTodoSchema } from "./todo.schema";

const todoRoutes: FastifyPluginAsync = async (fastify, options) => {
    fastify.get("/", getTodosHandler);
    fastify.get("/:id", { schema: { params: paramsSchema } }, getTodoByIdHandler);
    fastify.post("/", { schema: { body: createTodoSchema } }, createTodoHandler);
};

export default todoRoutes;