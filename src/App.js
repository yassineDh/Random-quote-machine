import React ,{Component} from 'react';
import Box from './box/quoteBox.js';
import './App.scss';


class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     color: "#111111"
  //   };}

  // handleChange(){
  //   this.setState(
  //     {}
  //   )
  // }

  render(){
    return (
    <div>
      <Box />
    </div>
    );
  }
}

export default App;
