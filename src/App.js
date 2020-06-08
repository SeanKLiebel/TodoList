import React from 'react';
import { BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/pages/Navbar';

  import './App.css';
  import ListItems from './ListItems'
  
  class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        items:[],
        currentItem:{
          text:'',
          key:''
        }
      }
      this.addItem = this.addItem.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.setUpdate = this.setUpdate.bind(this);
    }
    addItem(e){
      e.preventDefault();
      const newItem = this.state.currentItem;
      if(newItem.text !==""){
        const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem:{
          text:'',
          key:''
        }
      })
      }
    }
    handleInput(e){
      this.setState({
        currentItem:{
          text: e.target.value,
          key: Date.now()
        }
      })
    }
    deleteItem(key){
      const filteredItems= this.state.items.filter(item =>
        item.key!==key);
      this.setState({
        items: filteredItems
      })
  
    }
    setUpdate(text,key){
      console.log("items:"+this.state.items);
      const items = this.state.items;
      items.map(item=>{      
        if(item.key===key){
          console.log(item.key +"    "+key)
          item.text= text;
        }
      })
      this.setState({
        items: items
      })
      
     
    }
   render(){
    <Router>
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter task" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>
          <p>{this.state.items.text}</p>
          
            <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
      <NavBar />
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/features" component={Features}>
              <Features />
          </Route>
          <Route path="/pricing" component={Pricing}>
            <Pricing />
          </Route>
          <Route path="/About" component={About}>
            <About />
          </Route>
          <Route path="/Contact" component={Contact}>
            <Contact />
          </Route>
        </Switch>
          
        </header>
      </div>
     </Router>
    );
   }
  }
  
  
  export default App;
