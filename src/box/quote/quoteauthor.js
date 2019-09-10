import React ,{Component} from 'react';
import "./quote.scss";

class Quoteauthor extends Component {
    render(){
      const fade = this.props.fade;
      return (
       <div className={`${fade ? 'fade-out': ''} ' float-right pr-2'`} style={{color:this.props.test,transition:'all 1s linear'}} id="author"  > 
          <span>- </span>{this.props.author}       
       </div>
      );
    }
  }
  
 export default Quoteauthor;