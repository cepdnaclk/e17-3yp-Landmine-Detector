import React,{Component} from "react";
import axios from 'axios'

class PostList extends Component {
    constructor(props){
        super(props)

        this.state = {
            robots:[],
            robotsNames: [],
            colours: []
        }
    }

    componentDidMount(){
        axios.get("https://6zx50pbvqb.execute-api.us-east-1.amazonaws.com/items")
        .then(response => {
            console.log(response.data.Items[0])
            this.setState({robots: response.data})
            // console.log('type '+(response.data.Items[0][0]))

        let currentColours = []

        var currentNames = []
        for(let i=0; i< response.data.Items.length; i++) {
            console.log(typeof(response.data.Items[i].status));
            if(response.data.Items[i].status==1) {
                currentColours.push('green')
            }else if(response.data.Items[i].status==2) {
                currentColours.push('yellow')
            }else{
                currentColours.push('red')
            }
            currentNames.push([response.data.Items[i].id, response.data.Items[i].status])
        }

        this.setState({colours: currentColours})
        this.setState({robotsNames: currentNames})

        console.log(this.state.robotsNames);

        console.log(this.state.colours);



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
                    // return(<div key={index} style={{backgroundColor: this.state.colours[index], padding: '5px', border: '5px solid white'}} >{name[0]}  status: {name[1]}</div>)
                    return(<div key={index} style={{backgroundColor: this.state.colours[index], padding: '5px', border: '5px solid white',
                }} >{name[0]}</div>)
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