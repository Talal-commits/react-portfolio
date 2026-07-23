function Form() {
    return (
        <div className="form-container">
            <form id="xp-contact-form">
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                    <label for="email">Your Email</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label for="message">Your Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <div className="button-group">
                    <button type="submit" class="xp-btn primary">Send</button>
                    <button type="button" class="xp-btn">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Form;