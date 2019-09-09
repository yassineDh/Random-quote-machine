import React ,{Component} from 'react';
import Quotetext from "./quotetext";
import Quoteauthor from "./quoteauthor";
import "./quote.scss";

class Quote extends Component {

    render(){
      return (
       <div>
           <Quotetext text={this.props.displayQuote.quote} test={this.props.test} />
           <Quoteauthor author={this.props.displayQuote.author} test={this.props.test} />
       </div>
      );
    }
  }
  
 export default Quote;