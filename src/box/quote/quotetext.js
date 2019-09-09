import React ,{Component} from 'react';
import "./quote.scss";

class Quotetext extends Component {
    render(){
      const fade = this.props.fade;
      return (
       <div style={{color: this.props.test, transition:'all 1s linear'}} className={`${fade ? 'fade-out': ''}`}>
         <h2 id="text">
          <small>
         <span><i class="fa fa-quote-left pr-3"></i></span>
         {this.props.text}
         </small>
         </h2>
       </div>
      );
    }
  }
  
 export default Quotetext;