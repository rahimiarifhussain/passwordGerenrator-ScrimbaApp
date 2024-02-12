const generateBtn = document.getElementById("generateBtn");
const showPara = document.getElementById("content");

const expPara = document.getElementById("exp");

generateBtn.addEventListener("click", () => {
  // showPara.innerHTML = "arif Hussain";
  let pass = "";
  let pass1 = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";
  for (let i = 1; i <= 8; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  showPara.innerHTML = pass;
  for (let index = 1; index <= 8; index++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass1 += str.charAt(char);
  }
  expPara.innerHTML = pass1;
});
