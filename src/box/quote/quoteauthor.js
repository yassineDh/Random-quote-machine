import React ,{Component} from 'react';

class Quoteauthor extends Component {
    render(){
      return (
       <div className="float-right pr-2 " style={{color:this.props.test}}> 
          <span>- </span>{this.props.author}       
       </div>
      );
    }
  }
  
 export default Quoteauthor;