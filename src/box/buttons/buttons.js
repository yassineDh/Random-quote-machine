import React ,{Component} from 'react';


class Quotebuttons extends Component {

    render(){
      return (
        <div>
          <button className="btn btn-primary">Twitter</button>
          <button className="btn btn-primary">Tumblr</button>
          <button className="btn btn-primary" onClick={this.props.newOne}>Change Quote</button>
        </div>
      );
    }
  }
  
  export default Quotebuttons;
  