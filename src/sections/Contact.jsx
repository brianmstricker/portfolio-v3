import { motion } from "framer-motion";
import InputWithLabel from "../components/InputWithLabel";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { ContactLinks } from "../components/ContactLinks";

const Contact = () => {
 const [loading, setLoading] = useState(false);
 const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
  "g-recaptcha-response": "",
 });
 const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
 };
 function submitDisabled() {
  return !form.name || !form.email || !form.message || loading;
 }
 function clearForm() {
  setForm({ name: "", email: "", message: "", "g-recaptcha-response": "" });
 }
 function getToken() {
  const token = document.querySelector("#captchaResponse").value;
  if (token === "") return setTimeout(getToken, 2000);
  if (token) setForm({ ...form, "g-recaptcha-response": token });
 }
 useEffect(() => {
  getToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);
 async function handleSubmit(e) {
  e.preventDefault();
  try {
   setLoading(true);
   await fetch("https://getform.io/f/94f4545f-8857-40a1-abfc-93fc9bda3836", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
   });
   clearForm();
   setLoading(false);
  } catch (error) {
   console.log(error);
   setLoading(false);
  }
 }
 return (
  <section className="bg-main w-full h-screen" name="contact">
   <motion.div
    className="h-full flex flex-col items-center justify-center max-w-[1200px] mx-auto gap-8 px-4 md:px-24 pt-20"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ ease: "anticipate", duration: 1.5 }}
    viewport={{ once: true }}
   >
    <div>
     <h2 className="text-4xl sm:text-5xl">Contact</h2>
     <div className="w-36 sm:w-48 h-2 mt-1 bg-red-500 rounded-full" />
    </div>
    <div>
     <ContactLinks icons={true} />
    </div>
    <form
     className="flex flex-col gap-4 w-full max-w-md"
     onSubmit={handleSubmit}
    >
     <InputWithLabel
      text="Name"
      name="name"
      required
      value={form.name}
      onChange={handleChange}
     />
     <InputWithLabel
      text="Email"
      name="email"
      type="email"
      required
      value={form.email}
      onChange={handleChange}
     />
     <InputWithLabel
      text="Message"
      name="message"
      required
      value={form.message}
      onChange={handleChange}
     />
     <input type="hidden" id="captchaResponse" name="g-recaptcha-response" />
     <div className="text-xs text-gray-400 w-[80%] mx-auto">
      This site is protected by reCAPTCHA and the Google{" "}
      <a className="underline" href="https://policies.google.com/privacy">
       Privacy Policy
      </a>{" "}
      and{" "}
      <a className="underline" href="https://policies.google.com/terms">
       Terms of Service
      </a>{" "}
      apply.
     </div>
     <button
      type="submit"
      className={
       "px-8 py-3 border-sky-500 border rounded-md mt-4 w-fit self-center transition duration-300 ease-in-out hover:bg-sky-500 hover:drop-shadow-lg flex items-center justify-center" +
       (submitDisabled() ? " opacity-50 cursor-not-allowed" : "")
      }
      disabled={submitDisabled()}
     >
      {!loading ? "Send" : <ClipLoader size={24} color="#fff" />}
     </button>
    </form>
   </motion.div>
  </section>
 );
};
export default Contact;
