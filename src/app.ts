import Fastify, { FastifyError } from "fastify";
import {
    serializerCompiler,
    validatorCompiler,
    ZodTypeProvider,
} from "fastify-type-provider-zod";
import todoRoutes from "./modules/todos/todo.routes";

const app = Fastify({ logger: true }).withTypeProvider<ZodTypeProvider>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler((error: FastifyError, request, reply) => {
    app.log.error(error);

    if (error.validation) {
        return reply.status(400).send({
            statusCode: 400,
            error: "Bad Request",
            message: error.message,
        });
    }

    const statusCode = error.statusCode ?? 500;
    return reply.status(statusCode).send({
        statusCode,
        error: "Internal Server Error",
        message: statusCode < 500 ? error.message : "Something went wrong",
    });
});

app.register(todoRoutes, { prefix: "/todos" });

export default app;