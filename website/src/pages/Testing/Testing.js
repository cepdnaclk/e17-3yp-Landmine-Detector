import './Testing.css'

function Testing(){
    return(
        <div className="slide-show">
            <h1 style={{color:"#43dea5", textAlign:'center' }}>Testing</h1>  
            <br></br> 

            <div className="each-slide-sa">
                <h1 className='sub-topic-hd'>User Interface & login Testing </h1>


                <h1 className='sub-topic-hd'>Backend Testing</h1>
                            <div className="left-sa">
                                <img alt="" src={process.env.PUBLIC_URL + '/images/postman_logo.png'} style={{ display: 'block', marginRight:'auto',width:'40%',opacity:'70%'}}/> 
                                <ul  className='ha-text'>
                                    <li>GraphQL server is setup using AWS AppSync</li> <br></br>
                                    <li>Postman for backend testing </li>
                                        <ul>
                                            <li>Send requests to read/write to our database</li>
                                            <li>Testing Lambda functions </li>
                                            <li>Test publishing MQTT message</li>
                                        </ul>
                                </ul>
                            </div>
                    


            </div>

        </div>
    )
}

export default Testing;