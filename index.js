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
  ь: "",
};
const emailDomain = ["@yandex.ru", "@mail.ru", "@gmail.com"];
//insert number + 1 for pseudo random range (for example if int = 2 then random range = 0 or 1)
function randomInt(int) {
  return Math.floor(Math.random() * int);
}
function randomizeEmail() {
  let additionStr = "";
  let zeroOrOne = randomInt(2);

  if (zeroOrOne === 0) {
    additionStr += randomInt(999);
  } else {
    if (randomInt(2) === 0) {
      additionStr += "-";
    } else {
      additionStr += "_";
    }
  }
  return additionStr;
}
randomizeEmail();
let result = "";
function translate(str) {
  str = str.toLowerCase().split(" ");

  for (let i = 0; i < str[0].length; i++) {
    result += alphabet[str[0][i]];
  }
  let variantStr = randomizeEmail();
  if (variantStr === "-" || variantStr === "_") {
    if (str.length > 1) {
      for (let j = 0; j <= randomInt(3) + 2; j++) {
        if (str[1][j] === undefined) {
          variantStr += "";
        } else {
          variantStr += alphabet[str[1][j]];
        }
      }
    }
  }
  result += variantStr;
  result += emailDomain[randomInt(3)];
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
});
