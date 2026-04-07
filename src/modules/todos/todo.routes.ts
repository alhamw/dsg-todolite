import { FastifyPluginAsync } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";

const todoRoutes: FastifyPluginAsync = async (fastify, options) => {
    fastify.get("/", async (request, reply) => {
        return { message: "Hello World" };
    });
};

export default todoRoutes;