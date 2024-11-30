import { Repository } from "typeorm";
import { AppDataSource } from "../config/database";
import { Book } from "../models/Book";

export const BookRepository: Repository<Book> = AppDataSource.getRepository(Book);
