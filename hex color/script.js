var body = document.querySelector("body");
var input = document.getElementById("input");
var button = document.getElementById("btn");
var heading = document.querySelector("h1");
button.addEventListener("click", function () {
  let colorCode = String(input.value);
  let hexCode = `#${colorCode}`;
  let codeCheck = ["a", "b", "c", "d", "e", "f"];
  if (hexCode.length !== 7) {
    heading.innerText = "Invalid color code.";
  } else {
    body.style.background = hexCode;
    heading.style.color = hexCode;
  }
});
