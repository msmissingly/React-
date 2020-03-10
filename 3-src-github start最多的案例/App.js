import React,{Component} from 'react'
import axios from 'axios'



class App extends Component {
   state={
     isLoading:false,
     repoInfo:{name:'',url:''},
     errMsg:'',
     keyword:'v'
   }

  async componentDidMount(){
     let url = `https://api.github.com/search/repositories?q=${this.state.keyword}&sort=stars`
  //    axios.get(url).then(
  //       response=>{
  //         let {name,html_url} = response.data.items[0]
  //         this.setState({isLoading:false,repoInfo:{name,url:html_url}})
  //       },
  //       error=>{
  //         this.setState({isLoading:false,errMsg:error.message})
  //       }
  //    )
  //  }
     try {
      let response = await axios.get(url)
      let {name,html_url} = response.data.items[0]
      this.setState({isLoading:false,repoInfo:{name,url:html_url}})
     } catch (error) {
       this.setState({isLoading:false,errMsg:error.message})
     }
    }

   render(){
    const {isLoading,repoInfo,errMsg,keyword} = this.state
    let content
    if(isLoading) content=<h2>Loading......</h2>
    else if(errMsg) content=<h2>{errMsg}</h2>
    else content=<h2>github 仓库中以关键字{keyword}开头的start最多的是<a href={repoInfo.url}>{repoInfo.name}</a></h2>
    return content

   }
    

  }

export default App;
