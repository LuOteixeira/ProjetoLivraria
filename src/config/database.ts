import { DataSource } from "typeorm";
import { Book } from "../models/Book";

export const AppDataSource = new DataSource({
    type: "postgres", // ou "mysql"
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Book],
    synchronize: true, // Não usar em produção
});
