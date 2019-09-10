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
      color: "#111111",
      fading:false
    };

    this.changeQuote = this.changeQuote.bind(this);
  }
  
  changeQuote(){
    let len = this.state.allquotes.quotes.length;
    let num = Math.floor((Math.random() * len));
    let newQuote = this.state.allquotes.quotes[num];
    var letters = '0123456789ABCDEF';
	  var colory = '#';
	  for (var i = 0; i < 6; i++ ) {
		  colory += letters[Math.floor(Math.random() * 16)];
      }
    variables.testColor = colory;

    this.setState({
      
      color: colory,
      fading: true
    });

    this.timer = setTimeout(_ => {
      this.setState({
        currentQuote: newQuote,
        fading: false});
    },700);  
  }
   
    componentDidMount(){
      let len = this.state.allquotes.quotes.length;
    let num = Math.floor((Math.random() * len));
    let newQuote = this.state.allquotes.quotes[num];
    var letters = '0123456789ABCDEF';
	  var colory = '#';
	  for (var i = 0; i < 6; i++ ) {
		  colory += letters[Math.floor(Math.random() * 16)];
      }
    variables.testColor = colory;

    this.setState({
      currentQuote: newQuote,
      color: colory,
    });

      
    }

    render(){
      return (
        <div className="App" id="quote-box">
          <div className="container-fluid" style={{backgroundColor:this.state.color,transition:'all 0.7s linear'}}>
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-*-12"> 
                <div className="card" id="shape">
                  <div className="card-body">
                    <div className="row">
                      <div className = "col p-4">
                        <Quote className="mx-auto" test={this.state.color} displayQuote ={this.state.currentQuote} fade={this.state.fading} />
                      </div>
                    </div>
                    <div className="col">
                      <div>
                        <Quotebuttons newOne={this.changeQuote} test={this.state.color} quote={this.state.currentQuote} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-white pt-2">
                 by yassine
                </div>
              </div>
            </div>
          </div>
        </div>
        
      );
    }
  }
  
 export default Box;