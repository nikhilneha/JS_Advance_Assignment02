// Q.Define a class book with the following specification:
// Instance variable/data members:
// book_no                       int type to store the book number
// book_title                    string type to store the title of the book
// price                         float type to store the price per copy

// Members Methods:
// total_cost()                 to calculate the total cost for N number of copies,where N is passed to the function
//                              as argument.
// input()                      to read book_no,book_title,price
// purchase()                   to ask the user to input number of copies to be purchased.
// It invokes total_cost() and prints the total cost to be paid by the user.Write the main method to creat an object
// of the class and call the above member methods.


class Book
{
    book_no; book_title; price;

    input()
    {
        this.book_no=prompt("Enter the book number");
        this.book_title=prompt("Enter the title of book");
        this.price=parseInt(prompt("Enter the price of the book"))
    }
    total_cost(n)
    {
        let tCost=this.price*this.n;
        document.write("Total Cost=",tCost,"<br>");
    }
    purchase()
    {
        this.n=parseInt(prompt("Enter the number of copies to be purchase"));
        this.total_cost(this.n);
    }
}
let book=new Book();
book.input();
book.purchase();