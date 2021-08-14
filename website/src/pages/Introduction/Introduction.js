import './Introduction.css'

function Introduction() {
    return(
        <div className="text-block">
            <h1 className='main-topic'>Introduction</h1>
            <h1 className='sub-topic'>About</h1>
            <p className='text'>Landmines are prominent weapons designed to destroy or 
            disable enemy targets which detonate by the movement of its target, pressure, 
            sound, magnetism and vibration. More than a hundred million land mines are scattered 
            around the world which remain hazardous for years even after conflict termination
             posing a significant threat to civilians and the economy. More Effective and 
             sophisticated tools to detect, locate and deactivate landmines are urgently needed
              to make lands safer for humans to use.</p>

            <br></br>
            <h1 className='sub-topic'>Problem</h1>
            <p className='text'>Currently available demining methods which include humanitarian 
            and mechanical demining utilize manual prodders or metal detectors operated by humans
             and mine clearing machines respectively to detect the location of mines. This conventional
              methods are labor intensive, expensive, time consuming and possess high risk for the 
              humans and machines involved in the process.</p>

            <br></br>
            <h1 className='sub-topic'>Solution</h1>
            <p className='text'>We introduce 'The Landmine Detection Robot' that accurately detects mines 
            through sensors and send the GPS coordinates of the specific locations where mines are 
            located to the server where a map of the mine field is updated. The deployment of multiple
            Mine Detection Robots to the mine field facilitates finding a safe pathway through the
             mine fields safely and efficiently without any human involvement making the challenging 
             process of demining easier than ever.</p>
        </div>
    )
}


export default Introduction;