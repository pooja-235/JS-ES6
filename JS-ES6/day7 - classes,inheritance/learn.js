//define the array and return the sum

const number=[1,2,3,4,5,6,7]

const reduceexam=number.reduce(function(accumulor,currentvalue){
    return accumulor+currentvalue;
},0)

console.log(reduceexam)

//define the sum and return the average

const avg = number.reduce((acc,current)=> acc+current,0)
console.log(avg/number.length)

//Class
class person{
  constructor(x,y){
        this.firstname=x;
        this.lastname=y;
  }

  greetings(){
    console.log(`my first name is ${this.firstname} and last name is ${this.lastname}`)
  }
}

const srinivas = new person('sd','ad');
srinivas.greetings()

class rectangle{
    constructor(height,width,color){
        this.height=height;
        this.width=width;
        this.color=color;
    }

    getArea(){
        return this.height * this.width 
            
        }
}

let redrectangle = new rectangle(10,12,'red')
let bluerectangle = new rectangle(11,12,'blue')

let redarea = redrectangle.getArea()
let bluearea=bluerectangle.getArea()
console.log(redarea,bluearea)

//Inheritence

class animal{
    constructor(name){
        this.name=name
    }

    eat(){
        console.log(`this ${this.name} can eat`)
    }
    sleep(){
        console.log(`this ${this.name} can sleep`)
    }
}

class dog extends animal{
    constructor(name){
        super(name)
    }

    sound(){
        console.log(`this dog barks`)
    }
}

class cat extends animal{
    constructor(name){
        super(name)
    }

    sound(){
        console.log(`this cat meow`)
    }
}

let ani = new animal('animal')
ani.eat();

let d = new dog('dog')
d.sound();
d.eat();

let c = new cat('cat')
c.sound();
c.eat();