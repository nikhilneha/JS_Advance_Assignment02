// Q. Define a class parkinglot with the following description:
// /instance variables/dats members:
// vno                       to store the vehicle number
// hours                     to store the number of hours the vehicle is parked in the parkinglot
// bill                      to store the bill amount 

// Member methods:
// void input()            to input and store vno and hours
// void calculate()        to compute thr parking charge at the rate of 3 for the firdt hour or part thereof,
//                         and 1.50 for each additional hour or part thereof.
// void display()          to display the details
// Write a main method to create an object of ther class and call the above methods. 


class ParkingLot
{
    vno; hours; bill;

   Input()
   {
     this.vno=prompt("Enter your vehicle number")
     this.hours=parseInt(prompt("Enter the number of hours the vehicle is parked in the parking lot"))
   }
   calculate()
   {
    if(this.hours==1)
    {
        this.bill=this.hours*3
    }
    else
    {
        this.bill=this.hours*1.50+1.5
    }
   }
   display()
   {
    document.write("Vehicle No.:-",this.vno,"<br>","Parking hours:-",this.hours,"<br>","Bill:-",this.bill)
   }
}
let parking=new ParkingLot();
parking.Input();
parking.calculate();
parking.display();