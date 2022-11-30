// Q. Define a class called FruitJuice with the following description:
// Instance Variables/data members:
// product_code                    stores the product code number
// flavour                         stores the flavour of the juice.(orange,apple,etc)
// pack_type                       stores the type of packaging (tetra-pack,bottle etc)
// pack_size                       stores package size (200ml,400ml etc)
// product_price                   stores the price of the product

// Members method:
// void input()                   to input and stores the product code,flavour, pack type, pack size and product price
// void discount()                to reduce the product price by 10
// void display()                 to display the product code, flavour, pack type, pack size, and product price
// write the main method to creat an object of the class and call the above member methods:

class FruitJuice
{
    product_code; flavour; pack_type; pack_size; product_price;

    input()
    {
        this.product_code=parseInt(prompt("Enter the product code"));
        this.flavour=prompt("Enter the flavour");
        this.pack_type=prompt("Enter the type of pack");
        this.pack_size=prompt("Enter the size of pack in ml");
        this.product_price=parseInt(prompt("Enter the price of the product"));
    }
    discount()
    {
       this.product_price-=10;
    }
    display()
    {
        document.write("Product Code=",this.product_code,"<br>");
        document.write("Flavour=",this.flavour,"<br>");
        document.write("Pack Type=",this.pack_type,"<br>")
        document.write("Pack Size=",this.pack_size,"<br>")
        document.write("Product Price=",this.product_price)
    }
}
let ans=new FruitJuice();
ans.input();
ans.discount();
ans.display();