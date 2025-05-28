const todos = [
    {
        id: 1,
        description: 'Estudar programação',
        isCompleted: false,
    },
    {
        id: 2,
        description: 'Ler',
        isCompleted: true,
    },
    {
        id: 3,
        description: 'Treinar',
        isCompleted: true,
    }
]

const lastObject = todos[2].description
console.log(lastObject)

const todosJSON = JSON.stringify(todos)
console.log(todosJSON)