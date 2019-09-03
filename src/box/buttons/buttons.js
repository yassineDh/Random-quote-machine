import React ,{Component} from 'react';
import Quotedata from "./quotes.json";


class Quotebuttons extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allquotes: {...Quotedata}
        };
        this.handleClickChange = this.handleClickChange.bind(this);
      }

    handleClickChange(){
        let len = this.state.allquotes.quotes.length;
        let num = Math.floor((Math.random() * len) + 1);
        console.log(this.state.allquotes.quotes[num].quote)
    }

    render(){
      return (
        <div>
            <div>
                {this.state.allquotes.quotes[20].quote} 


            </div>
          <button className="btn btn-primary">Twitter</button>
          <button className="btn btn-primary">Tumblr</button>
          <button className="btn btn-primary" onClick={this.handleClickChange}>Change Quote</button>
        </div>
      );
    }
  }
  
  export default Quotebuttons;
  