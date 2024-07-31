import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-between px-56 py-14">
      <span className="text-2xl font-bold leading-[32px]">
        Wanna hit up with something ?
      </span>
      <form className="flex gap-4">
        <input
          required
          type="text"
          placeholder="YOUR MESSAGE"
          className="input-custom w-[354px] border border-white bg-transparent px-6 py-4 font-medium outline-textOrange"
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
