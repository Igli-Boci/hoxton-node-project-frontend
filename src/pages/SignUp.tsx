import "../styles/login.css";
import "../../node_modules/mdb-ui-kit/css/mdb.min.css";
type props = {
  signIn: Function;
};
const SignUp = ({ signIn }: props) => {
  const styles = {
    firstStyle: {
      backgroundColor: "#eee",
    },
    secondStyle: {
      width: "185px",
    },
  };
  return (
    <section
      className="h-100 gradient-form"
      id="section"
      style={styles.firstStyle}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={styles.secondStyle}
                        alt="logo"
                      />
                      <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                    </div>

                    <form
                      action=""
                      onSubmit={(e) => {
                        console.log(
                          e.target.email.value,
                          e.target.password.value,
                          e.target.name.value,
                          e.target.number.value
                        );
                        e.preventDefault();
                        fetch("http://localhost:3010/sign-up", {
                          method: "POST",
                          headers: { "Content-type": "application/json" },
                          body: JSON.stringify({
                            email: e.target.email.value,
                            password: e.target.password.value,
                            name: e.target.name.value,
                            number: e.target.number.value,
                          }),
                        })
                          .then((resp) => resp.json())
                          .then((data) => {
                            if (data.error) {
                              alert(data.error);
                            } else {
                              signIn(data);
                            }
                          });
                      }}
                    >
                      <p>Please create anew account</p>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example00"
                          name="name"
                          className="form-control"
                          placeholder="Username"
                          required
                        />
                        <label className="form-label" htmlFor="form2Example00">
                          Username
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="form2Example11"
                          name="email"
                          className="form-control"
                          placeholder="Phone number or email address"
                          required
                        />
                        <label className="form-label" htmlFor="form2Example11">
                          Email
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form2Example22"
                          name="password"
                          className="form-control"
                          required
                        />
                        <label className="form-label" htmlFor="form2Example22">
                          Password
                        </label>
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          id="form2Example44"
                          name="number"
                          className="form-control"
                          placeholder="123-45-678"
                          //pattern="[+]{1}-[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{3}"
                          required
                        ></input>
                        <label className="form-label" htmlFor="form2Example44">
                          Phone number
                        </label>
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3">
                          Sign Up
                        </button>
                        <a className="text-muted" href="#!">
                          Forgot password?
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
