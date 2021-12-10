import "./contact.scss";
import {useState} from "react";


export default function Contact() {
    const [message, setMessage] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true)
    }

    return (
        <div className="contact" id="contact">
            <div className="container">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" placeholder="Name"/>
    
                    <label>Email</label>
                    <input type="text" placeholder="Email"/>

                    <label>Message</label>
                    <textarea placeHolder="message" maxLength="150" cols="30"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I'll reply as soon as possible :)</span>}
                </form>
            </div>
        </div>
    )
}
