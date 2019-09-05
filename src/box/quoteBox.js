import React ,{Component} from 'react';
import './quoteBox.css';
import Quote from './quote/quote';
import Quotedata from "./buttons/quotes.json";
import Quotebuttons from "./buttons/buttons";
import variables from './../App.scss';


class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allquotes: {...Quotedata},
      currentQuote: {},
      color: "#111111"
    };

    this.changeQuote = this.changeQuote.bind(this);
  }
  
  changeQuote(){
    let len = this.state.allquotes.quotes.length;
    let num = Math.floor((Math.random() * len) + 1);
    let newQuote = this.state.allquotes.quotes[num];
    var letters = '0123456789ABCDEF';
	  var colory = '#';
	  for (var i = 0; i < 6; i++ ) {
		  colory += letters[Math.floor(Math.random() * 16)];
      }
    variables.testColor = colory;
    this.setState({
      currentQuote: newQuote,
    })
  }

    render(){
      return (
        <div className="card" id="shape">
          <div className="card-body">
            <div className="row">
              <div className = "col p-4">
               <Quote className="mx-auto" displayQuote ={this.state.currentQuote}/>
              </div>
            </div>
            <div className="col">
              <div>
                <Quotebuttons newOne={this.changeQuote} />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
 export default Box;