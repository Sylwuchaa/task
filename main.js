
const inputElm = document.querySelector('input[type="text"');
const ulElm = document.querySelector('ul');


const addTask = (e) => {
    if (e.keyCode === 13 && inputElm.value !== "") {
        console.log(inputElm.value);
        const inpValue = inputElm.value;
        const task = document.createElement('li')
        task.className = "newLi";
        task.innerHTML = '<input type="checkbox" name="">' + inpValue;
        ulElm.appendChild(task);

    }

}
inputElm.addEventListener('input', addTask);
inputElm.addEventListener('keypress', addTask);