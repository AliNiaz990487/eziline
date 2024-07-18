import PawText from '../ui/PawText/PawText';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="row w-100 ">
        <div className="col-md-6 bg-primary text-white p-5">
          <h3 className='m-5 fs-1 text-muted'>Contact Form</h3>
          <form>
            <div className="row m-5 gap-5">
              <div className="col p-0">
                <label htmlFor="firstName" className="form-label col-form-label-lg">First Name</label>
                <input type="text" className="form-control form-control-lg" id="firstName" placeholder="First Name" />
              </div>
              <div className="col p-0">
                <label htmlFor="lastName" className="form-label col-form-label-lg">Last Name</label>
                <input type="text" className="form-control form-control-lg" id="lastName" placeholder="Last Name" />
              </div>
            </div>
            <div className="m-5">
              <label htmlFor="email" className="form-label col-form-label-lg">Email</label>
              <input type="email" className="form-control form-control-lg" id="email" placeholder="Email" />
            </div>
            <div className="m-5">
              <label htmlFor="subject" className="form-label col-form-label-lg">Subject</label>
              <input type="text" className="form-control form-control-lg" id="subject" placeholder="Subject" />
            </div>
            <div className="m-5">
              <label htmlFor="message" className="form-label col-form-label-lg">Message</label>
              <textarea className="form-control form-control-lg" id="message" rows="4" placeholder="Write your notes or questions here..."></textarea>
            </div>
            <button type="submit" className="btn btn-dark contact-form-btn m-5">Send Message</button>
          </form>
        </div>

        <div className="p-5 col-md-6 bg-secondary text-white contact">
          <div className="p-5 m-5 fs-2">
            <PawText heading="Contact US"/>
            <div className="pt-5 m-5">
              <p>Address:</p> 
              <p className='text-muted'>Melbourne St, South Brisbane 4101, Australia</p>
            </div>
            <div className="m-5">
              <p>Phone:</p> 
              <p className='text-muted'>+(000) 123 4567 89</p>
            </div>
            <div className="m-5">
              <p>Email:</p> 
              <p className='text-muted'>info@yourdomain.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
