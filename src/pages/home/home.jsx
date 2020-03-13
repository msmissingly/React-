import React,{Component} from 'react'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import HomeNews from '../home-news/home-new'
import HomeMessage from '../home-message/home-message'

class Home extends Component{
    render(){
        return(
            <div>
                <h3>我是Home的内容</h3>
                <div>
                  <ul className="nav nav-tabs">
                    <li>
                      <NavLink activeClassName='demo' className="list-group-item active" to="/home/news">News</NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName='demo' className="list-group-item " to="/home/message">Message</NavLink>
                    </li>
                  </ul>
                  <Switch>
                      <Route path='/home/news' component={HomeNews}/>
                      <Route path='/home/message' component={HomeMessage}/>
                      <Redirect  to='/home/news'/>
                  </Switch>
                  
                </div>

            </div>

        )
    }

}

export default Home
