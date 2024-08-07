document.querySelector(".range span").innerHTML = 8;
function generate() {
  let dectionary = "";
  if (document.getElementById("lowerchar").checked) {
    dectionary += "abcdefghijklmnopqrstuvwxyz";
  }
  if (document.getElementById("upperchar").checked) {
    dectionary += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (document.getElementById("digits").checked) {
    dectionary += "1234567890";
  }
  if (document.getElementById("symbol").checked) {
    dectionary += "!@#$%^&";
  }
  const length = document.querySelector("input[type='range']").value;

  if (length < 1 || dectionary.length === 0) {
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const pos = Math.floor(Math.random() * dectionary.length);
    password += dectionary[pos];
  }

  document.querySelector("input[type='text']").value = password;
}
[
  ...document.querySelectorAll("input[type='checkbox'], button.generate"),
].forEach((ele) => {
  ele.addEventListener("click", generate);
});

document.querySelector("input[type='range']").addEventListener("input", (e) => {
  document.querySelector("div.range span").innerHTML = e.target.value;
  generate();
});

// copy

document.querySelector("div.password button").addEventListener("click", () => {
  const passwordText = document.querySelector("input[type='text']").value;
  navigator.clipboard.writeText(passwordText).then(() => {
    document.querySelector("div.password button").innerHTML = "copied...";
    setTimeout(() => {
      document.querySelector("div.password button").innerHTML = "copy";
    }, 2000);
  });
});

generate();
