import './Team.css'

function Team() {
    return(
        <div>
            <h1 className='main-topic'>Team</h1>
            <div className="team-members">
                <div className="member">
                <img className="member-img" alt="" src={process.env.PUBLIC_URL + '/images/akila.jpg'} width="200" height="190" />
                    <h3>Akila Karunanayake</h3>
                    <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/linkedin.png'} width="40" height="40" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/fb.png'} width="40" height="40" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/web.png'} width="40" height="40" />
                    </a> 
                </div>
                <div className="member">
                    <img className="member-img" alt="" src={process.env.PUBLIC_URL + '/images/thisara.jpg'} width="200" height="190" />
                    <h3>Thisara Manohara</h3>
                    <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/linkedin.png'} width="40" height="40" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/fb.png'} width="40" height="40" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/web.png'} width="40" height="40" />
                    </a> 
                </div>
                <div className="member">
                    <img className="member-img" alt="" src={process.env.PUBLIC_URL + '/images/vishva.jpg'} width="200" height="190" />
                    <h3>Vishva Rupasinghe</h3>
                    <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/linkedin.png'} width="40" height="40" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/fb.png'} width="40" height="40" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/web.png'} width="40" height="40" />
                    </a> 
                </div>
            </div>
            <br/><br/>
            <h1 className='main-topic'>Supervisors</h1>
            <div className="team-members">
                <div className="member">
                <img className="member-img" alt="" src={process.env.PUBLIC_URL + '/images/isuru.png'} width="200" height="190" />
                    <h3>Dr. Isuru Nawinne</h3>
                    <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/linkedin.png'} width="40" height="40" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/fb.png'} width="40" height="40" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/web.png'} width="40" height="40" />
                    </a> 
                </div>
                <div className="member">
                    <img className="member-img" alt="" src={process.env.PUBLIC_URL + '/images/mahanama.jpg'} width="200" height="190" />
                    <h3>Dr. Mahanama Wickramasinghe</h3>
                    <a href="#" target="_blank">
                        <img alt="" src={process.env.PUBLIC_URL + '/png/linkedin.png'} width="40" height="40" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/fb.png'} width="40" height="40" />
                        &emsp;
                        <img alt="" src={process.env.PUBLIC_URL + '/png/web.png'} width="40" height="40" />
                    </a> 
                </div>
            </div>


            
        </div>
    )
}


export default Team;