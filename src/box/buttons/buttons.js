import React ,{Component} from 'react';


class Quotebuttons extends Component {

    render(){
      return (
        <div>
          <button className="btn"><span><i className="fa fa-twitter"></i></span></button>
          <button className="btn"><span><i class="fa fa-tumblr"></i></span></button>
          <button className="btn btn-primary" onClick={this.props.newOne}>Change Quote</button>
        </div>
      );
    }
  }
  
  export default Quotebuttons;
  