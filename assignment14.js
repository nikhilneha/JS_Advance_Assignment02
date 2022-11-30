// Q. Define a class hotel in with the following description:
// Instance variables/data members:
// Rno                        room number of int type
// name                       customer name of string type
// tariff                     stores per day charges of float type
// nod                        number of days integer

// Member methods:
// calc()                   to calculate and return amount as nod*tariff and if the value of nod*tariff is more than
//                          10000 then as 1.05*nod*tariff
// checkin()                to enter the Rno, name, tariff, nod and amount by calling calc()
// write the main method to creat an object of the class and call the above member methods.



class Hotel
{
    rno; name; tariff; nod;

    calc()
    {
        let amount;
         amount=this.nod*this.tariff;
        if(amount>10000)
        {
            amount=amount*1.05;
        }
        return amount;
    }
    checkIn()
    {
        this.rno=prompt("Enter the room number");
        this.name=prompt("Enter the name of guest");
        this.tariff=parseInt(prompt("Enter the Tariff"));
        this.nod=parseInt(prompt("Enter the number of days you stay"))
    }
    chechOut()
    {
        document.write("Room Number=",this.rno,"<br>");
        document.write("Name=",this.name,"<br>");
        document.write("Tariff=",this.tariff,"<br>");
        document.write("Number of Days=",this.nod,"<br>");
        document.write("Amount=",this.calc());
    }
}
let hotel=new Hotel();
hotel.checkIn();
hotel.chechOut();