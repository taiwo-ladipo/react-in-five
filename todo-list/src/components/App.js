import React, {Component} from 'react';
import '../css/App.css';
import '../../node_modules/font-awesome/css/font-awesome.css';
import Header from './Header';
import Footer from './Footer';
import TodoItem from './TodoItem';
import Conditional from './Conditional';
import Form from './Form';
import todosData from './../data/todosData';

class App extends Component {
    constructor() {
        super();
        this.state = {
            greeting: 'Holla holla',
            isLoggedIn: false,
            todos: todosData,
            isLoading: true,
            optionalStatuses: {},
            loading: true,
            firstName: '',
            lastName: '',
            subscribe: true,
            gender: '',
            howLong: '1',
            dietaryRestrictions: {
                isVegan: false,
                isKosher: false,
                isLactoseFree: false
            }
        };
        this.toggleLoggedIn = this.toggleLoggedIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormData = this.handleFormData.bind(this);
    }

    componentDidMount() {
        this.setState({
            loading: true
        });

        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000);

        fetch('http://local.ags-service.com/data/kycoptionalstatus')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    optionalStatuses: data,
                    loading: false
                });
            });
    }

    toggleLoggedIn() {
        //To manipulate using previous value in state property
        this.setState(prevState => {
            return {
                isLoggedIn: !(prevState.isLoggedIn)
            };
        });

        //To directly change value in state property
        // if (this.state.isLoggedIn) {
        //     this.setState({isLoggedIn: false});
        // } else {
        //     this.setState({isLoggedIn: true});
        // }
    }

    handleFormData(event) {
        const {name, value, type, checked, id} = event.target;
        // type === 'checkbox' ?
        // this.setState({[name]: checked}) :
        // this.setState({[name]: value});
        if (type === 'checkbox') {
            if (name === 'dietaryRestrictions') {
                this.setState(prevState => {
                    return {
                        dietaryRestrictions: {
                            ...prevState.dietaryRestrictions,
                            [id]: checked
                        }
                    }
                })
            } else {
                this.setState({[name]: checked});
            }
        } else {
            this.setState({[name]: value})
        }

    }

    handleChange(id) {
        this.setState(prevState => {
            const updated = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            });
            return {
                todos: updated
            }
        })
    }

    renderTable(response) {
        const rows = response.data.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.label}</td>
                    <td>{item.status}</td>
                    <td>{item.created_at}</td>
                </tr>
            )
        });
        return (
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th>S/N</th>
                    <th>LABEL</th>
                    <th>STATUS</th>
                    <th>CREATED AT</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )
    }

    render() {
        const todoComponents = this.state.todos.map(
            todo => <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange}/>
        );
        let wordDisplay = '',
            buttonText = '';
        if (this.state.isLoggedIn) {
            wordDisplay = 'in';
            buttonText = 'out';
        } else {
            wordDisplay = 'out';
            buttonText = 'in';
        }

        return (
            <div>
                <Header/>
                <div className=''>
                    <h3>API Call</h3>
                    {this.state.loading ? <h1>Please wait</h1> : this.renderTable(this.state.optionalStatuses)}
                </div>
                <div className='profile'>
                    {this.state.greeting}, You are currently logged {wordDisplay}
                    <br/>
                    <button className='btn btn-success btn-sm' onClick={this.toggleLoggedIn}>Log {buttonText}</button>
                </div>

                <Conditional isLoading={this.state.isLoading}/>
                <div className='todo-list'>
                    {todoComponents}
                </div>

                <Form
                    handleFormData={this.handleFormData}
                    {...this.state}
                />
                <br/><br/><br/>

                <Footer/>

            </div>
        );
    }
}

export default App;
