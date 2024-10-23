import React, { useState } from 'react';

function ContactForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
      });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);


     // Function to validate form data
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
    if (!formData.subject.trim()) {
        newErrors.subject = "Subject is required";
      }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      // If no errors, form is successfully submitted
      setSubmitted(true);
      setErrors({});
      // Handle form data submission (e.g., API call)
      console.log("Form submitted successfully:", formData);
    } else {
      // If there are errors, set the error state
      setErrors(formErrors);
      setSubmitted(false);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  return (
    <>
        <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" placeholder='Your Name' className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}/>
                                            <label for="name">Your Name</label>
                                            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject"/>
                                            <label for="subject">Subject</label>
                                            {errors.subject && <p style={{ color: "red" }}>{errors.subject}</p>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>

                                {submitted && <p style={{ color: "green" }}>Form submitted successfully!</p>}
                            </form>
                           
    </>
  )
}

export default ContactForm