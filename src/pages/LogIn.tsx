const LogIn = () => {
  return (
    <div>
      <h1>Log In Page</h1>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          fetch("http://localhost:3010/sign-in", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              email: e.target.email.value,
              password: e.target.password.value,
            }),
          })
            .then((resp) => resp.json())
            .then((data) => {
              if (data.error) {
                alert(data.error);
              } else {
                // signIn(data);
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

        <button>submit</button>
      </form>
    </div>
  );
};

export default LogIn;
