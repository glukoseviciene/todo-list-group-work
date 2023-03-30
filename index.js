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
  // CONFIRM CHECK
  if (submitBtn.getAttribute("id") === "rgstr_btn") {
    // PASSWORDS
    let format = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(pw);
    if (!format) {
      alert("Check your password format")
      return;
    }
    else if (pw !== pwConfirm) {
      alert("Passwords do not match");
      let pw = document.getElementById("pw").style.border = "2px solid var(--business)";
      let pwConfirm = document.getElementById("pw_confirm").style.border = "2px solid var(--business)";
      return;
    }
    else if ((pw.length < 8) && (pwConfirm.length < 8)) {
      alert("Must be atleast 8 characters long");
      let pw = document.getElementById("pw").style.border = "2px solid var(--business)";
      let pwConfirm = document.getElementById("pw_confirm").style.border = "2px solid var(--business)";
      return;
    }
    else if(pw == "") {
      alert("Please enter Password");
      let pw = document.getElementById("pw").style.border = "2px solid var(--business)";
      let pwConfirm = document.getElementById("pw_confirm").style.border = "2px solid var(--business)";
      return;
    }
    else if((pw == "") && (nickname == "")) {
      alert("Please enter Username and Password");
      let nickname = document.getElementById("name").style.border = "2px solid var(--business)";
      let pw = document.getElementById("pw").style.border = "2px solid var(--business)";
      let pwConfirm = document.getElementById("pw_confirm").style.border = "2px solid var(--business)";
      return;
    }
    // NICKNAME
    else if(nickname == "") {
      alert("Please enter Username");
      let nickname = document.getElementById("name").style.border = "2px solid var(--business)";
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
          alert("Incorrect or empty password");
          let pw = document.getElementById("pw").style.border = "2px solid var(--business)";
          break;
        }
        
      } else if (i === peopleArray.length - 1) {
        console.log("Tokio vartotojo nera")
        alert("User is not exist");
        let nickname = document.getElementById("name").style.border = "2px solid var(--business)";
        let pw = document.getElementById("pw").style.border = "2px solid var(--business)";
      }
    }
  }
});