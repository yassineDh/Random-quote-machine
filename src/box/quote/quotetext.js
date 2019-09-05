import React ,{Component} from 'react';

class Quotetext extends Component {
    render(){
      return (
       <div>
         <span><i class="fa fa-quote-left pr-2"></i></span>
         {this.props.text}
       </div>
      );
    }
  }
  
 export default Quotetext;