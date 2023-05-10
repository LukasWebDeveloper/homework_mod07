
{
    const tasks = [
        {
            content: "Wystylować CSS listy zadań",
            done: true,
        },
        {
            content: "stworzyć button `toggle` zakończonego zadania",
            done: true,
        },
        {
            content: "stworzyć button `delete` zadania",
            done: true,
        },
        {
            content: "stworzyć addTask z czyszczącym sie polem",
            done: true,
        },
        {
            content: "stworzyć focus() do button addTask",
            done: true,
        },
    ];

    const addNewTask = (newTaskInput) => {
        tasks.push({
            content: newTaskInput.value.trim(),
        });

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-redDelete");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
                render();
            });
        });

        const toggledoneButtons = document.querySelectorAll(".js-greenToggle");

        toggledoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
                render();
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li
                    class="js-list__item ${task.done ? "js-list__item--done" : ""}"
                >
                    ${task.done
                    ? "<img class=js-greenToggle src=\"img/greenBird.png\">"
                    : "<img class=js-greenToggle src=\"img/greenFullColor.png\">"} 
                    <span class="taskContent">
                       ${task.content}
                    </span>
                     <img class=js-redDelete src=img/redDelete.png>
                   
                </li>
                <hr>
            `;

        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskInput = document.querySelector(".js-newTask");

        addNewTask(newTaskInput);

        newTaskInput.value = "";
        newTaskInput.focus();
    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };

    init();
}
