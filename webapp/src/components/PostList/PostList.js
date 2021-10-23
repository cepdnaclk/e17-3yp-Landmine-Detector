import React,{Component} from "react";
import axios from 'axios'

class PostList extends Component {
    constructor(props){
        super(props)

        this.state = {
            robots:[],
            robotsNames: []
        }
    }

    componentDidMount(){
        axios.get("https://6zx50pbvqb.execute-api.us-east-1.amazonaws.com/items")
        .then(response => {
            console.log(response.data.Items[0].id)
            this.setState({robots: response.data})
            // console.log('type '+(response.data.Items[0][0]))

            var currentNames = []
        for(let i=0; i< response.data.Items.length; i++) {
            currentNames.push(response.data.Items[i].id)
        }


        this.setState({robotsNames: currentNames})

        console.log(this.state.robotsNames);



        })
        .catch(error => {
            console.log(error)
        })

        // var currentNames = []
        // for(let i=0; i< response.data.Items.length; i++) {
        //     currentNames.push(response.data.Items[i].id)
        // }

        // this.setState({robotsNames: currentNames})

        // console.log(this.state.robotsNames);
    }

    render(){
        return(
            <div>
                List Of Robots

                {this.state.robotsNames.map((name, index)=>{
                    return(<div key={index}>{name}</div>)
                })}

            </div>
        )

    }
}

export default PostList


// import React, { useState } from "react";
// import axios from 'axios'

//  function PostList() {


//     axios.get("https://6zx50pbvqb.execute-api.us-east-1.amazonaws.com/items")
//     .then(response=>{
//         console.log(response.data.Items.length);
//         console.log(response.data.Items[0].id)
//     })
//     .catch(error => {
//         console.log(error)
//     })
//     return (
//         <h1>hfjdhsjf</h1>
//     );
//   }


// export default //PostList