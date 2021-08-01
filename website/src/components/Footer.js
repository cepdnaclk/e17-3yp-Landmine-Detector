import React from 'react'
import './Footer.css'

const Footer = () => {
    return(
        
        <div className='footer-body'>
        
        <div className='row'>
            <h1 className='contact'>Contact Us</h1>
        </div>
        <div className='row'>
            <div className='col'>
                <h2>Akila Karunanayake</h2>
                <strong>Phone: </strong> &emsp;
                +94 81 239 33 00 <br/>
            </div>

            <div className='col'>
                <h2>Thisara Manohara</h2>
                <strong>Phone: </strong> &emsp;
                +94 81 239 33 00 <br/>
            </div>

            <div className='col'>
                <h2>Vishva Navanjana</h2>
                <strong>Phone: </strong> &emsp;
                +94 81 239 33 00 <br/>
            </div>



        </div>


        <hr/>   

        <div className='row'>
            {/* col1 */}
            <div className='col'>
                <h2>University of Peradeniya</h2>
                <strong>Phone: </strong> &emsp;
                +94 81 239 33 00 <br/>
                <p><strong>Web-site:</strong><a href="http://www.pdn.ac.lk/" target="_blank">http://www.pdn.ac.lk/</a></p>
            </div>

            {/* col2 */}
            <div className='col'>
                <h2>Faculty of Engineering</h2>
                <strong>Phone: </strong> &emsp;
                +94 81 239 33 02 <br/>
                <p><strong>Web-site:</strong><a href="http://eng.pdn.ac.lk/" target="_blank">http://eng.pdn.ac.lk/</a></p>
            </div>

            {/* col3 */}
            <div className='col'>
                <h2>Computer Engineering Department</h2>
                <strong>Phone: </strong> &emsp;
                +94 81 239 39 14 <br/>
                <p><strong>Web-site:</strong><a href="http://www.ce.pdn.ac.lk/" target="_blank">http://www.ce.pdn.ac.lk/</a></p>
            </div>

        </div>

        <hr/>
        <div className='row'>
            <p>
                &copy; {new Date().getFullYear()} LANDMINE DETECTOR | All right reserved | Terms of Service | Privacy
            </p>
        </div>

        </div>

    )
}

export default Footer