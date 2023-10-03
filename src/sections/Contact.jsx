import { motion } from "framer-motion";
import InputWithLabel from "../components/InputWithLabel";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const Contact = () => {
 const [loading, setLoading] = useState(false);
 const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
 });
 const handleChange = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
 };
 function submitDisabled() {
  return !form.name || !form.email || !form.message || loading;
 }
 function clearForm() {
  setForm({ name: "", email: "", message: "" });
 }
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
    className="h-full flex flex-col items-center justify-center max-w-[1200px] mx-auto gap-16 px-4 md:px-24"
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ ease: "anticipate", duration: 1.5 }}
    viewport={{ once: true }}
   >
    <div>
     <h1 className="text-5xl">Contact</h1>
     <div className="w-48 h-2 mt-1 bg-red-500 rounded-full" />
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
