import React,{Component} from 'react';
import ListOfDetails from './component/ListOfDetails';
import img_logo from './asserts/images/logo.png';
import  './asserts/css/style.css';

class App extends Component{

  render(){
    return(
      <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src={img_logo} width="150px"/></a>    
          </nav>
          <ListOfDetails />
        </React.Fragment>
    
    )
  }

}

export default App;
