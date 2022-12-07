

import './App.css';
import React from 'react';
import { Link } from "react-router-dom";


class Add extends React.Component {
    sendData() {
         //get certificate input in text format from user
        const userText = document.querySelector(".data").value;

        //split text to format into array
        let userData = userText.split("\n");

        //maps userText into a key-value format to model after the transaction format expected on WAVES
        userData = userData.map(function(x) { return {"key": x.split(" ")[0], 
                                        "value": x, "type": "string"}} );

        //declaring transaction with type, data from user, and fee
        const transaction = {
            type: 12, // data transaction
            data: {
                data: userData,
                fee: {
                    "tokens": "0.001",
                    "assetId": "WAVES"
                }
            }
        };

        //broadcasts data onto the WAVES blockchain
        WavesKeeper.signAndPublishTransaction(transaction);
        return userText;
    }

    render() {
        return (
            <div className="container">
            <h1>Insert a <strong>certificate</strong>
                <br/>into the blockchain</h1>  
            
            {/* text area to recieve user input */}
            <textarea className="data" name="data" cols="45" 
                    rows="3" defaultValue="1 Sasha Ivanov"/><br/>

            {/* a click on button runs the sendData function above to insert data on the WAVES blockchain*/}
            <button onClick= {()=> {console.log(this.sendData())}}>
                Add certificate!</button><br/><br/>

            {/* redirects to verify.js where user can verify certificate */}    
            <Link to="/verify"><p>Click here to verify certificate</p></Link>
            </div>
        )
    }
    }
export default Add;