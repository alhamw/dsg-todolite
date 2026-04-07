import { FastifyPluginAsync } from "fastify";
import {
    getTodosHandler,
    getTodoByIdHandler,
    createTodoHandler,
    updateTodoHandler
} from "./todo.controller.js";
import {
    paramsSchema,
    createTodoSchema,
    updateTodoSchema
} from "./todo.schema.js";

const todoRoutes: FastifyPluginAsync = async (fastify, options) => {
    fastify.get("/", getTodosHandler);
    fastify.get("/:id", { schema: { params: paramsSchema } }, getTodoByIdHandler);
    fastify.post("/", { schema: { body: createTodoSchema } }, createTodoHandler);
    fastify.put("/:id", { schema: { params: paramsSchema, body: updateTodoSchema } }, updateTodoHandler);
};

export default todoRoutes;