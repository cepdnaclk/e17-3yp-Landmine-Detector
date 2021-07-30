import './SolutionArchitecture.css'

function SolutionArchitecture() {
    return(
        <div>
            <h1 className='main-topic'>Solution Architecture</h1>
            <br></br>

            <div className="SolutionArchitectures">

                <div className="Application ">
                <img className="Application_Logo" alt="" src={process.env.PUBLIC_URL + '/images/web_app.png'} width="100" height="95"  />
                    <h3 className='sub-topic'>Web Application</h3>
                    <p className='text'>
                        Add text
                    </p>

                </div>

                <div className="Application ">
                    <img className="Application_Logo" alt="" src={process.env.PUBLIC_URL + '/images/robo_logo.jpg'} width="100" height="95" />
                    <h3 className='sub-topic'>Automated Robot</h3>
                    <p className='text'>
                        Add text
                    </p>

                </div>

                <div className="Application ">
                    <img className="Application_Logo" alt="" src={process.env.PUBLIC_URL + '/images/web_server.jpg'} width="100" height="95" />
                    <h3 className='sub-topic'>Web Server</h3>
                    <p className='text'>
                        Add text
                    </p>

                </div>

            </div>


        </div>


    )

}


export default SolutionArchitecture;