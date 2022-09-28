type props = {
  signIn : Function
}

const SignIn = ({signIn} : props) => {
  return (
    <div>
      <h1>Sign In Page</h1>

      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          fetch("http://localhost:3001/sign-up", {
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
        <label htmlFor="">
          email
          <input type="email" name="email" />
        </label>
        <label htmlFor="">
          password
          <input type="password" name="password" />
        </label>
        <label htmlFor="">
          name
          <input type="text" name="name" />
        </label>
        <label htmlFor="">
          number
          <input type="number" name="number" />
        </label>
        <button>submit</button>
      </form>
    </div>
  );
};

export default SignIn;
