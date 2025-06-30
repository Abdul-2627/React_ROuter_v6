import { Form } from "react-router-dom";

export const getContactData=async ({request})=>{
    try {
        const res= await request.formData()
        const data=Object.fromEntries(res)
        console.log(data)
    } catch (error) {
        console.log(error)
    }    
}

export const Contact = () => {
  return (
    <>
     <section className="contact-container">
  <div className="chead-container">
    <h1>Contact Us</h1>
    <p>Let's get in touch with us</p>
  </div>
  <div className="form-wrapper">
    <div className="left-side">
                  <img src="https://client-ui.s3.ap-south-1.amazonaws.com/Website/Images/Hero-Contact-Image.svg" loading="lazy"  alt="About"></img>
    </div>
    <div className="form-container">
      <Form action="/contact" method="POST">
        <div className="mb-1">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="abc@gmail.com"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" />
        </div>
        <div className="mb-4">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            cols="30"
            rows="10"
            autoComplete="off"
            required
          ></textarea>
        </div>
        <button className="cnt-btn" type="submit">Send Message</button>
      </Form>
    </div>
  </div>
</section>

    </>
  );
};
