
import { useNavigate } from "react-router-dom";

export const Login = () => {

  let navigate = useNavigate(); 

  return <>

    <section class="checkout spad">
      <div class="container">
        <div class="checkout__form">
          <h4>Login</h4>
          <form action="#">
            <div class="row">
              <div class="col-lg-8 col-md-6">
                <div class="col-lg-6">
                  <div class="checkout__input">
                    <p>User ID<span>*</span></p>
                    <input type="text" placeholder="Phone No. / Email" required />
                  </div>

                  <div class="checkout__input">
                    <p>Account Password<span>*</span></p>
                    <input type="password" placeholder="pass code" required />
                  </div>

                  <div class="row">
                    <button onClick={() => navigate('/home')} class="site-btn">Login</button>
                    &nbsp;
                    <button onClick={() => navigate('/register')}  class="site-btn">Register</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </>
}