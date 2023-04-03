import { multiplyByTwo, addStarClickListener } from "./favoriteTestas";
import { JSDOM } from "jsdom";

const dom = new JSDOM("<html><body></body></html>");

// test("adds 1 + 2 to equal 3", () => {
//   expect(multiplyByTwo(1, 2)).toBe(2);
// });

/**
 * @jest-environment jsdom
 */

test("toggle between favoriteOn and favoriteOff", () => {
  const element = dom.window.document.createElement("div");
  expect(element.tagName).toBe("DIV");
  const todoItem = { id: "favoriteOn" };
  todoItem.id = todoItem.id === "favoriteOn" ? "favoriteOff" : "favoriteOn";
  expect(todoItem.id).toBe("favoriteOff");
});
