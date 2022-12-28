
import { useNavigate } from "react-router-dom";

export const Register = () => {

  let navigate = useNavigate(); 

  return <>
    <section class="checkout spad">
      <div class="container">
        <div class="checkout__form">
          <h4>Register</h4>
          <form action="#">
            <div class="row">
              <div class="col-lg-8 col-md-6">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Fist Name<span>*</span></p>
                      <input type="text" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Last Name<span>*</span></p>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Phone<span>*</span></p>
                      <input type="text" />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="checkout__input">
                      <p>Email<span>*</span></p>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div class="checkout__input">
                  <p>Country<span>*</span></p>
                  <input type="text" />
                </div>
                <div class="checkout__input">
                  <p>Address<span>*</span></p>
                  <input type="text" placeholder="Street Address" class="checkout__input__add" />
                  <input type="text" placeholder="Apartment, suite, unite ect (optinal)" />
                </div>
                <div class="checkout__input">
                  <p>Town/City<span>*</span></p>
                  <input type="text" />
                </div>
                <div class="checkout__input">
                  <p>Country/State<span>*</span></p>
                  <input type="text" />
                </div>
                <div class="checkout__input">
                  <p>Postcode / ZIP<span>*</span></p>
                  <input type="text" />
                </div>
 
                <div class="checkout__input">
                  <p>Account Password<span>*</span></p>
                  <input type="password" />
                </div>

                <button type="submit" onClick={()=> navigate('/login')} class="site-btn">Submit</button>

              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  </>
}