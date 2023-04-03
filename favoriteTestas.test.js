import { multiplyByTwo, addStarClickListener } from "./favoriteTestas";
import { JSDOM } from "jsdom";

const dom = new JSDOM("<html><body></body></html>");
global.MouseEvent = class {};
// test("adds 1 + 2 to equal 3", () => {
//   expect(multiplyByTwo(1, 2)).toBe(2);
// });

/**
 * @jest-environment jsdom
 */

// test("toggle between favoriteOn and favoriteOff", () => {
//   const element = dom.window.document.createElement("div");
//   expect(element.tagName).toBe("DIV");
// });

describe("addStarClickListener", () => {
  test("toggles favoriteOn and favoriteOff IDs and changes star color", () => {
    const dom = new JSDOM(`<!DOCTYPE html><div id="star"></div>`);
    const star = dom.window.document.getElementById("star");
    const todoItem = { id: "favoriteOn" };
    const event = new dom.window.Event("click", { bubbles: true });

    addStarClickListener(star, todoItem);
    star.dispatchEvent(event);

    expect(todoItem.id).toBe("favoriteOff");
    expect(star.style.color).toBe("red");

    star.dispatchEvent(event);

    expect(todoItem.id).toBe("favoriteOn");
    expect(star.style.color).toBe("gold");
  });
});
