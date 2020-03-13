import React,{Component} from 'react'
import Search from './components/search/search'
import List from './components/list/list'


class App extends Component {

  state={
    isFirst:true,
    isLoading:false,
    users:[],
    error:''

  }
  updateState=(stateObj)=>{
    this.setState(stateObj)

  }
  render(){
    return(
      <div className="container">
      <section className="jumbotron">
        <Search  updateState={this.updateState}/>
      </section>
      <List state={this.state}/>
    </div>
    )
  }

 
  }

export default App;
