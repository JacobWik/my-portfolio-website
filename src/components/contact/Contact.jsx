import "./contact.scss"

export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
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
                </form>
            </div>
        </div>
    )
}
