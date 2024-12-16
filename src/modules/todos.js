import { Storage } from "./storage";
import { format } from "date-fns";
const storage = Storage();
storage.loadToDos();

function ToDos() {
  function addNewTask() {
    const dialog = document.querySelector("dialog");
    // const addBtn = dialog.querySelector("#add-task");
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const dateTime = format(new Date(), "dd/MM/yyyy H:m:s");
      // Extract form inputs
      const title = document.querySelector("#task-title").value;
      const description = document.querySelector("#description").value;
      const selectedList = document.querySelector("#list").value;
      const dueDate = document.querySelector("#due-date").value;

      const newTaskObj = {
        id: dateTime,
        title: title,
        description: description,
        selectedList: selectedList,
        dueDate: dueDate,
      };
      storage.saveToDos(newTaskObj);
      form.reset();
      dialog.close();
    });

    const addNewTaskBtn = document.querySelector("#new-to-do");
    addNewTaskBtn.addEventListener("click", () => {
      dialog.showModal();
    });

    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) {
        form.reset();
        dialog.close();
      }
    });
  }

  return { addNewTask };
}

export { ToDos, storage };
