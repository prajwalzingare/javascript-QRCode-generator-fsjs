let btn = document.querySelector(".submit");
let main = document.querySelector(".main");
let qrInput = document.querySelector(".main input");
let qrImg = document.querySelector(".qr-code img");
const loader = document.getElementById("loader");

console.log(qrImg.src);
let preValue;
btn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  qrImg.classList.toggle("hidden"); // on ➡️ Off turnIntoOn to 'Off'
  loader.classList.toggle("hidden"); // Off ➡️ On turnIntoOff to 'On'
  console.log(qrValue);
  if (!qrValue || preValue === qrValue) return;
  preValue = qrValue;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  btn.innerText = "Generating QR Code....";

  qrImg.addEventListener("load", () => {
    main.classList.add("active");
    btn.innerText = "Generate QR Code";
  });
  setTimeout(() => {
    loader.classList.toggle("hidden"); // on ➡️ Off turnIntoOn to 'Off'
    qrImg.classList.toggle("hidden"); // Off ➡️ On turnIntoOff to 'On'
  }, 2000);
});
