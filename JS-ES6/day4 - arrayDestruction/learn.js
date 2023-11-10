//array destructure

const numbers = [1,2,3]

const[a,b,c] = numbers

console.log(a,b,c);

//Skip assigning the values

const color =["red","green","blue"]

const[firstcolor,,thirdColor]=color

console.log(firstcolor,thirdColor)


//Array with default values
const fruits = ['apple','banana'];

const [fruit1,fruit2,fruit3="orange"] = fruits

console.log(fruit1,fruit2,fruit3)

const vegiee = ['onion','beetroot','beans']

const [veg1,veg2,veg3,veg4='carrot']=vegiee

console.log(veg1,veg2,veg3,veg4)

//swapping values

let x=1;
let y=2;

[x,y]= [y,x]

console.log(x,y)

//Rest Operator

const num =[1,2,3,4,5,6,7,8,9,10]
const [num1,num2,...rest] =num
console.log(rest)

//spread and rest parameter
let nums=[1,2,3]
let morenums=[...nums,4,5,6]
console.log(morenums)

//combining arrays

const arr1 = [1,2,3];
const arr2 =[4,5,6];
const combinedArray = [...arr1,...arr2]

console.log(combinedArray)

//assignment

const vegs = ['onion','carrot','beetroot']
const fruit=['apple','banana','grapes']
const vegfruit = [...vegs,...fruit]

console.log(vegfruit)

