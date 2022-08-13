import './aboutUs.css';


const LocaleHr = () => {
       
    return (      
      <section className="container px-4 py-5 ">

      <div className="aboutus-top"> 
     
      <h1 className="bd-title mb-0" id="content">UPOZNAJTE NAŠ TIM</h1>
      
      <p className="bd-lead"> Svi smo jako različiti. Rođeni smo u različitim gradovima, u različitom vremenu, volimo različitu glazbu, hranu, filmove. Ali imamo nešto što nas sve spaja. To je naša tvrtka. Mi smo jezgra. Mi nismo samo tim, mi smo obitelj. </p>
      
      <button type="button" class="btn btn-warning btn-lg">Kontaktirajte nas</button>

      </div> 



        <div id="map-container-google-1" class="z-depth-1-half map-container">
        <iframe title="Moja Google mapa." src="https://maps.google.com/maps?q=vinkovci&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen></iframe>
        </div>


        <div className="mt-5 conatiner">
            <div className="text-center">
                <h1 className="bd-title mb-0" id="content">KONTAKT</h1> 
                <p className="bd-lead"> Trebate pomoć? Kontaktirajte nas! </p>

            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div className="contact-form">
                    <div className="p-4 rounded shadow-md">
                        <div>
                            <label htmlFor="name" className="form-label">Ime</label>
                            <input type="text" name="name" className="form-control" placeholder="Ime" required />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" name="email" className="form-control" placeholder="Email" required />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="subject" className="form-label">Predmet</label>
                            <input type="text" name="subject" className="form-control" placeholder="Predmet" required />
                        </div>
                        <div className="mt-3 mb-3">
                            <label htmlFor="message" className="form-label">Poruka</label>
                            <textarea name="message" cols="20" rows="6" className="form-control"
                                placeholder="Poruka"></textarea>
                        </div>  
                        <br /> <br />
                        <div className="contact-form__send">    
                            <button type="button" class="btn btn-warning btn-lg">Pošalji poruku</button>  
                        </div>
                    </div>
                         
                </div>                           
            </div>                 
        </div>


      </section>
  
    );
  }
  
  export default LocaleHr;
  
  
