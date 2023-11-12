const { Component } = React;

class TarefaApp extends Component {
    constructor(props){
        super(props);
        this.state = { tarefas: [], item: ""};
    }

    handleChange =(event) => {
        this.setState({ item: event.target.value});
    }

    add = () =>{
        const{ tarefas, item } = this.state;
        if(item.length === 0){ alert("Digite uma tarefa válida!")}
        else {
            this.setState({ tarefas: tarefas.concat(item), item: ""});
        }
    }

    check = (e) =>{}

    del = (id) =>{}

    render = () =>{
        const { tarefas, item} = this.state;
        return(
            <div>
                <header className="header">
                <h1>Lista de Tarefas - Chega de Procrastinar</h1>
                <input onChange={this.handleChange} value={item} type="text" placeholder="Digite sua tarefa..."    />
                <span onClick=[{this.add}]><i className="fas fa-plus-circle"></i></span>
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
