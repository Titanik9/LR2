let num1 = prompt('Enter num1: ');
let num2 = prompt('Enter num2: ');
let num3 = prompt('Enter num3: ');

if(num1 == num2 == num3){
    alert("All numbers are equal!")
} else{
    if (((num1 == num2) ||  (num1 > num2)) && (num1 > num3)) {
        alert(`${num1} is the greatest`); //num1
    } else if (((num2 == num1) || (num2 > num1)) && (num2 > num3)){
        alert(`${num2} is the greatest`); //num2
    } else{
        alert(`${num3} is the greatest`); //num3
    }
}