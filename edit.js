export function editButtonClickListener(edit) {

        const input = content.querySelector("input");
        input.removeAttribute("readonly");
        input.focus();
        input.addEventListener("blur", (e) => {
          input.setAttribute("readonly", true);
          todo.content = e.target.value;
          localStorage.setItem("todos", JSON.stringify(todos));
          DisplayTodos();
        });

}