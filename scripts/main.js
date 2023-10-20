const myImage = document.querySelector("#course-cards");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/friendly-letter-1.jpeg") {
    myImage.setAttribute("src", "images/info-report.jpeg");
  } else {
    myImage.setAttribute("src", "images/friendly-letter-1.jpeg");
  }
};

let myButton = document.querySelector("#change-user");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome to FabClass, ${myName}`;
    }
  }
  
  myButton.onclick = () => {
    setUserName();
  };