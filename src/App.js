import TodoList from './TodoList.js'
import TodoComments from './TodoComments.js'
import { request } from './api.js'

export default function App ({$app}) {
    this.state = {
        todos: []
    }

    this.setState = nextState => {
        this.state = nextState
        todoList.setState(this.state.todos)
    }

    const todoList = new TodoList({
        $target: $app,
        initialState: this.todos
    })
    
    const todoComments = new TodoComments({
        $target: $app,
        initialState: {
            selectedTodo: {
                text: 'Learn JavaScript'
            },
            comments: [
                {
                    text: '안녕하세요'
                },
                {
                    text: '반가워요'
                }
            ]
        }
    })

    //todos 불러오기
    this.init = () => {
        request('https://kdt.roto.codes/todos', (todos) => {
            this.setState({
                ...this.state,
                todos
            })
        })
    }
    this.init()
}