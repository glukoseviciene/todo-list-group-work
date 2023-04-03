export const multiplyByTwo = (numberToMultipy) => {
  return numberToMultipy * 2;
};

export function addStarClickListener(star, todoItem) {
  star.addEventListener("click", (e) => {
    e.preventDefault();
    todoItem.id = todoItem.id === "favoriteOn" ? "favoriteOff" : "favoriteOn";
    if (todoItem.id === "favoriteOn") {
      star.style.color = "gold";
    } else if (todoItem.id === "favoriteOff") {
      star.style.color = "red";
    }
  });
}

const element = document.getElementById("myButton"); // Get a reference to the element you want to click
const event = new MouseEvent("click", { bubbles: true }); // Create a new click event
element.dispatchEvent(event); // Dispatch the event on the element
