import logoSrc from "../img/icon-productivity-arrow.svg";
import upcomingSrc from "../img/arrows-down.svg";
import todaySrc from "../img/icon-checklist.svg";
import blankSquareSrc from "../img/square.svg";
import plusSrc from "../img/plus.svg";
import { mainContent } from "../index.js";
import { ToDos } from "./todos.js";

function Interface() {
  function generateIcons(selector, source, className = "icon") {
    const element = document.querySelector(selector);
    if (element) {
      const newIcon = new Image();
      newIcon.src = source;
      newIcon.classList.add(className);
      element.prepend(newIcon);
    }
  }

  function setButtonClick(selector, callback) {
    const button = document.querySelector(selector);
    if (button) {
      button.addEventListener("click", () => {
        mainContent.innerHTML = "";
        callback();
      });
    }
  }

  function createSection(title) {
    const currentTitle = document.createElement("h1");
    currentTitle.textContent = title;
    mainContent.appendChild(currentTitle);
  }

  function createToDo() {}

  function Upcoming() {
    createSection("Upcoming");
  }

  function Today() {
    createSection("Today");
  }

  function Personal() {
    createSection("Personal");
  }

  function Work() {
    createSection("Work");
  }
  function initialise() {
    generateIcons("header", logoSrc, "main-logo");
    generateIcons("#upcoming", upcomingSrc);
    generateIcons("#today", todaySrc);
    generateIcons("#personal", blankSquareSrc);
    generateIcons("#work", blankSquareSrc);
    generateIcons("#add-new-list", plusSrc);
    generateIcons("#new-to-do", plusSrc, "add-to-do");

    setButtonClick("#upcoming", Upcoming);
    setButtonClick("#today", Today);
    setButtonClick("#personal", Personal);
    setButtonClick("#work", Work);

    const todos = ToDos();
    todos.addNewTask();
    console.log("Initialised!");

    Upcoming();
  }

  return { initialise };
}
export { Interface };
