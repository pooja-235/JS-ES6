//arrow function 

const add = (a,b) => {return a+b}

let total = add(20,20)

console.log(total)

//arrow function with no return  

const add1 =(b,c)=> b+c

console.log(add1(8,9))

//arrow function with no argument

const display = () => {return "arrow function with no argument"}

console.log(display())

//arrow function with single argument 

const double =a =>a*a

console.log(double(7))


//Template literals `${..}`

const name ='john'

const greeting = `hello, ${name}`

console.log(greeting)

//declare name and age and display using template literals

const name1 ='pooja'
const age='xyz'

let display1 =`my name is ${name1} and age is ${age}`

console.log(display1)

const mutiline = `this is line 1
this is line 2
this is line 3 
`
console.log(mutiline)

//express intepolation
//template literals will evaluate the expression

const g = 10
const h = 10

const result = `${g} +${h} = ${g+h}`

console.log(result)

//template literal for evaluation the functions also

function add3(a,b){
return a+b
}

const message = `the sum of 10 and 20 is ${add3(10,20)}`

console.log(message)

//default parameter

function guest(name='guest'){
    console.log(`hello ${name}`)
}

guest('pooja')
guest()