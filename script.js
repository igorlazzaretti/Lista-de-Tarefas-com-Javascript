const { Component } = React;

class TarefaApp extends Component {
    constructor(props){
        super(props);
        this.state = { tarefas: [], item: ""};
    }

    handleChange =(event) => {}

    add = () =>{}

    check = (e) =>{}

    del = (id) =>{}
    
    render = () =>{
        const { tarefas, item} = this.state;
        return(
            <div>
                <header className="header">
                <h1>Lista de Tarefas - Chega de Procrastinar</h1>
                <input type="text" placeholder="Digite sua tarefa..."    />
                <span><i className="fas fa-plus-circle"></i></span>
                </header>
                <ul>
                    <li>
                        <i className="fas fa-check-circle check"></i><span>Fazer a atividade</span><i className="fa-solid fa-trash-can close"></i>
                    </li>
                </ul>
            </div>
        )
    }
}
const root = React.DOM.createRoot(document.querySelector("#root"));
root.render(<TarefaApp />);
