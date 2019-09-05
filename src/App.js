import React ,{Component} from 'react';
import Box from './box/quoteBox.js';
import './App.scss';


class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-*-12"> 
             <Box />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
