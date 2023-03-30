const chooseRegisterForm = document.querySelector("#chooseRegisterForm");
const chooseLoginForm = document.querySelector("#chooseLoginForm");
const submitBtn = document.getElementById("submit_btn");
const helperText = document.getElementById("helperText");
const greetingTitle = document.getElementById("greetingTitle");
const input_container = document.getElementById("input_container");
const pw_confirmOnOff = document.getElementById("pw_confirmOnOff");

chooseRegisterForm.style.opacity = "0.60";
helperText.style.display = "none";
chooseLoginForm.addEventListener("click", (e) => {
  e.preventDefault();
  helperText.style.display = "none";
  greetingTitle.innerHTML = "Log in";
  submitBtn.setAttribute("id", "login_btn");
  chooseLoginForm.style.opacity = "1";
  chooseRegisterForm.style.opacity = "0.60";
  pw_confirmOnOff.style.display = "none";
});

chooseRegisterForm.addEventListener("click", (e) => {
  e.preventDefault();
  helperText.style.display = "block";
  greetingTitle.innerHTML = "Sign up";
  submitBtn.setAttribute("id", "rgstr_btn");
  chooseRegisterForm.style.opacity = "1";
  chooseLoginForm.style.opacity = "0.60";
  pw_confirmOnOff.style.display = "block";
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let nickname = document.getElementById("name").value;
  let pw = document.getElementById("pw").value;
  let pwConfirm = document.getElementById("pw_confirm").value;
  const peopleArray = JSON.parse(localStorage.getItem("nameAndPassword")) || [];
  if (submitBtn.getAttribute("id") === "rgstr_btn") {
    if (pw !== pwConfirm) {
      console.log("Passwords do not match");
      alert("pw nematchina");
      return;
    }
    const peopleData = {
      name: nickname,
      password: pw,
    };
    peopleArray.push(peopleData);
    localStorage.setItem("nameAndPassword", JSON.stringify(peopleArray));
    console.log("Priregistruota");
    alert("Priregistruota");
  } else {
    for (i = 0; i < peopleArray.length; i++) {
      if (peopleArray[i].name === nickname) {
        if (peopleArray[i].password === pw) {
          console.log("Prijungta");
          window.location.href = "main.html";
          break;
        } else {
          console.log("Blogas pw");
          alert("Blogas pw");
          break;
        }
      } else if (i === peopleArray.length - 1) {
        console.log("Nera tokio user");
        alert("Nera tokio user");
      }
    }
  }
});

// const registerBtn = document.getElementById("rgstr_btn");
// const loginBtn = document.getElementById("login_btn");

// const chooseRegisterForm = document.querySelector("#chooseRegisterForm");
// const chooseLoginForm = document.querySelector("#chooseLoginForm");

// chooseLoginForm.addEventListener("click", (e) => {
//   e.preventDefault();
//   const registerBtn = document.getElementById("rgstr_btn");
//   const loginBtn = document.getElementById("login_btn");
//   const helperText = document.getElementById("helperText");
//   const greetingTitle = document.getElementById("greetingTitle");
//   helperText.style.display = "none";
//   greetingTitle.innerHTML = "Log in";
//   registerBtn.setAttribute("id", "login_btn");
// });
// chooseRegisterForm.addEventListener("click", (e) => {
//   e.preventDefault();
//   const registerBtn = document.getElementById("rgstr_btn");
//   const loginBtn = document.getElementById("login_btn");
//   const helperText = document.getElementById("helperText");
//   const greetingTitle = document.getElementById("greetingTitle");
//   helperText.style.display = "block";
//   greetingTitle.innerHTML = "Sign up";
//   loginBtn.setAttribute("id", "rgstr_btn");
// });

// loginBtn.addEventListener("click", (e) => {
//   // e.preventDefault();
//   let nickname = document.getElementById("name").value;
//   let pw = document.getElementById("pw").value;
//   const peopleArray = JSON.parse(localStorage.getItem("nameAndPassword"));
//   // console.log(peopleArray[0].name);
//   console.log("Veikia");
//   for (i = 0; i < peopleArray.length; i++) {
//     if (peopleArray[i].name === nickname) {
//       if (peopleArray[i].password === pw) {
//         console.log("You logged in");
//         window.location.href = "main.html";
//         break;
//       } else {
//         console.log("wrong password");
//       }
//     } else {
//       console.log("wrong nickname");
//     }
//   }
// });
// registerBtn.addEventListener("click", (e) => {
//   // e.preventDefault();
//   let nickname = document.getElementById("name").value;
//   let pw = document.getElementById("pw").value;
//   const peopleData = {
//     name: nickname,
//     password: pw,
//   };

//   const peopleArray = JSON.parse(localStorage.getItem("nameAndPassword")) || [];
//   peopleArray.push(peopleData);
//   localStorage.setItem("nameAndPassword", JSON.stringify(peopleArray));
// });

//////////////////////////////////////////////////////////////////////////
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
