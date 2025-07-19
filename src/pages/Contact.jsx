import './Contact.css'
function Contact(){
    return(
        <><br /><br /><br />
        <div className='container'>
        <div>
            <h1>Get In Touch!</h1>
        <div class="form-container">
            
            <form class="row g-3">
                <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-6">
                    <label for="inputFullname4" class="form-label">Fullname</label>
                    <input type="text" class="form-control" id="inputFullname4"/>
                </div>
                <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>

                <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity"/>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        </div>

        <div className="maps">
            <h1>Locate Us!</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019295344973!2d-122.41941568468155!3d37.774929279759246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815c0c7f2fcd%3A0x4cd5e088e15a00d4!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    </div> <br /><br /><br />
        </>
    );
}
export default Contact