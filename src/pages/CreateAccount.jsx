import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";

const CreateAccount = () => {
  return (
    <section className="md:mt-16 md:mb-[100px] ">
      <Header text="CREATE AN ACCOUNT" />
      <div className="max-w-xl mx-auto">
        <form className="mt-12">
          <Input text="First Name" />
          <Input text="Last Name" />
          <Input text="Email" />
          <Input text="Password" />
          <div className="text-center my-5">
            <Button text="Create" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateAccount;
