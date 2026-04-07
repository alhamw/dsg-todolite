import { FastifyPluginAsync } from "fastify";
import {
    getTodosHandler,
    getTodoByIdHandler
} from "./todo.controller";
import { paramsSchema } from "./todo.schema";

const todoRoutes: FastifyPluginAsync = async (fastify, options) => {
    fastify.get("/", getTodosHandler);
    fastify.get("/:id", { schema: { params: paramsSchema } }, getTodoByIdHandler);
};

export default todoRoutes;