import React from 'react';


function FAQ() {
  return (
      <div>
        <h1>FAQ</h1>
        <h2>1) How do you generate a new search ?</h2>
        <ul>
          <li>
          First find the coordinates of an approximate center of the required search area.
          </li>
          <li>
          Input these coordinates for longitude and latitude fields.
          </li>
          <li>
          Next define the required search area in square metres.
          </li>
          <li>
          Select an available robot from the displayed list 
          </li>
          <li>
          Give create search.
          </li>
        </ul>

        <h2>2) How can I identify robot failure ?</h2>
        <ul>
          <li>On disconnect a pop up message will indicate the connection failure. <br/> Please check robot and try search again. 
            Current search details will be available both stored on database and hardware</li>
        </ul>

        <h2>3) Can I view my past searches ?</h2>
        <ul>
          <li>Past searches of a single user (owner) will be displayed on the history tab.</li>
        </ul>
        
        <h2>4) What can I find on the map ?</h2>
        <ul>
          <li>The map would display details of all data points in a search area. Each point would display state of the data point.</li>
        </ul>

        <h2>5) How can I change details ?</h2>
        <ul>
          <li>The user details can be found on the profile page.
Options are given to change password , email etc.
</li>
        </ul>


      </div> 
  );
}

export default FAQ;