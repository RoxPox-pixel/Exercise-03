console.log("Exercise-03 Repetitive Control structures");


let value1 = prompt("Insert first number");
value1 = Number(value1);

let value2 = prompt("Insert a higher second number");
value2 = Number(value2);

if (value1 <= value2){
    let output = "";
    for (let i = value1; i <= value2; i++){
        output += i + " , ";
    }
    alert(output);
} else {
    console.log("Please make make the numbers are in ascending order")
}


alert(output);
