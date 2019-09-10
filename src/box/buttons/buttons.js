import React ,{Component} from 'react';


class Quotebuttons extends Component {

    render(){
      const quote='"'+this.props.quote.quote+'"'+this.props.quote.author;
  
      return (
        <div >
          <button className="btn btn-primary shadow-none mr-3 float-left text-center" style={{backgroundColor:this.props.test,border:0,transition:'all 1s linear'}}><a href={`https://twitter.com/intent/tweet?hashtags=quote&text=${quote}`} target="_blank"><span><i className="fa fa-twitter" style={{color:"white"}} ></i></span></a></button>
          <button className="btn btn-primary shadow-none mr-3 float-left text-center" style={{backgroundColor:this.props.test,border:0,transition:'all 1s linear',width: '38px'}}><span><i class="fa fa-tumblr"></i></span></button>
          <button className="btn btn-primary shadow-none mb-3 float-right text-center" style={{backgroundColor:this.props.test,border:0,transition:'all 1s linear'}}onClick={this.props.newOne}>Change Quote</button>
        </div>
      );
    }
  }
  
  export default Quotebuttons;
  