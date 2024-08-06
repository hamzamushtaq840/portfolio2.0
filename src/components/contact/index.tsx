const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-between px-8 pb-24 lg:flex-row lg:px-56"
    >
      <span className="text-2xl font-bold leading-[32px]">
        Wanna hit up with something ?
      </span>
      <form className="mt-10 flex w-full flex-col gap-6 lg:mt-0 lg:w-auto lg:flex-row lg:gap-4">
        <input
          required
          type="text"
          placeholder="YOUR MESSAGE"
          className="input-custom w-full border border-white bg-transparent px-6 py-4 font-medium outline-textOrange lg:w-[354px]"
        />
        <button
          className="bg-textOrange px-6 py-4 text-lg font-semibold"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
