// if else
// var result = 50 ; 
// if (result>40){
//     console.log("You passed the test")
// }
// else{
//     console.log("you failed the test")
// }


//switch statment

// var place = 'first';

// switch(place){
//     case'first':
//     console.log('Gold');
//     break;
//     case 'second':
//         console.log('Silver');
//     break;
//     case 'third':
//         console.log('bronze');
//     break;
//     default:
//         console.log('no medal');
// }


// ////Defensive programming
// function letterFinder(word, match) {
//     var condition1 = typeof(word) == 'string' && word.length >= 2;
//     var condition2 = typeof(match)== 'string' && match.length == 1;
//     if (condition1==true && condition2 ==true){
    
//         for( var i = 0; i < word.length; i++) {
//             if(word[i] == match) {
//                 console.log('Found the', match, 'at', i)
//             } else {
//                 console.log('---No match found at', i)
//             }
//         }
//     } else{
//         console.log("Please pass correct arguments to the function.")
//     }
// }
// letterFinder(9,9);
// letterFinder("Cat","t");


// // Recursive function

// var counter = 3;
// function example(){
//     console.log(counter);
//     counter --;
//     // counter = counter-1;
//     if (counter===0){ return;}
//     example()
    
// }
// example()


// //OOP
// var virtualPet = {
//     sleepy: true,
//     nap: function() {
//         this.sleepy = false
//     }
// }
// console.log(virtualPet.sleepy) // true
// virtualPet.nap()
// console.log(virtualPet.sleepy) // false


// //Funtioncal programming
// var shoes =100;
// var stateTax =1.2;
// function totalPrice(shoes,tax){
//     return shoes*tax;

// }
// var toPay = totalPrice(shoes,stateTax);
// console.log(toPay);


// // OOP 1 
// var purchase1={
//     shoes:100,
//     stateTax :1.2,
//     totalPrice :function(){
//         var calculation = purchase1.shoes * purchase1.stateTax;
//         console.log('Total price :',calculation);
//     }
// }
// purchase1.totalPrice();


// // OOP 2 
// var purchase2={
//     shoes:50,
//     stateTax :1.2,
//     totalPrice :function(){
//         var calculation = purchase2.shoes * purchase2.stateTax;
//         console.log('Total price :',calculation);
//     }
// }
// purchase2.totalPrice();

// // OOP 1 
// var purchase1={
//     shoes:100,
//     stateTax :1.2,
//     totalPrice :function(){
//         var calculation = this.shoes * this.stateTax;
//         console.log('Total price :',calculation);
//     }
// }
// purchase1.totalPrice();


// // OOP 2 
// var purchase2={
//     shoes:50,
//     stateTax :1.2,
//     totalPrice :function(){
//         var calculation = this.shoes * this.stateTax;
//         console.log('Total price :',calculation);
//     }
// }
// purchase2.totalPrice();



/*----------------------- MUTILINE TEMPLATE LITERALS------------------ */
//ES6 Multi-line template literals 

let multiline =`
    Using ES6 
    back tricks 
    multiline
    strings are 
    possible!
    `

    console.log(multiline)