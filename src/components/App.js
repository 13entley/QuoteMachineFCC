import React, { Component } from 'react';
import QuoteMachine from './quotemachine';


const END_POINT = 'https://random-quote-generator.herokuapp.com/api/quotes/random';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: {
                text: '',
                author: ''
            }
        }
    }

    getQuote() {
    fetch(END_POINT)
        .then(response => response.json())
            .then(response => {
                this.setState = ({
                    quote: response
                });
                console.log(response);
            })
        }

    componentDidMount() {
        this.getQuote();
        }



    render() {
        return (
            <div className="App">
                <div className="container">
                    <QuoteMachine quote={this.state.quote} />
                    <button id="new-quote" className="primary-color-background" onClick={() => this.getQuote()}>New quote</button>
                </div>
            </div>
        );
    }
}
export default App;