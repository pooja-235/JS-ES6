//default parameter

function calculator(width=5,hight=10){
    return hight * width;
}

console.log(calculator())
console.log(calculator(2,2))
console.log(calculator(15))

function getTodayDate(){
    const today = new Date();
    return today.toDateString();
}

//calling function in default parameter

function printDate(date=getTodayDate()){
    console.log(`today date is ${date}`)
}

printDate()

//destructuring 

const person ={

    firstName:'priya',
    age:18,
    married:false

}

console.log(person.firstName)

//object destructuring

const {firstName,age,married} = person

console.log(married)

//extracting values with object and assigning to diff val

const book ={
    title :'harry poter',
    author:'j.k rolling'
}

const {title:booktitle,author:bookauthor} =book

console.log(booktitle)

console.log(bookauthor)

const book1 = {
    title:'harry potter1',

}

const {title,author='Pooja'} = book1

console.log(author)

//Nested Objects destructuring

const person1 = {
    name:{
        firstName1:'Alice',
        lastName1:'wonderland'
    },
    age1:80,
    married:false
}

const {name:{firstName1,lastName1},age1}=person1

console.log(firstName1)