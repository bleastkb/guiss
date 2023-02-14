/*
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

this is a new start as u know
*/
/*
let myPet = "dog";
if (myPet === "dog") {
    alert("my dog is back!");
} else {
    alert("This is not my dog~~");
};

document.querySelector("html").addEventListener("click", function() {
    alert("Ouch! Stop poking me!");
});

*/


//const myImage = document.querySelector("img")

const myImage = document.getElementById("pic1")
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/sand.jpeg") {
        myImage.setAttribute("src", "images/bike.jpeg");
    } else if (mySrc === "images/cigar.jpeg") {
        myImage.setAttribute("src", "images/sand.jpeg");

    } else {
        myImage.setAttribute("src", "images/cigar.jpeg");
    }
};

/*
function checkValue(a, b) {
    if (a === 1) {
        if (b === 2) {
            console.log("a is 1 and b is 2");
        } else {
            console.log("a is not 1");
        }
    }
}
*/



let myButton = document.querySelector("button");
let myHeading = document.getElementById("helloname")
/*
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
*/
//Next, the code calls on an API localStorage, which allows us to store data in the browser and retrieve it later. We use localStorage's setItem() function to create and store a data item called 'name', setting its value to the myName variable which contains the user's entry for the name. 
  function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }
  

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };

  
  
  