import React,{Component} from 'react'
import {Link,Route} from 'react-router-dom'
import HomeMessageDetail from '../home-message-detail/home-message-detail'

class HomeMessage extends Component{
  state={
    messages:[]
  }
  componentDidMount(){
    this.timer=setTimeout(()=>{
      this.setState({
        messages:[
          {id:'001',name:'消息1'},
          {id:'002',name:'消息2'},
          {id:'003',name:'消息3'},
          {id:'004',name:'消息4'},
        ]
      })
    },1000)
  }
  componentWillUnmount(){
    clearTimeout(this.timer)
  }

  pushShow=(id)=>{
    this.props.history.push(`/home/message/detial/${id}`)

  }
  replaceShow=(id)=>{
    this.props.history.replace(`/home/message/detail/${id}`)
  }
  back=()=>{
    this.props.history.goBack()
  }
  forward=()=>{
    this.props.history.goForward()
  }

    render(){
        return(
                <div>
                  <ul>
                     {
                       this.state.messages.map((messageObj)=>{
                         return (
                          <li key={messageObj.id}>
                            <Link to={`/home/message/detail/${messageObj.id}`}>{messageObj.name}</Link>&nbsp;&nbsp;
                            <button onClick={()=>{this.pushShow(messageObj.id)}}>push查看</button>
                            <button onClick={()=>{this.replaceShow(messageObj.id)}}>replace查看</button>
                          </li>
                         )
                       })
                     }
                     
                  </ul>
                  <button onClick={this.back}>后退</button>&nbsp;
				          <button onClick={this.forward}>前进</button>
                  <hr/>
                  <Route path='/home/message/detail/:id' component={HomeMessageDetail}/>
                </div>
        )
    }
}
export default HomeMessage