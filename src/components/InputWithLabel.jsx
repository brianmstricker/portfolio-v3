const InputWithLabel = ({
 name,
 text,
 type = "text",
 value,
 onChange,
 required,
}) => {
 return (
  <div className="flex flex-col gap-1 group">
   <label
    htmlFor={name}
    className="relative -bottom-8 group-focus-within:-bottom-0 transition-all duration-300"
   >
    {text}
   </label>
   {name !== "message" ? (
    <input
     type={type}
     name={name}
     id={name}
     value={value}
     onChange={onChange}
     placeholder={text}
     required={required}
     className="bg-main rounded-md py-1.5 px-4 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-sky-500 placeholder:text-gray-400 z-10 !outline-none custom-autofill-class"
    />
   ) : (
    <textarea
     type={type}
     id={name}
     name={name}
     rows={5}
     placeholder={text}
     value={value}
     onChange={onChange}
     className="bg-main rounded-md py-1.5 px-4 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-sky-500 placeholder:text-gray-400 z-10 !outline-none"
    />
   )}
  </div>
 );
};
export default InputWithLabel;
