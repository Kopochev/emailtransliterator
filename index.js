const alphabet = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "e",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "sh",
  ъ: "ie",
  э: "e",
  ю: "yu",
  я: "ya",
  ы: "",
};
const emailDomain = ["@yandex.ru", "@mail.ru"];
let result = "";
function translate(str) {
  str = str.toLowerCase().split(" ");
  console.log(str);
  for (let i = 0; i < str[0].length; i++) {
    result += alphabet[str[0][i]];
  }
  result += emailDomain[Math.floor(Math.random() * 2)];
}

const inputText = document.querySelector(".nameInput");
const resultText = document.querySelector(".text");
const btnCopy = document.querySelector(".copy");
const btnPaste = document.querySelector(".paste");
function rewriteText() {
  translate(resultText.textContent);
  resultText.textContent = result;
  result = "";
}
inputText.addEventListener("input", (e) => {
  resultText.textContent = e.target.value;
  rewriteText();
});

btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(resultText.textContent);
});
async function paste() {
  await navigator.clipboard.readText().then((clipText) => (resultText.textContent = clipText));
  await navigator.clipboard.readText().then((clipText) => (inputText.value = clipText));
  rewriteText();
}
btnPaste.addEventListener("click", () => {
  paste();
  //setTimeout(rewriteText, 300);
});
