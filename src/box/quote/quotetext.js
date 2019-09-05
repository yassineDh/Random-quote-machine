import React ,{Component} from 'react';

class Quotetext extends Component {
    render(){
      return (
       <div>
         {this.props.text}
       </div>
      );
    }
  }
  
 export default Quotetext;