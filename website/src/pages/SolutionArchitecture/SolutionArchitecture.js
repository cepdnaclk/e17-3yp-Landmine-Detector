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
                    Landmines are prominent weapons designed to destroy or disable enemy targets which detonate by the movement of its target, pressure, sound, magnetism and vibration. More than a hundred million land mines are scattered around the world which remain hazardous for years even after conflict termination posing a significant threat to civilians and the economy. More Effective and sophisticated tools to detect, locate and deactivate landmines are urgently needed to make lands safer for humans to use.
                    </p>

                </div>

                <div className="Application ">
                    <img className="Application_Logo" alt="" src={process.env.PUBLIC_URL + '/images/robo_logo.jpg'} width="100" height="95" />
                    <h3 className='sub-topic'>Automated Robot</h3>
                    <p className='text'>
                    Landmines are prominent weapons designed to destroy or disable enemy targets which detonate by the movement of its target, pressure, sound, magnetism and vibration. More than a hundred million land mines are scattered around the world which remain hazardous for years even after conflict termination posing a significant threat to civilians and the economy. More Effective and sophisticated tools to detect, locate and deactivate landmines are urgently needed to make lands safer for humans to use.
                    </p>

                </div>

                <div className="Application ">
                    <img className="Application_Logo" alt="" src={process.env.PUBLIC_URL + '/images/web_server.jpg'} width="100" height="95" />
                    <h3 className='sub-topic'>Web Server</h3>
                    <p className='text'>
                    Landmines are prominent weapons designed to destroy or disable enemy targets which detonate by the movement of its target, pressure, sound, magnetism and vibration. More than a hundred million land mines are scattered around the world which remain hazardous for years even after conflict termination posing a significant threat to civilians and the economy. More Effective and sophisticated tools to detect, locate and deactivate landmines are urgently needed to make lands safer for humans to use.
                    </p>

                </div>

            </div>


        </div>


    )

}


export default SolutionArchitecture;