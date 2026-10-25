"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // Access HTML elements
    let inputField = document.querySelector(".input-field");
    let enterButton = document.querySelector(".enter_button");
    let ToDo = document.querySelector(".To-Do");
    let task;
    let edit = false;
    let selectedToDo = null;
    enterButton?.addEventListener("click", function () {
        if (inputField.value === "") {
            alert("Es wurde noch keine To-do eingegeben.");
            return;
        }
        // Edit an To-Do
        if (edit === true && selectedToDo !== null) {
            selectedToDo.textContent = inputField.value;
            selectedToDo = null;
            edit = false;
            inputField.value = "";
            return;
        }
        // Create a new To-Do
        task = inputField.value;
        let note = document.createElement("div");
        note.className = "note";
        ToDo?.appendChild(note);
        let imgNotFinish = document.createElement("img");
        imgNotFinish.src = "note_without.png";
        imgNotFinish.className = "img_without";
        note?.appendChild(imgNotFinish);
        let inProgressToDo = document.createElement("p");
        inProgressToDo.className = "in_progress_to_do";
        inProgressToDo.textContent = task;
        note?.appendChild(inProgressToDo);
        let delead = document.createElement("img");
        delead.src = "delead.png";
        delead.className = "delead";
        note?.appendChild(delead);
        inputField.value = "";
        // Task is/is not finished
        function taskFinish() {
            if (imgNotFinish.src.includes("note_without.png")) {
                imgNotFinish.src = "note_with.png";
                inProgressToDo.className = "finish_to_do";
            }
            else {
                imgNotFinish.src = "note_without.png";
                inProgressToDo.className = "in_progress_to_do";
            }
        }
        imgNotFinish?.addEventListener("click", taskFinish);
        // Edit the task
        function editTask() {
            inputField.value = inProgressToDo.textContent;
            selectedToDo = inProgressToDo;
            edit = true;
        }
        inProgressToDo?.addEventListener("click", editTask);
        // Delete the task
        function deleadNote() {
            note.remove();
            imgNotFinish.remove();
            inProgressToDo.remove();
            delead.remove();
        }
        delead?.addEventListener("click", deleadNote);
    });
});
