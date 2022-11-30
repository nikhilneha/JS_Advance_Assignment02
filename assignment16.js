// Q. Define a class named moviemagic with the following description:
// Instance variables/data methods:
// year                      to store the year of release of a movie
// title                     to store the title of the movie.
// rating                    to store the popularity rating of the movie
//(minimum rating=0.0 and maximum rating=5.0)
// member methods:
// void accept()            to input and store year,title and rating.
// void display()           to display the title of a movie and a message based on the rating as per the table below
// rating              messege to be displayed
// 0.0 to 2.0                 flop
// 2.1 to 3.4                 semi-hit
// 3.5 to 4.5                 hit
// 4.6 to 5.0                 super-hit
// Write a main method to creat an object of thr class and call the above member method.
    


class movieMagic
{
    year; title; rating;

    accept()
    {
        this.year=parseInt(prompt("Enter the year of release of a movie"));
        this.title=prompt("Enter the title of movie");
        this.rating=parseFloat(prompt("Enter the rating of the movie"));
    }
    display()
    {
        document.write("Title Of Movie:-",this.title,"<br>");
        document.write("Year Of Release:-",this.year,"<br>")
        if(this.rating==0.0 && this.rating<=2.0)
        {
            document.write("Flop")
        } 
        else if(this.rating>=2.1 && this.rating<=3.4)
        {
            document.write("Semi-Hit")
        }  
        else if(this.rating>=3.5 && this.rating<=4.5)
        {
            document.write("Hit")
        }
        else if(this.rating>=4.6 && this.rating<=5)
        {
            document.write("Super Hit")
        }
    }
}
let movie=new movieMagic();
movie.accept();
movie.display();