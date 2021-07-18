// import Home from '../pages/Home/Home'

import Introduction from '../pages/Introduction/Introduction';
import Team from '../pages/Team/Team';
import './navbar-styles.css'
import Home from '../pages/Home/Home';


function Navbar() {
    return(
        <body>

        <div className='navbar'>
            <ul className='nav'>
                <li><a href='#home'><img alt="" src={process.env.PUBLIC_URL + '/png/logo.png'} width="50" height="50"  /></a></li>
                {/* <li><a href='#home'>Home</a></li> */}
                <li><a href='#intro'>Introduction</a></li>
                <li><a href='#ha'>Solution Architecture</a></li>
                <li><a href='#hd'>Hardware Design</a></li>
                <li><a href='#sd'>Software Design</a></li>
                <li><a href='#budget'>Budget</a></li>
                <li><a href='#team'>Team</a></li>
            </ul>
        </div>
        <h1>Landmine Detection Robot</h1>
        {/* <div className='banner-area' id="home"></div> */}
        <Home id='home'></Home>
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
            <Team />
        </div>
        </body>
        
    )
}

export default Navbar;