import { edit } from "./edit";
import { JSDOM } from "jsdom";

const dom = new JSDOM("<html><body></body></html>");

describe("Remove input attribute and focus", () => {
    test("edit button", () => {
        const dom = new JSDOM(`<!DOCTYPE html><div id="edit"></div>`);
        const edit = dom.window.document.getElementById("edit");
        const todoItem = { id: "todo1", task: "Buy groceries" };
        const event = new dom.window.Event("click", { bubbles: true });

        edit.addEventListener("click", () => {
            editButtonClickListener(edit, todoItem);
        });
    });
});