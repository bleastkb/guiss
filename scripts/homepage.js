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
let genderButton = getElementById("genderButton")