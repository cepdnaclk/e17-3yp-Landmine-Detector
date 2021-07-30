import './Hardware.css'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import im from './land.jpeg'
import im1 from './landmine.jpeg'
import im2 from  './Overview.png'

const slideImages = [
    '../../images/land.jpeg',
    'images/landmine.jpeg',
    'images/Overview.png'
  ];
  

function Hardware() {
    return(
        <div className="slide-show">
        <h1 style={{color:"#43dea5", textAlign:'center' }}>Hardware Design</h1>  
        <br></br>      
        {/* <img alt="" src={process.env.PUBLIC_URL + '/images/Hardware.png'} style={{ display: 'block',marginLeft:'auto', marginRight:'auto',width:'80%'}}/>  */}
            <Slide easing="ease">
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${im})`}}>
                        <span>Slide 1</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${im1})`}}>
                        <span>Slide 2</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{'backgroundImage': `url(${im2})`}}>
                        <span>Slide 3</span>
                        </div>
                    </div>
            </Slide>

        </div>
    )
}


export default Hardware;