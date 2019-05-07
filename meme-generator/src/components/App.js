import React, {Component} from 'react';
import '../css/App.css';
import '../../node_modules/font-awesome/css/font-awesome.css';

import Header from './Header';
import Footer from './Footer';
import MemeGenerator from './MemeGenerator';

class App extends Component {
    constructor() {
        super();
        this.state = {

        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        // this.setState({
        //     loading: true
        // });
        //
        // setTimeout(() => {
        //     this.setState({
        //         isLoading: false
        //     })
        // }, 2000);
        //
        // fetch('http://local.ags-service.com/data/kycoptionalstatus')
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({
        //             optionalStatuses: data,
        //             loading: false
        //         });
        //     });
    }

    handleChange(id) {
        // this.setState(prevState => {
        //     const updated = prevState.todos.map(todo => {
        //         if (todo.id === id) {
        //             todo.completed = !todo.completed
        //         }
        //         return todo;
        //     });
        //     return {
        //         todos: updated
        //     }
        // })
    }

    render() {
        return (
            <div>
                <Header/>
                <MemeGenerator/>

                <br/><br/><br/>

                <Footer/>

            </div>
        );
    }
}

export default App;
