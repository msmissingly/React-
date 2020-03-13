import React,{Component} from 'react'
import Search from './components/search/search'
import List from './components/list/list'


class App extends Component {

  
  render(){
    return(
      <div className="container">
      <section className="jumbotron">
        <Search  />
      </section>
      <List />
    </div>
    )
  }

 
  }

export default App;
