const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");
const quotation = document.querySelector("#quote");

//const loginBtn = document.getElementById("loginBtn");
const imgTag = document.createElement("img");
// <img src="https://내아이디.github.io/리포지토리명/img/image.jpg">
// https://github.com/racheljeong/momentum/tree/master/img
//imgTag.src = `./img/bgImg.jpg`;
imgTag.src = `https://github.com/racheljeong/momentum/blob/master/img/bgImg.jpg`;
imgTag.id = "backgroundImg";
document.body.appendChild(imgTag);

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;

    if(username === "Rachel" ||username === "rachel" ){
      const imgs = ["wp01.jpg","wp02.jpg","wp03.jpg","wp04.jpg"];
      const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
      imgTag.src = `./img/${randomImg}`;
      document.body.appendChild(imgTag);

      greeting.innerText = `Hello, ${username} !`;
      
    } else {
          greeting.style.color = "#ecf0f1";
          greeting.innerText = `Hello, Stranger!`;
    }

    loginForm.classList.add(HIDDEN_CLASSNAME);
      
    localStorage.setItem("username", username);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    quotation.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);

  }
  
  loginForm.addEventListener("submit", onLoginSubmit);