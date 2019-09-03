import React ,{Component} from 'react';
import Quotetext from "./quotetext";
import Quoteauthor from "./quoteauthor";

class Quote extends Component {
    render(){
      return (
       <div>
           <Quotetext />
           <Quoteauthor />
       </div>
      );
    }
  }
  
 export default Quote;