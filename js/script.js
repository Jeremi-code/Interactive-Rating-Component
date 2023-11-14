const spanElements = document.getElementsByClassName("rating-point");
let ClickedRate = null;
let ClickedElems = null;
for (let i = 0; i < spanElements.length; i++) {
  console.log(spanElements[i]);
  spanElements[i].addEventListener("click", () => {
    handleClick(i, spanElements[i]);
  });
}
const handleClick = (i, spanElement) => {
  if (ClickedElems == null) {
    ClickedElems = spanElement;
  }
  ClickedElems.style.backgroundColor = "hsl(213, 19%, 18%)";
  spanElement.style.backgroundColor = "hsl(217, 12%, 63%)";
  spanElement.style.color = "white";
  ClickedRate = i + 1;
  ClickedElems = spanElement;
};
document.querySelector("button").addEventListener("click", () => {
  handleSubmit(ClickedRate);
});

const handleSubmit = (ClickedRate) => {
  if (ClickedRate == null) {
    return;
  }
  const rateContainer = document.getElementsByClassName("rate-container");
  const resultContainer = document.getElementsByClassName("result-container");
  rateContainer[0].style.display = "none";
  resultContainer[0].style.display = "flex";
  const element = document.getElementsByClassName("result-text");
  element[0].innerHTML = `You selected ${ClickedRate} out of 5`;
};
