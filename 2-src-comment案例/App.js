import React,{Component} from 'react'
import Add from  './components/add/Add'
import List from './components/list/List'


class App extends Component {
    state={
    comments:[
      {id:'1',name:'莉莉',content:'好难啊'}
    ]
    }
    addComment=(commentObj)=>{
      let {comments} = this.state

      comments.unshift(commentObj)

      this.setState({comments})

    }
    deleteComment=(id)=>{
      let {comments} = this.state
      comments = comments.filter((commentObj)=>{
       return commentObj.id !== id
       
      })
      this.setState({comments})
    }

  render(){
    
    return (
    
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment}/>
          <List comments={this.state.comments} deleteComment={this.deleteComment}/>
        </div>
      </div>
    
);
  }
}

export default App;
