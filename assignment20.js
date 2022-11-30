// Q. Design a class RailwtTicket with the following description:

// Instance variable/ Data menbers:
// name                             to store the name of the customer
// coach                            to store the type of coach customer wants to travel
// mobno                            to store customers mobile number
// amt                              to store basic amount of ticket
// totalamt                         to store the amount to be paid after updating the original amount

// Members method:
// void accept()                   to take the input for name,coach, mobile number and amount
// void update()                   to update the amount as per the coach selected
// (extra amount to be added in the amount as follows):
// Type of coaches                     Amount
// First_AC                             700
// Second_AC                            500
// Third_AC                             250
// Sleeper                              none

// void display()                to display all details of a customer such as name,coach,total amount and mobile no.
// write a main method to creat an object of the class and call the above member method.

class RailwtTicket
{
    name; coach; mobno; amt; totalAmt;

    accept()
    {
        this.name=prompt("Enter your name");
        this.coach=prompt("Enter the coach you want to book");
        this.mobno=prompt("Enter your mobile number");
        this.amt=parseInt(prompt("Enter the basic amount"));
    }
    update()
    {
        if(this.coach==="First AC")
        {
            this.totalAmt=this.amt+700
        }
        else if(this.coach==="Second AC")
        {
            this.totalAmt=this.amt+500
        }
        else if(this.coach==="Third AC")
        {
            this.totalAmt=this.amt+250
        }
        else if(this.coach==="Sleeper")
        {
            this.totalAmt=this.amt
        }
    }
    display()
    {
        document.write("Name:-",this.name,"<br>")
        document.write("Coach:-",this.coach,"<br>")
        document.write("Mobile Number:-",this.mobno,"<br>")
        document.write("Total Amount:-",this.totalAmt)
    }
}
let rail=new RailwtTicket();
rail.accept();
rail.update();
rail.display();