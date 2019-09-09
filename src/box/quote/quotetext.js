import React ,{Component} from 'react';

class Quotetext extends Component {
    render(){
      return (
       <div style={{color: this.props.test}}>
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