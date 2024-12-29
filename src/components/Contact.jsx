import React from "react";
import { toast } from "react-toastify";
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b82dcb99-74cf-4179-977d-caa717ab27f3");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully")
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult("");
        toast.error(data.message)
      }
    };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Connect
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Real Stories from Those Who Found Home with Us
      </p>
      <form className=" max-w-2xl mx-auto text-gray-600 p-8 shadow-lg rounded-lg border" onSubmit={onSubmit}>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              required
              name="Name"
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              required
              name="Email"
            />
          </div>
        </div>
        <div className="text-left my-6">
          Message
          <textarea
            name="Message"
            placeholder="Message"
            required
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">{result ? result:"Send Message"}</button>
      </form>
    </div>
  );
};

export default Contact;
