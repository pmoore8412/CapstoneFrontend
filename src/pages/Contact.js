import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Contact Us</h1>

                <div className="container">
                    <form className="container">
                    <div className="form-group container col-4">
                        <label>Email:</label>
                        <input type="text" className="form-control" name="email" id="email" />
                    </div>
                    <div className="form-group container col-4">
                        <label>Email Subject:</label>
                        <input type="text" className="form-control" name="userName" id="userName" />
                    </div>
                    <div className="form-group container col-6">
                        <label>Message:</label>
                        <textarea type="text" className="form-control" name="message" id="message" rows="7" />
                    </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

            </div>
        );
    }
}

export default Contact;