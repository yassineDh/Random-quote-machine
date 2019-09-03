import React ,{Component} from 'react';
import Quotedata from "./quotes.json";


class Quotebuttons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allquotes: {...Quotedata}
        };
      }

    render(){
      return (
        <div>
            <div>
                {this.state.allquotes.quotes[20].quote}
            </div>
          <button className="btn btn-primary">Twitter</button>
          <button className="btn btn-primary">Tumblr</button>
          <button className="btn btn-primary">Change Quote</button>
        </div>
      );
    }
  }
  
  export default Quotebuttons;
  