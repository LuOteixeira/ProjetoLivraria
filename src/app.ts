import express from "express";
import "reflect-metadata"; // Necessário para o TypeORM
import { AppDataSource } from "./config/database";
import bookRoutes from "./routes/bookRoutes";

const app = express();

app.use(express.json());
app.use(bookRoutes);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("Banco de dados conectado com sucesso!");
        app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
    })
    .catch((error) => console.error("Erro ao conectar no banco de dados", error));
