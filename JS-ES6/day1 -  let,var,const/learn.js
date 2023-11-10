// function Displayvar(){
//     if(true){
//         var wordvar="Hello this is var keyword"
//     }

//     console.log(wordvar)
// }

// Displayvar()

// function displaylet(){
//     if(true){
//         let wordlet = "hello this let keyword"
//     }

//     console.log(wordlet)
// }

// displaylet()

function hoistingex(){
    console.log(varex)
    console.log(letex)

    var varex = 8
    let letex=10
}

hoistingex()

function assignment1(){
    var a="hello"
    let b="this is let"
    const c= "this is const"

    console.log(a)
}