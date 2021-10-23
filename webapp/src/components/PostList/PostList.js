import React,{Component} from "react";
import axios from 'axios'

class PostList extends Component {
    constructor(props){
        super(props)

        this.state = {
            robots:[]
        }
    }

    componentDidMount(){
        axios.get("https://6zx50pbvqb.execute-api.us-east-1.amazonaws.com/items")
        .then(response => {
            console.log(response)
            this.setState({robots: response.data})
            console.log({ldr: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }



    render(){
        const { robots } = this.state
        return(
            <div>
                
                {robots.items}
                
                {
                    robots.length?
                    robots.map(robot => <div key={robot.id}>{robot.status}</div>) :
                    null
                }
            </div>
        )
    }
}

export default PostList