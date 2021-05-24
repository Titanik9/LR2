let namee = prompt("What you name?");
let password = prompt("What you password?")
let message;

if ((namee == "ivan" && password == "333")||(namee == "gibs" && password == "0000")||(namee == "ssss" && password == "666")) {
      message = "Welcome!";
  
} else {
  message = "User cannot be found"
}

alert(message);