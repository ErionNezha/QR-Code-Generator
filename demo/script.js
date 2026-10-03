const qrInput = document.querySelector(".form input");
const generateBtn = document.querySelector(".form button");
const qrImg = document.querySelector(".qr-code img");
const qrBox = document.querySelector(".qr-code");
const downloadBtn = document.querySelector(".download-btn");

generateBtn.addEventListener("click", async () => {
  const value = qrInput.value.trim();
  if (!value) return alert("⚠️ Please enter text or a URL!");

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(value)}`;
  qrImg.src = qrUrl;
  qrBox.style.display = "block";

  // Përditëso linkun e shkarkimit
  const response = await fetch(qrUrl);
  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  downloadBtn.href = url;
});
