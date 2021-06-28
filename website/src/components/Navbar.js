// import Home from '../pages/Home/Home'

import Introduction from '../pages/Introduction/Introduction';
import './navbar-styles.css'
import Home from '../pages/Home/Home';


function Navbar() {
    return(
        <body>

        <div className='navbar'>
            <ul className='nav'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#intro'>Introduction</a></li>
                <li><a href='#ha'>Hardware Architecture</a></li>
                <li><a href='#hd'>Hardware Design</a></li>
                <li><a href='#sd'>Software Design</a></li>
                <li><a href='#budget'>Budget</a></li>
                <li><a href='#team'>Team</a></li>
            </ul>
        </div>

        <div className='banner-area' id="home">
            <img src={"/images/robots.jpg"} alt="homeimg" className="homeImg"></img>
        </div>
        {/* <Home /> */}
        <div className='intro-area' id='intro'>
            <Introduction />
        </div>
        {/* <hr/> */}
        <div className='ha-area' id='ha'>
            <h1 style={{color:"#43dea5"}}>Hardware Architecture</h1>       
        </div>
        <hr/>
        <div className='hd-area' id='hd'>
            <h1 style={{color:"#43dea5"}}>Hardware Design</h1>             
        </div>
        <hr/>
        <div className='sd-area' id='sd'>
            <h1 style={{color:"#43dea5"}}>Software Design</h1>            
        </div>
        <hr/>
        <div className='budget-area' id='budget'>
            <h1 style={{color:"#43dea5"}}>Budget</h1>         
        </div>
        <hr/>
        <div className='team-area' id='team'>
            <h1 style={{color:"#43dea5"}}>Team</h1>
        </div>
        </body>
        
    )
}

export default Navbar;