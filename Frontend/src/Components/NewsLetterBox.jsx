import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl text-gray-800 font-semibold">
        Subscribe now get 50% off
      </p>
      <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 pt-4 pb-4 ">
        , we bring you unbeatable deals and discounts that you can't resist.
        Whether you're upgrading your wardrobe, enhancing your home, or shopping
        for gifts, our best offers are designed to give you the best value for
        your money
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none  "
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          className="bg-black text-white text-xs px-10 py-4"
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
