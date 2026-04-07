import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import "dotenv/config";

const runMigrate = async () => {
    if (!process.env.DATABASE_URL) {
        throw new Error("DATABASE_URL is not set");
    }

    const migrationClient = postgres(process.env.DATABASE_URL, { max: 1 });
    const db = drizzle(migrationClient);

    console.log("Start Migrations...");

    const start = Date.now();

    await migrate(db, { migrationsFolder: "drizzle" });

    const end = Date.now();

    console.log(`Completed in ${end - start}ms`);

    process.exit(0);
};

runMigrate().catch((err) => {
    console.error("Migration failed");
    console.error(err);
    process.exit(1);
});
