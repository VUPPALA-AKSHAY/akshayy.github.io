
// OBJECTS AND VARIABLES
/*
const profile = 
{
    namee : "AKSHAY",
    posts : 195,
    followers : 569,
    following : 1100,
    follow: false,
}

profile["posts"] = profile["posts"] + 1;

profile["namee"]  =  "rahul";
console.log(profile["namee"]);
console.log(profile["posts"]);

console.log(profile);


*/
// PROMPT AND IFELSE (INPUT)


/*
let nam = prompt("ENTER THE NUMBER");
if(nam % 5 == 0)
{
    console.log(nam,"IS MULTIPLE OF 5");
}
else
{
    console.log(nam, " IS NOT A MULTIPLE OF 5");
}


console.log("helhlo")

*/

//  GRADE CODE
// let s =prompt("Enter your score");


// if ( s >= 80 && s <= 100 )
// {
//     console.log("GRADE A");
// }
// else if ( s >= 70 && s <= 89)
// {
//     console.log("B");
// }
//  else if(s >= 60 && s <= 69)
//  {
//     console.log("C");   
//  }

//  else if ( s >= 0 && s <= 49)
//  {
//     console.log("fail"); 
//  }

let arr = [2,2,3,4,5];

let newArr = arr.filter((val) => {
    return val + 2 == 4;
});

console.log(newArr);
