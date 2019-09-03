import React ,{Component} from 'react';
import './quoteBox.css';
import Quote from './quote/quote';
import Quotebuttons from "./buttons/buttons"

class Box extends Component {
    render(){
      return (
        <div className="card" id="shape">
          <div className="card-body">
            <div className="row">
              <Quote />
            </div>
            <div className="row">
              <Quotebuttons />
            </div>
          </div>
        </div>
      );
    }
  }
  
 export default Box;