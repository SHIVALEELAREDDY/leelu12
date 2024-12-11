// function hello(){
// ok={
// punithrajkumar:"heroname",
// appu:"moviename",
// puri:"directorname",
// }
// console.log(ok);

// }
// hello()

// printing from 1to10
var a=0;
while(a<=10){
    console.log(a);
    a++
}

// printing from 10to 1
var a=10;
while(a>=1){
    console.log(a);
    a--
}

// printing number from -1 to -10
var a=-1
while(a>=-10){
console.log(a);
a--
}

// /printing number from -10to-1
var a=-10
while(a<=-1){
    console.log(a);
    a++
}

// code to print even and odd digits from user input using while loop 
 var userinput=prompt("enter the number")

var a=0;
while(a<userinput.length ){
    if(userinput[a]%2==0){
        console.log(userinput[a],"evendigit");
        
    }else{
        console.log(userinput[a],"odddigit");
        
    }
    a++
}

// code to print even and odd digits and their sum from user input using while loop 
var userinput=prompt("enter a number");
var a=0;
sumeven=0;
sumodd=0;
while(a<userinput.length){
    if(userinput[a]%2==0){
        sumeven+=Number(userinput[a])
    }else{
        sumodd+=Number(userinput[a])
    }
    a++
}
console.log(sumeven,"sum of even digits in the given number");
console.log(sumodd,"sumof odd digits in the given number");
var a=1;
while(a<=10){
    console.log(a);
    a++
}



