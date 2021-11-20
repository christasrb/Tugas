import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './App.css';
import Home from './views/Home/Home';
import About from './views/About/About';
import Help from './views/Help/Help';

class App extends Component {
  constructor(){
    super();
    //Inisial state view
    this.state = {
      view : 'home'
    }
  }

  render(){
    const View = ()=>{
      if(this.state.view == 'home') 
        return <Home name="Eden Hazard" />
      else if (this.state.view == 'about')
      return <About />
      else if (this.state.view == 'help')
      return <Help />
      }

      return (
        <div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a onClick={()=> this.setState({view : 'home'})}className="nav-link" href="Home">
              Home
              </a>
              </li>

              <li className="nav-item">
            <a onClick={()=> this.setState({view : 'about'})}className="nav-link" href="About">
              About
              </a>
              </li>

              <li className="nav-item">
            <a onClick={()=> this.setState({view : 'help'})}className="nav-link" href="Help">
              Help
              </a>
              </li>

          </ul>
          </nav>

          <View /> {/*Panggil component view*/}
        </div>
      )
    }
  }
  
export default App;
