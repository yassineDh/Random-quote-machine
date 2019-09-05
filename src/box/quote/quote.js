import React ,{Component} from 'react';
import Quotetext from "./quotetext";
import Quoteauthor from "./quoteauthor";

class Quote extends Component {

    render(){
      return (
       <div>
           <Quotetext text={this.props.displayQuote.quote} />
           <Quoteauthor author={this.props.displayQuote.author} />
       </div>
      );
    }
  }
  
 export default Quote;