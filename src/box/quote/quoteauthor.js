import React ,{Component} from 'react';

class Quoteauthor extends Component {
    render(){
      return (
       <div> 
         {this.props.author}
       </div>
      );
    }
  }
  
 export default Quoteauthor;