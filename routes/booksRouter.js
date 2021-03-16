import express from "express";
import { createBook,viewBook,viewAllBooks,editBook,deleteBook } from '../controllers/booksController.js'

const booksRouter = express.Router();

//Add a Book
booksRouter.post("/", createBook);

//View a book
booksRouter.get("/:id", viewBook);

//View all books
booksRouter.get("/", viewAllBooks);

//Update / edit book 
booksRouter.put("/:id", editBook);

//Delete a book
booksRouter.delete("/:id", deleteBook);

export default booksRouter;