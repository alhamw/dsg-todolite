import "dotenv/config";
import app from "./app";

const start = async () => {
    try {
        const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
        const host = process.env.HOST || "0.0.0.0";

        await app.listen({ port, host });
        console.log(`Server running on ${host}:${port}`);
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};

start();