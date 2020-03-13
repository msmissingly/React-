import React, { Component } from 'react'
import axios from 'axios'

class Search extends Component{
    search=()=>{
        const {updateState} = this.props
        const {keyWord} = this.refs
        // if(keyWord.value.trim()){
            updateState({isFirst:false,isLoading:true})
        // }
        //发送请求
        const url = `https://api.github.com/search/users?q=${keyWord.value}`
        axios.get(url).then(
            response=>{
                console.log(response.data.items)
                updateState({isLoading:false,users:response.data.items}) 
            },
            error=>{
                updateState({isLoading:false,error:error.message})
            }
        )


    }
    render(){
        return(
        <div>
          <h3 className="jumbotron-heading">Search Github Users</h3>
          <input ref='keyWord' type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
        )
    }
}
export default Search