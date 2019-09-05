import React ,{Component} from 'react';


class Quotebuttons extends Component {

    render(){
      return (
        <div >
          <button className="btn btn-primary mr-3 float-left"><span><i className="fa fa-twitter"></i></span></button>
          <button className="btn btn-primary mr-3 float-left"><span><i class="fa fa-tumblr"></i></span></button>
          <button className="btn btn-primary mb-3 float-right" onClick={this.props.newOne}>Change Quote</button>
        </div>
      );
    }
  }
  
  export default Quotebuttons;
  