
import './App.css';
import React from 'react';

//import module to allow redirect within page
import { Link } from "react-router-dom";

class Verify extends React.Component {

  checkData() {
    //get certificate input in text format from user
    const userText = document.querySelector(".data").value.split("\n")[0];

    //split text to format into array
    const certKey = userText.split(" ")[0];

    //initalize http request
    const request = new XMLHttpRequest();

    // REDIRECT to WAVES API with the indicated URL to check if user data exists on the blockchain
    request.open("GET", "https://nodes-testnet.wavesnodes.com/addresses/data/3N6EmqqQ1pZderX8sNMrfVuEo85ocPoqs2M/"+certKey);
    
    
    request.onload  = function() {
      // check if API data is equal to user text
        const doesExist = JSON.parse(request.response).value === userText;
        
        // if requested user input exists or not, display browser the status
        document.querySelector(".result").innerHTML = doesExist ? "<span style='color: green'><strong>Certificate</strong> exists</span>" : "<span style='color: red'><strong>Certificate</strong> does not exist</span>";
        return doesExist;
    };
    request.send();
}

  render() {
      return (
        
          <div className="container verify">
          <h1>Verify the <strong>certificate</strong><br/>using blockchain</h1><br/>

          {/* text area to recieve user input */}
        <textarea className="data" name="data" id="" cols="30" rows="3" defaultValue="1 Sasha Ivanov"/><br/>
        
        {/* a click on button runs the checkData function above to process on the waves platform*/}
        <button onClick= {()=> {console.log(this.checkData())}}>Verify!</button>
        <br/>
        <p className="result">Is the certificate authentic?</p>

        {/* redirects to WAVES Explorer page to view data in detail */}
        <p className='verify-details'>View the verification details here: <br/><a rel="noreferrer" target="_blank"  href="https://nodes-testnet.wavesnodes.com/addresses/data/3N6EmqqQ1pZderX8sNMrfVuEo85ocPoqs2M">
            https://wavesexplorer.com/testnet/address/<br/>
            3N6EmqqQ1pZderX8sNMrfVuEo85ocPoqs2M/data
        </a></p>
        <br/>

        {/* redirects to add.js where admin can insert certificate */}
        <p>
            Add a new  certificate<Link to="/"> here</Link><br/>
            (for admins only)
        </p>
        </div>
      )
  }
}

export default Verify;
