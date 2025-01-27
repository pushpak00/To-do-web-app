const mainTodoElem =  document.querySelector(".todo-lists-elem")
const inputValue = document.getElementById("input-value")



const getTodoListFromLocal = () => {
    return JSON.parse(localStorage.getItem("youtubeTodoList"))
}

let localTodoList = getTodoListFromLocal() || [];

const addTodoDynamicElement = (curElem) => {

    const divElement = document.createElement("div")
    divElement.classList.add("main_todo_div")
    divElement.innerHTML = `<li>${curElem}</li> <button class="delete-btn">DELETE</button>`
    mainTodoElem.append(divElement)
}


addTodoList = (e) => {
    e.preventDefault();

    const todoListValue = inputValue.value.trim()
    inputValue.value = "";

    if (todoListValue !== "" && !localTodoList.includes(todoListValue)) {
        localTodoList.push(todoListValue)
        localTodoList = [... new Set(localTodoList)]
        console.log(localTodoList)
        localStorage.setItem("youtubeTodoList", JSON.stringify(localTodoList))

        addTodoDynamicElement(todoListValue);
    }
}

const showTodoList = () => {

    console.log(localTodoList)
    localTodoList.forEach((curElem) => {
        addTodoDynamicElement(curElem);
    })
}

showTodoList()

document.querySelector(".btn").addEventListener("click", (e) => {
    addTodoList(e)
})