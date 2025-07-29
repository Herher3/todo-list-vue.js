function addTodo() {
  const input = document.getElementById("todo-input");
  const value = input.value.trim();
  if (value === "") return;

  const ul = document.getElementById("todo-list");
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = value;

  // 🔵 Tombol Edit
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => editTodo(li, span, editBtn);

  // 🔴 Tombol Hapus
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Hapus";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  ul.appendChild(li);

  input.value = "";
}

// Fungsi edit
function editTodo(li, span, button) {
  if (button.textContent === "Edit") {
    const input = document.createElement("input");
    input.type = "text";
    input.value = span.textContent;

    li.insertBefore(input, span);
    li.removeChild(span);

    button.textContent = "Simpan";
    button.className = "save-btn";
  } else {
    const input = li.querySelector("input");
    const newText = input.value;

    span.textContent = newText;
    li.insertBefore(span, input);
    li.removeChild(input);

    button.textContent = "Edit";
    button.className = "edit-btn";
  }
}
