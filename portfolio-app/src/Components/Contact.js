import React, { useState} from 'react'
import './Contact.css';
import { db } from './Fire';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoading(true);//loading....

        db.collection("contacts").add({
            name: name,
            email: email,
            message: message
        })
            .then(() => {
                alert("Your response has been recorded !!👍");
                setIsLoading(false);//loaded
            })
            .catch((error) => {
                alert(error);
                setIsLoading(false);
            })

        setName("");
        setEmail("");
        setMessage("");
        //set all the state to empty once it is sumbiteed 
    }//submit handler
    
    return (
        <form className="form" onSubmit={submitHandler}>
            <h1>Contact Form 🐱‍🏍</h1>
            <label>User Name:</label>
            <input type="text" placeholder="name" value={name}
            onChange={(event)=>setName(event.target.value)}
            />

            <label>User Email</label>
            <input type="text" placeholder="email" value={ email } onChange={(event)=>setEmail(event.target.value)}/>

            <label>leave a message:</label>
            <textarea name="" id="" cols="30" rows="10" placeholder="message" value={ message}  onChange={(event)=>setMessage(event.target.value)}></textarea>

            <button type="submit" style={{ backgroundColor: isLoading ? '#ccc' : 'rgb(2,2,110' }} >Submit response </button>
        </form>
    )
}

export default Contact
