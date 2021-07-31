import './Timeline.css'
import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


function Timeline_LM() {
    return(
        <div>
        <h1 style={{color:"#43dea5", textAlign:'center' }}>Timeline</h1>   
        <br></br>      
        {/* <img alt="" src={process.env.PUBLIC_URL + '/images/timeline.png'} style={{ display: 'block',marginLeft:'auto', marginRight:'auto',width:'80%'}}/> */}
        <Timeline>
       <TimelineItem>
         <TimelineSeparator>
           <TimelineDot />
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>Eat</TimelineContent>
       </TimelineItem>
      <TimelineItem>
         <TimelineSeparator>
           <TimelineDot />
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>Code</TimelineContent>
       </TimelineItem>
       <TimelineItem>
         <TimelineSeparator>
           <TimelineDot />
         </TimelineSeparator>
         <TimelineContent>Sleep</TimelineContent>
       </TimelineItem>
     </Timeline>
        </div>
    )

}
export default Timeline_LM;


// export default function BasicTimeline() {
//   return (

//   );
// }
