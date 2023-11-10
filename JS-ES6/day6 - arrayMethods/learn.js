//foreach

const fruits=['apple','banana','orange','mango','jack fruit']

fruits.forEach(function(fruit){
    console.log(fruit)
})

//filter :filter elements based on specific criteria

const numbers=[1,2,3,4,5,6,7,8]

const even=numbers.filter(function(num){
    return num%2===0
})

console.log("filter example",even)

const lengthfruit = fruits.filter(function(fruit){
    return fruit.length == 5
})

const length = fruits.filter(fruit=>fruit.length>5)

console.log(lengthfruit)
console.log(length)

//named function

function fruitlength(fruit){
    return fruit.length > 5
}

const namedfunc = fruits.filter(fruitlength)

console.log(namedfunc)

//find method
//output of find is single elements,as soon as it finds the match it will exit the loop
//output of filter is array of elements

const findmethod = fruits.find((fruit)=>fruit.length>5)

console.log(findmethod)

//some and every

//some method checks if at least one element in array meets a specific condition

const hasEvenNumbers = numbers.some(function(num){
    return num %2 ===0
})

console.log(hasEvenNumbers)

//in this example,the some method returns true because
//there is atleast one even number(8) in array

//define array of employees with name, age,gender,salary and city

const employee= [{
    name:'john',
    age:20,
    gender:'male',
    salary:25000,
    city:'banglore'
},
{
    name:'marie',
    age:20,
    gender:'female',
    salary:35000,
    city:'chennai'
},
{
    name:'rakesh',
    age:30,
    gender:'male',
    salary:25000,
    city:'banglore'
}]

const IsfemaleEmployeeExits = employee.some(function(employee){
    return employee.gender === 'female';
})

console.log(IsfemaleEmployeeExits)

//chacks all are female employees

const AreAllfemaleEmployee = employee.every(function(employee){
    return employee.gender === 'female';
})

console.log(AreAllfemaleEmployee)

//create a string called pooja and create array out of it

const pooja='pooja'
const poojaarray=Array.from(pooja)

console.log(poojaarray)

//create an array using the array.of with parameter of students i.e haritha,navya,pooja,kumar

const students = Array.of('haritha','navya','pooja','kumar')
console.log(students)

//Map
//This is a fundamental use case of map method,where it transform the elements of an array
//into a new array based on specific operation

const doublenumbers =numbers.map(function(num){
    return num *2
})

console.log(doublenumbers)


//Assignments
const student = [
    { id: 1, name: 'Alice', age: 20, grade: 'A' },
    { id: 2, name: 'Bob', age: 22, grade: 'B' },
    { id: 3, name: 'Charlie', age: 21, grade: 'C' },
    { id: 4, name: 'David', age: 23, grade: 'B' },
    { id: 5, name: 'Eve', age: 19, grade: 'A' },
   ];

//print name and age

   student.forEach(function(stu1){
    console.log("name is ",stu1.name,"age is ",stu1.age)
   })

//student with grade a

const Grades = student.filter(function(stu){
    return stu.grade == 'A'
})

//output is diff
console.log(Grades)

Grades.forEach(function(grade){
    console.log(grade.grade)
})

const newmap = student.map(function(name){
    return name.name
})

console.log(newmap)

//some
 const somestu = student.some(function(stu){
    return stu.age>22
 })

 console.log("checking some",somestu)

 //every

 const everystu = student.every(function(stu){
    return stu.age >18
 })

 console.log("checking every",everystu)

 //find

 const findstu = student.find(function(stu){
    return stu.name =='Charlie'
 })

 console.log(findstu)