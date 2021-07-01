import './Team.css'

function Team() {
    return(
        <div>
            <h1 className='main-topic'>Team</h1>
            <div className="team-members">
                <div className="member">
                    {/* <img alt="" src={process.env.PUBLIC_URL + '/images/linkedin.png'} width="50" height="50" /> */}
                    <h3>Akila Karunanayake</h3>
                    <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/linkedin.png'} width="50" height="50" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/fb.png'} width="50" height="50" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/web.png'} width="50" height="50" />
                    </a> 
                </div>
                <div className="member">
                    <img className="member-img" alt="" src={process.env.PUBLIC_URL + '/images/thisara.jpg'} width="250" height="230" />
                    <h3>Thisara Manohara</h3>
                    <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/linkedin.png'} width="50" height="50" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/fb.png'} width="50" height="50" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/web.png'} width="50" height="50" />
                    </a> 
                </div>
                <div className="member">
                    <h3>Vishva Rupasinghe</h3>
                    <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/linkedin.png'} width="50" height="50" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/fb.png'} width="50" height="50" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/web.png'} width="50" height="50" />
                    </a> 
                </div>
            </div>
            
        </div>
    )
}


export default Team;