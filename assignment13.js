// Q.Define a class flight with the following description:
// Instance variables/ Data members:
// fl_no                       to store the flight number of int type.
// dest                        to store the destination of the flight of string type.
// dist                        to store the distance of the flight of float type.
// fuel                        to store the uel required by the flight of float type.

// Member Methods:
// calfuel()                  to calculate the value of fuel as per the following criteria
// distance                         fuel
// <=1000                            500
// >1000 and <=2000                  1100
// >2000                             2200
// feedinfo()               to allow user to enter values for flight number,destination,distance and call function
//                          calfuel() to calculate the qauntity of fuel.
// showinfo()              to allow user to view the content of all the data members.
// write the main method to creat an object of the class and call the above member methods.


class Flight
{
    fl_no; dest; dist; fuel;

    calfuel()
    {
        if(this.dist<=1000)
        {
        this.fuel=500
        }
       else if(this.dist>1000 && this.dist<=2000)
       {
       this.fuel=1100    
       }
      else if(this.dist>2000)
      {
        this.fuel=2200
      }
    }
    feedinfo()
    {
        this.fl_no=prompt("Enter your flight number");
        this.dest=prompt("Enter your destination");
        this.dist=parseInt(prompt("Enter the distance of your destination"));
        this.calfuel();
    }
    showinfo()
    {
       document.write("Flight No.=",this.fl_no,"<br>");
       document.write("Destination=",this.dest,"<br>");
       document.write("Distance=",this.dist,"<br>");
       document.write("Fuel=",this.fuel)
    }
}
let flight=new Flight();
flight.feedinfo();
flight.showinfo();