//copying the array
const arr1 =[1,2,3,4,5]

const arr2 = [...arr1]

console.log(arr2)

//== vs === comparision

10 == "10" //true

10 ==="10"//false

//type conversion happens here

console.log(arr1 ===arr2)

arr2.push(6)

const arr3 = arr2

arr2.push(8)

console.log(arr3,arr2)
console.log(arr3 ===arr2)

//with equals operator the it always points to same location(clone of the reference) and even modifies original value if modidfied
//with spread operator clone of the copy is created and does not effect the original value if modidfied

//spread parameter in the object

const person = {name:'john',age:21}
const newperson={...person,age:31,address:'123 main st'};

console.log(newperson)

console.log(newperson)

newperson1=person;

newperson1.address = "batawadi";

console.log(newperson1 == person);

console.log(person)
console.log(newperson1)


//Rest parameter in function calls
function sum(...numbers){
    let total = 0;
    for(let n of numbers){
        total += n;
    }

    return total
}

console.log(sum(1,2,3,4,5))//15
console.log(sum(1,2))//3
console.log(sum())//0

//combining regular parameter with rest parameter
//concatinate fruits with '-' separator using regular and rest parameter and  print the result

function concatinate(separotor,...fruits){
    return fruits.join(separotor)
}

console.log(concatinate('-','apple','mango','banana','orange'))

//Array New Methods

