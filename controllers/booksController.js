import Books from "../models/books.model.js";

// create a book

export async function createBook(req, res) {
    try {
        let book = await Books.create(req.body);
        if (book) {
            res.status(200).json({
                success: true,
                message: 'Book was added to our database',
                data: book
            })
        } else {
            res.status(200).json({
                success: true,
                message: 'Sorry, book could not be created'
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}


// view all books

export async function viewAllBooks(req, res) {
    try {
        let allbooks = await Books.findAll();
        if (allbooks) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No Book records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}

// view a book
export async function viewBook(req, res) {
    try {
        let allbooks = await Books.findAll({where: {book_id: req.params.id}});
        if (allbooks) {
            res.json({
                success: true,
                message: 'Book records retrieved successfully',
                data: allbooks
            })
        } else {
            res.json({
                success: true,
                message: 'No book records found.',
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}


// edit a book
export async function editBook(req, res) {
    try{
       let book = await Books.findAll({where: {book_id: req.params.id}});
       if (book) {
           await Books.update(req.body, {where : {book_id: req.params.id}})
           .then(res_flag => {
               if (res_flag == 1){
                res.json({
                    success: true, 
                    message: `Book details updated succusfully`
                })
               } else {
                res.json({
                    success: false, 
                    message: `Book details were not updated`
                })
            }
           })
        } 
   } catch (err) {
       console.log(err);
       res.status(500).json({
           success: false,
           message: "Oopss! Something is wrong..."
       })
   }
}

// delete a book record
export async function deleteBook(req, res) {
    try{
        let book = await Books.findAll({where: {book_id: req.params.id}});
        if (book) {
            await Books.destroy({where : {book_id: req.params.id}})
            .then(res_flag => {
                if (res_flag == 1){
                    res.json({
                        success: true, 
                        message: `Book was deleted succusfully`
                    })
                } else {
                    res.json({
                        success: false, 
                        message: `Book was not deleted`
                    })
                }
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Oopss! Something is wrong..."
        })
    }
}