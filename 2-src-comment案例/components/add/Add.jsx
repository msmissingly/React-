import React,{Component} from 'react'
import { v4 as uuidv4 } from 'uuid';

class Add extends Component{
  add=()=>{
    let {nameNode,contentNode} = this.refs

    if(!nameNode.value.trim()||!contentNode.value.trim()){
      alert('输入不能为空！')
      return
    }
    this.props.addComment({id:uuidv4(),name:nameNode.value,content:contentNode.value})
    nameNode.value=''
    contentNode.value = ''
    
  }
    render(){
        return (
            <div className="col-md-4">
              <form className="form-horizontal">
                <div className="form-group">
                  <label>用户名</label>
                  <input ref='nameNode' type="text" className="form-control" placeholder="用户名" />
                </div>
                <div className="form-group">
                  <label>评论内容</label>
                  <textarea ref='contentNode' className="form-control" rows="6" placeholder="评论内容"></textarea>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <button onClick={this.add} type="button" className="btn btn-default pull-right">提交</button>
                  </div>
                </div>
              </form>
            </div>
        )
    }

}

export default Add;