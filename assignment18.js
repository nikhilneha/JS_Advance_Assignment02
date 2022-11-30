// Q.zdefine a class name bookfair with the followingbdescription:
// Instance variables/data members:
// bName                    stores the name of the book
// price                    stores the price of the book

// Member methods:
// void input()             to input and store the name and the price of the book.
// void calculate()         to calculate the price after discount.Discount is calculated based on the following criteria
// Price                                                       Discount
// less than or equal to ₹ 1000                               2% of price
// more than ₹1000 and less than or equal to ₹3000            10% of price
// more than ₹ 3000                                           15% of price
// void display()          to display the name and price of the book after discount.
// write a main method to create an object of the class and callthe above member method.



class BookFair
{
    bName; price;
    Input()
    {
        this.bName=prompt("Enter the book name");
        this.price=parseInt(prompt("Enter the price of the book"));
    }
    calculate()
    {
        if(this.price<=1000)
        {
            this.price=this.price-(2/100*this.price)
        }
        else if(this.price>1000 && this.price<=3000)
        {
            this.price=this.price-(10/100*this.price)
        }
        else
        {
            this.price=this.price-(15/100*this.price)
        }
    }
    display()
    {
        document.write("Book Name:-",this.bName,"<br>","Price after discount:-",this.price)
    }
}
let ans=new BookFair();
ans.Input();
ans.calculate();
ans.display();