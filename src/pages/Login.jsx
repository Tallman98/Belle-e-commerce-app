import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";

const Login = () => {
  return (
    <section className="md:mt-16 md:mb-[100px] ">
      <Header text="LOGIN" />
      <div className="max-w-xl mx-auto">
        <form className="mt-12">
          <Input text="Email" />
          <Input text="Password" />
          <div className="text-center my-5">
            <Button text="SIGN IN" />
          </div>

          <div className="flex text-xs gap-2 mx-auto justify-center">
            <p className="hover:underline">Forgot your password?</p>
            <p>|</p>
            <p className="hover:underline">Create account</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
