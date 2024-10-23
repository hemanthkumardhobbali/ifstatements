var age=22;
if(age >= 18) {
    console.log("eligible for vote" )
}else{
    console.log("not eligible")
}

var weather = "rainy";
if (weather === "rainy") {
    console.log("It's pouring outside");
} else {
    console.log("Not raining");
}

var marks = "76";
if (marks > 90){
    console.log( " grade of students is A+")
}else if ( marks >81 && marks <90 ){
    console.log("grade of students is A")
}else if ( marks >71 && marks <80 ){
    console.log("grade of students is B+")
}else if ( marks >61 && marks <70 ){
    console.log("grade of students is C+")
}else if ( marks >51 && marks <60 ){
    console.log("grade of students is C")
}else if ( marks >41 && marks <50 ){
    console.log("grade of students is D")
}else {
    console.log("Fail")
}