import './css/ContactUs.css';

function ContactUs(){
    return(
        <section className="contact">
    <div className="contact-content">
        <h2> Contact Us</h2>
    </div>

        <div className="contact-container">
       
        <div className="contactForm">
            <form>
                <h2>Send Message</h2>
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span>Full Name</span>
                </div>
                <div className="inputBox">
                    <input type="text" name="" required="required"/>
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <textarea required="required"></textarea>
                    <span>Type your message here...</span>
                </div>
                <div className="inputBox">
                    <input type="submit" name="" value="Submit"/>
                </div>
            </form>
        </div> 
    </div>
   </section>

    )

    

}

export default ContactUs;
