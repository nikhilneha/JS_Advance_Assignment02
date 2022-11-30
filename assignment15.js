// Q. Define a class telephone having the following description:
// Instance variables/ data menmbers:
// prv,pre                        to store the previous and present metewr reading
// call                           to stores the calls made(i.e pre-prv)
// name                           to store the name of the customer
// amt                            to store the amount
// total                          to store the total amount to be pais

// Members methods:
// void input()                  to input the previous reading,present reading, and the name of the customer
// void cal()                    to calculate the amount and total amount to be paid.
// void display()               to display the name of the customer,calls made, amount and total amount to be paid
//                              in the following format:
//Name                 calls made                     amount               total amount
//write a program to compute the monthly bill to be paid according to the given condition:
// calls made                              rate
// upto 100 calls                         no charge
// for the next 100 calls                 90 paise per call
// for the next 200 calls                 80 paise per call
// more than 400 calls                    70 paise per call
// However every customer has to pay ₹ 180 per month as monthly rent for availing the service.

class Telephone
{
    prv; pre; call; name; amt; total;

    Input()
    {
        this.prv=parseInt(prompt("Enter the previous reading"));
        this.pre=parseInt(prompt("Enter the present reading"));
        this.name=prompt("Enter the name")
    }
    cal()
    {
        this.call=this.pre-this.prv;
        if(this.call<=100)
        {
            this.amt=0
        }
        else if(this.call>100 && this.call<=200)
        {
            this.amt=0*100+(this.call-100)*0.90
        }
        else if(this.call>200 && this.call<=400)
        {
            this.amt=0*100+100*0.90+(this.call-200)*0.80
        }
        else if(this.call>400 && this.call<=800)
        {
            this.amt=0*100+100*0.90+200*0.80+(this.call-400)*0.70
        }
        this.total=this.amt+180;
    }
    display()
    {
        document.write("Name:-",this.name,"<br>","Calls Made:-",this.call,"<br>","Amount:-",this.amt,"<br>",
        "Total Amount:-",this.total)
    }
}
let telephone=new Telephone();
telephone.Input();
telephone.cal();
telephone.display();
