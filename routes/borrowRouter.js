import express from "express";
import { borrowBook,returnBook,viewAllBorrowed,viewOneBorrowed,viewMemberBorrowed } from '../controllers/borrowingController.js'

const borrowRouter = express.Router();

//Borrow a book
borrowRouter.post("/",  borrowBook);

//Return a book
borrowRouter.delete("/:id",  returnBook);

//View all borrowed books
borrowRouter.get("/",  viewAllBorrowed);

//View a particular book
borrowRouter.get("/:id",  viewOneBorrowed);

//View all borrowings of a particular member
borrowRouter.get("/user/:member_name",  viewMemberBorrowed);

export default borrowRouter;
