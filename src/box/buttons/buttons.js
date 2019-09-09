import React ,{Component} from 'react';


class Quotebuttons extends Component {

    render(){
      return (
        <div >
          <button className="btn btn-primary shadow-none mr-3 float-left" style={{backgroundColor:this.props.test,border:0}}><span><i className="fa fa-twitter"></i></span></button>
          <button className="btn btn-primary shadow-none mr-3 float-left" style={{backgroundColor:this.props.test,border:0}}><span><i class="fa fa-tumblr"></i></span></button>
          <button className="btn btn-primary shadow-none mb-3 float-right" style={{backgroundColor:this.props.test,border:0}}onClick={this.props.newOne}>Change Quote</button>
        </div>
      );
    }
  }
  
  export default Quotebuttons;
  