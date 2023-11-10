// 4.  The reduce method is used to:
// *
// 1 point
// a) Add all elements of an array together
// b) Remove elements from an array
// c) Filter elements based on a condition
// d) Sort an array in ascending order
// Option 5

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