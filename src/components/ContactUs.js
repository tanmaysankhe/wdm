import './css/ContactUs.css';

function ContactUs(){
    return(
        <section class="contact">
    <div class="contact-content">
        <h2> Contact Us</h2>
    </div>

        <div class="contact-container">
       
        <div class="contactForm">
            <form>
                <h2>Send Message</h2>
                <div class="inputBox">
                    <input type="text" name="" required="required"/>
                    <span>Full Name</span>
                </div>
                <div class="inputBox">
                    <input type="text" name="" required="required"/>
                    <span>Email</span>
                </div>
                <div class="inputBox">
                    <textarea required="required"></textarea>
                    <span>Type your message here...</span>
                </div>
                <div class="inputBox">
                    <input type="submit" name="" value="Submit"/>
                </div>
            </form>
        </div> 
    </div>
   </section>

    )

    

}

export default ContactUs;
