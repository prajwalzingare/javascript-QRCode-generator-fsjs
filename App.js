let btn = document.querySelector(".submit");
let main = document.querySelector(".main");
let qrInput = document.querySelector(".main input");
let qrImg = document.querySelector(".qr-code img");
let preValue;
btn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();

  if (!qrValue || preValue === qrValue) return;
  preValue = qrValue;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  btn.innerText = "Generating QR Code....";

  qrImg.addEventListener("load", () => {
    main.classList.add("active");
    btn.innerText = "Generate QR Code";
  });
});
