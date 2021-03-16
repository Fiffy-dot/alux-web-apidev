import express from "express";
import membersRouter from "./membersRouter.js"
import booksRouter from './booksRouter.js'

const router = express.Router();



router.use("/members", membersRouter);
router.use("/books", booksRouter);


export default router;