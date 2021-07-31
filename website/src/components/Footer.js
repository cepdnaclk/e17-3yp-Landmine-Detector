import React from 'react'
import './Footer.css'

const Footer = () => {
    return(

        <div className='row'>
            {/* col1 */}
            <div className='col'>
                <h1>University of Peradeniya</h1>
                <strong>Phone: </strong> &emsp;
                +94 81 239 33 00 <br/>
                <p><strong>Web-site:</strong><a href="http://www.pdn.ac.lk/" target="_blank">http://www.pdn.ac.lk/</a></p>
            </div>

            {/* col2 */}
            <div className='col'>
                <h1>Faculty of Engineering</h1>
                <strong>Phone: </strong> &emsp;
                +94 81 239 33 02 <br/>
                <p><strong>Web-site:</strong><a href="http://eng.pdn.ac.lk/" target="_blank">http://eng.pdn.ac.lk/</a></p>
            </div>

            {/* col3 */}
            <div className='col'>
                <h1>Computer Engineering Department</h1>
                <strong>Phone: </strong> &emsp;
                +94 81 239 39 14 <br/>
                <p><strong>Web-site:</strong><a href="http://www.ce.pdn.ac.lk/" target="_blank">http://www.ce.pdn.ac.lk/</a></p>
            </div>

        </div>

    )
}

export default Footer