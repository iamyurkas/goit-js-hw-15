function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const buttonCreate = document.querySelector("button[data-create]");
const buttonDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");

function onCreateButtonClick() {
  onDestroyButtonClick();
  const amount = input.value;
  createBoxes(amount);
}

const createBoxes = (amount) => {
  let width = 30;
  let height = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.backgroundColor = getRandomHexColor();

    boxes.appendChild(box);

    width += 10;
    height += 10;
  }
};

const onDestroyButtonClick = () => {
    boxes.innerHTML= "";
};

buttonCreate.addEventListener("click", onCreateButtonClick);
buttonDestroy.addEventListener("click", onDestroyButtonClick);