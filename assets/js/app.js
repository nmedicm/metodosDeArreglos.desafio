const inputField = document.querySelector("#inputField")
const btnSubmit = document.querySelector("#btnSubmit")
const total = document.querySelector("#total")
const realizadas = document.querySelector("#realizadas")
const idList = document.querySelector("#idList")
const taskDescription = document.querySelector("#taskDescription")
const taskOptions = document.querySelector("#taskOptions")

const arrayTasks = [
    {id: Date.now(), name: "Hacer mercado"},
    {id: Date.now() + 1, name: "Estudiar para la prueba"},
    {id: Date.now() + 2, name: "Sacar a pasear a Tobby"},
];

const render = () => {
    taskDescription.innerHTML = "";

    arrayTasks.forEach((item) => {
        taskDescription.innerHTML += `
        ${item.id} - ${item.name} <input type = "checkbox" onclick="realizar()"><button onclick="eliminar(${item.id})">X</button>
        <br>        
        `;
    });
}

const realizar = (id) => {

        arrayTasks = arrayTasks.map(item => {
        if(item.id === id){
            realizadas = realizadas + 1;
        }
        return item;
        
    })
        render()
    }

const eliminar = (id) => {
    
    arrayTasks = arrayTasks.filter((item) => item.id !== id)
    render()
}


render();

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    arrayTasks.push({
        id: Date.now(),
        name: inputField.value,

    });

    render();

    inputField.value = ""

})
