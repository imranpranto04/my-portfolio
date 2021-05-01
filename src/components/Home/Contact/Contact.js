import React from 'react';

import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {

    const [state, handleSubmit] = useForm("meqvekbd");
    if (state.succeeded) {
        return <p className="text-center text-white">Thanks for mailing!</p>;
    }

    return (
        <section id="contact" className="container mt-5">
            <div className="text-center text-white">
                <h2>Contact</h2>
            </div>
            <div className="d-flex justify-content-center my-5 text-white">

                <form style={{width: '700px'}} action="https://formspree.io/f/meqvekbd"
                    method="POST"
                    onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label htmlFor="email"> Email Address </label>
                        <br />
                        <input className="form-control" id="email" type="email" name="email" />
                        <br />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                        <br />

                        <textarea className="form-control w-100" id="message" name="message"
                        />

                        <ValidationError prefix="Message" field="message" errors={state.errors} />

                    </div>
                    <br />
                    <button type="submit" className="btn btn-danger" disabled={state.submitting}> Submit </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;