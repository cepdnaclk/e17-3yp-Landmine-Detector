import './Team.css'

function Team() {
    return(
        <div>
            <h1 className='main-topic'>Team</h1>
            <br></br>
            <div className="team-members">
                <div className="member">
                    <img className="member-img" alt="" src={process.env.PUBLIC_URL + '/images/akila.jpg'} width="200" height="190" />
                    <h3>Akila Karunanayake</h3>
                    <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/linkedin.png'} width="40" height="40" />
                        &emsp;
                    </a>
                    <a href="https://github.com/Akilax0" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/github.png'} width="40" height="40" />
                        &emsp;
                    </a>
                    <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/web.png'} width="40" height="40" />
                    </a>
                </div>
                <div className="member">
                    <img className="member-img" alt="" src={process.env.PUBLIC_URL + '/images/thisara.jpeg'} width="200" height="190" />
                    <h3>Thisara Manohara</h3>
                    <a href="https://www.linkedin.com/in/thisara-manohara-6990911a8/" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/linkedin.png'} width="40" height="40" />
                        &emsp;
                    </a>
                    <a href="https://github.com/thisaramanohara" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/github.png'} width="40" height="40" />
                        &emsp;
                    </a>
                    <a href="https://www.thisaramanohara.me/" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/web.png'} width="40" height="40" />
                    </a>
                </div>
                <div className="member">
                    <img className="member-img" alt="" src={process.env.PUBLIC_URL + '/images/vishva.jpg'} width="200" height="190" />
                    <h3>Vishva Navanjana</h3>
                    <a href="https://www.linkedin.com/in/vishva-navanjana-67334116a/" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/linkedin.png'} width="40" height="40" />
                        &emsp;
                    </a>
                    <a href="https://github.com/VishvaNavanjana" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/github.png'} width="40" height="40" />
                        &emsp;
                    </a>
                    <a href="https://www.vishva.me/" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/web.png'} width="40" height="40" />
                    </a> 
                </div>
            </div>
            <br/><br/>
            <h1 className='main-topic'>Supervisors</h1>
            <br></br>
            <div className="team-members">
                <div className="member">
                    <img className="member-img" alt="" src={process.env.PUBLIC_URL + '/images/isuru.png'} width="200" height="190" />
                    <h3>Dr. Isuru Nawinne</h3>
                    &emsp;&emsp;&emsp;
                    <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/linkedin.png'} width="40" height="40" />
                        &emsp;
                    </a>
                    {/* <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/fb.png'} width="40" height="40" />
                        &emsp;
                    </a>
                    <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/web.png'} width="40" height="40" />
                    </a> */}
                </div>
                
                <div className="member">
                    <img className="member-img" alt="" src={process.env.PUBLIC_URL + '/images/mahanama.jpg'} width="200" height="190" />
                    <h3>Dr. Mahanama Wickramasinghe</h3>
                    &emsp;&emsp;&emsp;
                    <a href="https://www.linkedin.com/in/mahanama" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/linkedin.png'} width="40" height="40" />
                        &emsp;
                    </a>
                    {/* <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/fb.png'} width="40" height="40" />
                        &emsp;
                    </a>
                    <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/web.png'} width="40" height="40" />
                    </a> */}
                </div>
            </div>


            
        </div>
    )
}


export default Team;