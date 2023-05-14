
{
    const tasks = [
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
            content: "stworzyć stylizacje css do listy zadań z pracy domowej mod 06",
            done: true,
        },
        {
            content: "stworzyć focus() do button addTask",
            done: true,
        },
    ];

    const listTasksUpdated = [
        ...tasks.slice(0, 3),
        ...tasks.slice(4),
        {
            content: "refactor listy zadań zgodnie z immutability",
            done: true,
        },
    ];

    const listTasksUpdated2 = [
        ...listTasksUpdated,
        {
            content: "dodaj 2 przyciski, 1 pokazuje/ukrywa \"done\" zadania, 2 oznacza wszystkie ukończone zadania ",
            done: false,
        }
    ];

    const listTasksUpdated3 = [
    ];

    const addNewTask = (newTaskInput) => {
        listTasksUpdated3.push({
            content: newTaskInput.value.trim(),
        });

        render();
    };

    const removeTask = (taskIndex) => {
        listTasksUpdated3.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        listTasksUpdated3[taskIndex].done = !listTasksUpdated3[taskIndex].done;
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

        for (const task of listTasksUpdated3) {
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
