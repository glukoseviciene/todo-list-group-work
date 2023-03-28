const registerBtn = document.getElementById("rgstr_btn");
const loginBtn = document.getElementById("login_btn");

registerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let nickname = document.getElementById("name").value;
  let pw = document.getElementById("pw").value;
  const peopleData = {
    name: nickname,
    password: pw,
  };

  const peopleArray = JSON.parse(localStorage.getItem("nameAndPassword")) || [];
  peopleArray.push(peopleData);
  localStorage.setItem("nameAndPassword", JSON.stringify(peopleArray));
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let nickname = document.getElementById("name").value;
  let pw = document.getElementById("pw").value;
  const peopleArray = JSON.parse(localStorage.getItem("nameAndPassword"));
  // console.log(peopleArray[0].name);
  for (i = 0; i < peopleArray.length; i++) {
    if (peopleArray[i].name === nickname) {
      if (peopleArray[i].password === pw) {
        console.log("You logged in");
        window.location.href = "main.html";
        break;
      } else {
        console.log("wrong password");
      }
    } else {
      console.log("wrong nickname");
    }
  }
});

// function registerBtn {
//   var nickname = document.getElementById("name");
//   var pw = document.getElementById("pw");
//   const peopleData = {
//     name: "nickname.value",
//     password: "pw.value",
//   };

//   // var lowerCaseLetters = /[a-z]/g;
//   // var upperCaseLetters = /[A-Z]/g;

//   // if (name.value.length == 0) {
//   //   alert("Please fill in email");
//   // } else if (pw.value.length == 0) {
//   //   alert("Please fill in password");
//   // } else if (name.value.length == 0 && pw.value.length == 0) {
//   //   alert("Please fill in email and password");
//   // } else if (!pw.value.match(numbers)) {
//   //   alert("please add 1 number");
//   // } else if (!pw.value.match(upperCaseLetters)) {
//   //   alert("please add 1 uppercase letter");
//   // } else {
//   //   alert("Your account has been created");
//   // }

//   localStorage.setItem(JSON.stringify(peopleData));
//   console.log("works");
// }

//checking
// function check() {
//   var storedName = localStorage.getItem("name");
//   var storedPw = localStorage.getItem("pw");

//   var userName = document.getElementById("userName");
//   var userPw = document.getElementById("userPw");
//   // var userRemember = document.getElementById("rememberMe");

//   if (userName.value == storedName && userPw.value == storedPw) {
//     alert("You are logged in.");
//   } else {
//     alert("Error on login");
//   }
// }
