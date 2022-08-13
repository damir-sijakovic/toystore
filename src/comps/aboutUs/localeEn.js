import './aboutUs.css';

const LocaleEn = () => {
       
    return (      
      <section className="container px-4 py-5 ">

      <div className="aboutus-top"> 
     
      <h1 className="bd-title mb-0" id="content">MEET OUR TEAM</h1>
      
      <p className="bd-lead"> We are all very different. We were born in different cities, at different times, we love different music, food, movies. But we have something that unites us all. It is our company. We are its heart. We are not just a team, we are a family. </p>
      
      <button type="button" class="btn btn-warning btn-lg">Contact Us</button>

      </div> 



        <div id="map-container-google-1" class="z-depth-1-half map-container">
        <iframe title="My google map." src="https://maps.google.com/maps?q=vinkovci&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
        </div>


        <div className="mt-5 conatiner">
            <div className="text-center">
                <h1 className="bd-title mb-0" id="content">CONTACT</h1> 
                <p className="bd-lead"> Need help? Contact us! </p>

            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div className="contact-form">
                    <div className="p-4 rounded shadow-md">
                        <div>
                            <label htmlFor="name" className="form-label">Your Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="email" className="form-label">Your Email</label>
                            <input type="text" name="email" className="form-control" placeholder="Your Email" required />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input type="text" name="subject" className="form-control" placeholder="Subject" required />
                        </div>
                        <div className="mt-3 mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea name="message" cols="20" rows="6" className="form-control"
                                placeholder="message"></textarea>
                        </div>  
                        <br /> <br />
                        <div className="contact-form__send">    
                            <button type="button" class="btn btn-warning btn-lg">Send Message</button>  
                        </div>
                    </div>
                         
                </div>                           
            </div>                 
        </div>


      </section>
  
    );
  }
  
  export default LocaleEn;
  
  
