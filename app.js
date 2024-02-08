const generateBtn = document.getElementById("generateBtn");
const showPara = document.getElementById("content");

generateBtn.addEventListener("click", () => {
  // showPara.innerHTML = "arif Hussain";
  let pass = "";
  let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";
  for (let i = 1; i <= 8; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  showPara.innerHTML = pass;
});
