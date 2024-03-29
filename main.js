window.addEventListener("load", () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];
  const nameInput = document.querySelector("#name");
  const newTodoForm = document.querySelector("#new-todo-form");

  const username = localStorage.getItem("username") || "";

  nameInput.value = username;

  nameInput.addEventListener("change", (e) => {
    localStorage.setItem("username", e.target.value);
  });

  newTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
      favoriteStar: false,
      createdAt: new Date().getTime(),
      author: localStorage.getItem("username"),
    };

    todos.push(todo);

    localStorage.setItem("todos", JSON.stringify(todos));

    // Reset the form
    e.target.reset();
    DisplayTodos();
  });

  DisplayTodos();
});
function DisplayTodos() {
  const todoList = document.querySelector("#todo-list");
  todoList.innerHTML = "";

  const authorsPosts = todos.filter(
    (todo) => todo.author === localStorage.getItem("username")
  );
  console.log(authorsPosts);
  authorsPosts.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const label = document.createElement("label");
    const input = document.createElement("input");
    const span = document.createElement("span");
    const star = document.createElement("i");
    const content = document.createElement("div");
    const actions = document.createElement("div");
    const edit = document.createElement("button");
    const deleteButton = document.createElement("button");

    input.type = "checkbox";
    input.checked = todo.done;
    span.classList.add("bubble");
    if (todo.category == "personal") {
      span.classList.add("personal");
    } else {
      span.classList.add("business");
    }
    content.classList.add("todo-content");
    actions.classList.add("actions");
    edit.classList.add("edit");
    deleteButton.classList.add("delete");

    content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
    edit.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";

    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(star);
    actions.appendChild(edit);
    actions.appendChild(deleteButton);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(actions);

    todoList.appendChild(todoItem);

    if (todo.done) {
      todoItem.classList.add("done");
    }

    input.addEventListener("change", (e) => {
      todo.done = e.target.checked;
      localStorage.setItem("todos", JSON.stringify(todos));

      if (todo.done) {
        todoItem.classList.add("done");
      } else {
        todoItem.classList.remove("done");
      }

      DisplayTodos();
    });

    /////////////////////start Star
    todoItem.id = "favoriteOff";

    let favoritesBtn = document.getElementById("favoritesBtn");
    let todoListBtn = document.getElementById("todoListBtn");
    star.classList.add("fa-solid");
    star.classList.add("fa-star");
    star.style.color = "red";
    star.style.marginLeft = "7px";
    label.style.display = "flex";

    if (todo.favoriteStar === true) {
      star.style.color = "gold";
      todoItem.id = "favoriteOn";
    }
    if (todo.favoriteStar === false) {
      star.style.color = "red";
      todoItem.id = "favoriteOff";
    }

    star.addEventListener("click", (e) => {
      e.preventDefault();
      todoItem.id = todoItem.id === "favoriteOn" ? "favoriteOff" : "favoriteOn";
      if (todoItem.id === "favoriteOn") {
        star.style.color = "gold";
        todo.favoriteStar = true;
      } else if (todoItem.id === "favoriteOff") {
        star.style.color = "red";
        todo.favoriteStar = false;
      }

      localStorage.setItem("todos", JSON.stringify(todos));
    });

    favoritesBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const favoriteOffs = document.querySelectorAll("#favoriteOff");
      favoriteOffs.forEach(
        (favoriteOff) => (favoriteOff.style.display = "none")
      );
    });

    todoListBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const favoriteOffs = document.querySelectorAll("#favoriteOff");
      favoriteOffs.forEach(
        (favoriteOff) => (favoriteOff.style.display = "flex")
      );
    });
    /////////////////////end Star

    edit.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();
      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        DisplayTodos();
      });
    });

    deleteButton.addEventListener("click", (e) => {
      todos = todos.filter((t) => t != todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      DisplayTodos();
    });
  });
}
