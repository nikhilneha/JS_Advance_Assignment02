// Q. Define a class ElectricBill with the following specifications:
// class: ElectricBill
//Instance variable/ Data member:
// n                               to store the name of the customer
// units                           to store the number of units consumed
// bill                            to store the amount to be paid

// Member methods:
// void accept()                   to accept the name of the customer and number of units consumed
// void calculate()                to calculate the bill as per the following tariff:

// Number of units                    Rate per Unit
// first 100 units                     ₹ 2.00
// next 200 units                      ₹ 3.00
// Above 300 units                     ₹ 5.00

// A surcharged of 2.5% charged if the number of units consumed is above the 300 units.
// void print()                  To print the details as follows:
// Name of the customer
// Number of units consumed
// Bill Amount
// write a main method to creat an object of the class and call the above member methods.

class ElectricBill
{
    n; units; bill;

    accept()
    {
        this.n=prompt("Enter the name of customer");
        this.units=parseInt(prompt("Enter the total units consumed"));
    }
    calculate()
    {
        if(this.units<=100)
        {
            this.bill=this.units*2
        }
        else if(this.units>100 && this.units<=300)
        {
            this.bill=this.units*3
        }
        else
        {
            this.bill=(this.units*5)+2.5/100
        }
    }
    print()
    {
        document.write("Name of the customer:-",this.n,"<br>");
        document.write("Number of units consumed:-",this.units,"<br>");
        document.write("Bill Amount:-",this.bill)
    }
}
let Bill=new ElectricBill();
Bill.accept();
Bill.calculate();
Bill.print();

