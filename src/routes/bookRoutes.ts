import { Router } from "express";
import { BookController } from "../controllers/BookController";

const bookRoutes = Router();

bookRoutes.post("/books", BookController.create);
bookRoutes.get("/books", BookController.list);
bookRoutes.get("/books/:id", BookController.get);
bookRoutes.put("/books/:id", BookController.update);
bookRoutes.delete("/books/:id", BookController.delete);

export default bookRoutes;
