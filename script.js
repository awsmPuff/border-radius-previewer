const borderControl = document.querySelector(".border-control");
const showRange = document.querySelector(".range");
const shape = document.querySelector(".shape");
const topLeft = document.querySelector(".top-left");
const topRight = document.querySelector(".top-right");
const bottomLeft = document.querySelector(".bottom-left");
const bottomRight = document.querySelector(".bottom-right");
const collect = document.querySelector(".collect");
const collectData = document.querySelector(".collect-data");
const copyBtn = document.querySelector(".copy");
const all = document.querySelector(".all");

const regex = /^\d+$/;

showRange.innerHTML = borderControl.value;
borderControl.addEventListener("input", () => {
  showRange.innerHTML = borderControl.value;
  shape.style.borderRadius = `${borderControl.value}px`;
  collectData.innerHTML = `${borderControl.value}px`;
});

collect.addEventListener("click", () => {
  borderControl.value = 0;
  showRange.innerHTML = 0;
  if (
    !topLeft.value &&
    !topRight.value &&
    !bottomLeft.value &&
    !bottomRight.value
  ) {
    alert("Your input is empty");
  } else {
    if (
      regex.test(topLeft.value) &&
      regex.test(topRight.value) &&
      regex.test(bottomLeft.value) &&
      regex.test(bottomRight.value)
    ) {
      shape.style.borderRadius = `${topLeft.value}px ${topRight.value}px ${bottomLeft.value}px ${bottomRight.value}px`;
      collectData.innerHTML =
        topLeft.value +
        "px " +
        topRight.value +
        "px " +
        bottomRight.value +
        "px " +
        bottomLeft.value +
        "px";
    } else {
      alert("Numbers only");
      collectData.innerHTML = "";
    }
  }
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(all.textContent).then(() => {
    copyBtn.innerHTML = "Copied";
    copyBtn.style.filter = "brightness(120%) grayscale(10%) opacity(0.9)";
    setTimeout(() => {
        copyBtn.innerHTML = "Copy";
        copyBtn.style.filter = "none";
    }, 1500);
  });
});
