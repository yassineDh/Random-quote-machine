import React ,{Component} from 'react';
import './quoteBox.css';
import Quote from './quote/quote';
import Quotedata from "./buttons/quotes.json";
import Quotebuttons from "./buttons/buttons"

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allquotes: {...Quotedata},
      currentQuote: {}
    };

    this.changeQuote = this.changeQuote.bind(this);
  }
  
  changeQuote(){
    let len = this.state.allquotes.quotes.length;
    let num = Math.floor((Math.random() * len) + 1);
    let newQuote = this.state.allquotes.quotes[num];
    this.setState({
      currentQuote: newQuote
    })
  }

    render(){
      return (
        <div className="card" id="shape">
          <div className="card-body">
            <div className="row">
              <div className = "col">
               <Quote className="mx-auto " displayQuote ={this.state.currentQuote} />
              </div>
            </div>
            <div className="row">
              <Quotebuttons newOne={this.changeQuote} />
            </div>
          </div>
        </div>
      );
    }
  }
  
 export default Box;