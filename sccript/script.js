const email = document.querySelector(".email");
const valid = document.querySelector(".valid");
const button = document.querySelector(".email-input");

button.onsubmit = (e) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let a = email.value;

  if (a == "" || !a.match(re)) {
    valid.parentNode.classList.add("active");
    e.preventDefault();
  }
  errorr(email);
};

function errorr(set) {
  set.onclick = () => {
    set.parentNode.classList.remove("active");
    set.value = "";
  };
}
