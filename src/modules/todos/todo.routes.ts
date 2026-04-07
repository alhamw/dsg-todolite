import { FastifyPluginAsync } from "fastify";
import { getTodosHandler } from "./todo.controller";

const todoRoutes: FastifyPluginAsync = async (fastify, options) => {
    fastify.get("/", getTodosHandler);
};

export default todoRoutes;