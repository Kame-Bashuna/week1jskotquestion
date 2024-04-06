//no1

//Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a function to print the person's details

class Person{
    constructor(name,age,country){
        this.name=name;
        this.age=age;
        this.country=country;

    }
     displayDetails(){
        console.log(`I am ${this.name}, am ${this.age} years old,from ${this.country}`)
    }
    
}

const person1=new Person("Frank hope",12,"Rwanda");
person1.displayDetails();


//no2
//Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.Include function to calculate the rectangle area

class Rectangle{
    constructor(height,width){
        this.width=width;
        this.height=height;
    }
    area(){
        return this.width*this.height;
    }
}
const rectangle=new Rectangle(2,17);
const area=rectangle.area();
console.log(`Rectangle area:${area}`);

//no3
//Write a kotlin program that creates a class 'Class' with properties for make,model and year.Include a function to display car information
class Car{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayDetails(){
   
        
        console.log(`The red ${this.make},is ${this.model},made in ${this.year}`)
    }
}
const car1=new Car("Subaru","Imprezza",2010);
car1.displayDetails();


//n04 Write a kotlin program that creates a class 'Student' with properties for name,age and grade.Include a function to check if student is eligeble for promotion
class Student{
    constructor(name,age,grade){
        this.name = name;
        this.age = age;
        this.grade = grade ;
    }
    displayDetails(){
        console.log(`My name is ${this.name},am ${this.age} years , i scored ${this.grade} and i will be promoted next class` )
    }
}
const student1=new Student("Karen",21,"B");
student1.displayDetails();

//no5 Write a kotlin program that create a class 'Book' with properties for title,author and publication year .Include a function to display  book display
class Book{
    constructor(title,author,publicationyears){
        this.title = title;
        this.author = author;
        this.publicationyears = publicationyears;
    }
    displayDetails(){
        console.log(`The ${this.title} is written by ${this.author} in ${this.publicationyears}`)
    }
}
const book1=new Book("Galasi","hail hope",2021);
book1.displayDetails();