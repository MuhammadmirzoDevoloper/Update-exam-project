import React, { useState, useEffect } from "react";


const App = () => {
  return (
    <div className="    ">
      <div className=" container   mx-auto    justify-between  flex">
        <div className=" mt-11">
          <div className="text_page ">
            <h1 className="text-white text-5xl ">
              Welcome to our <br /> support page!
            </h1>
          </div>
          <p className=" text-gray-500 pt-6">
            We're here to help you with any problems you may be having with{" "}
            <br /> our product.
          </p>
          <img
            src="./src/img/Container (1).png"
            className="mt-11"
            width={"490px "}
            alt=""
          />
        </div>
        <div className="card  mt-11 p-9 bg-black w-[680px]">
          <div className="card-group flex justify-between p-2">
            <div className="card__name">
              <h1 className="text-white p-2">First Name</h1>
              <input
                type="text"
                className="p-2 w-[260px] rounded-md bg-neutral-800"
                placeholder="    Enter First Name"
              />
            </div>
            <div className="card__name">
              <h1 className="text-white p-2">Last Name</h1>
              <input
                className="p-2 w-[260px] rounded-md bg-neutral-800"
                type="text"
                placeholder="    Enter Last Name"
              />
            </div>
          </div>

          <div className="card-group flex justify-between p-2">
            <div className="card__name">
              <h1 className="text-white p-2">First Name</h1>
              <input
                type="text"
                className="p-2 w-[260px] rounded-md bg-neutral-800"
                placeholder="    Enter First Name"
              />
            </div>
            <div className="card__name">
              <h1 className="text-white p-2">Last Name</h1>
              <select name="" className="p-2  rounded-md bg-neutral-800" id="">
                <option value=""></option>
              </select>
              <input
                type="number"
                className="p-2 w-[220px] ml-1 rounded-md bg-neutral-800"
                placeholder="    Enter First Name"
              />
            </div>
          </div>

          <div className="card-group flex justify-between p-2">
            <div className="card__name">
              <h1 className="text-white p-2">Messege</h1>
              <textarea
                className="p-2 w-[590px] rounded-md bg-neutral-800"
                name="message"
                rows="10"
                cols="30"
              >
                Enter Your Messege
              </textarea>
            </div>
          </div>
          <div className="card-group flex justify-between p-2">
            <div className="card__name flex w-[660px]  justify-between">
              <div className="check-class flex ">
                <input type="checkbox" className="  bg-neutral-700" />{" "}
                <h1 className="text-white p-2">
                  I agree with Terms of Use and Privacy Policy
                </h1>
              </div>
              <button className=" p-2 rounded-md  bg-red-500 text-white">
                <p> Send Messege</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="  mx-auto   ">
        <div className=" container mx-auto mt-11">
          <div className=" container items-center justify-between  flex">
            <div className="check-class mt-11 flex  pt-5 text-gray-500 ">
              <h1 className="p-2  text-gray-500 ">
                Got questions? We've got answers! Check out our FAQ section to
                find answers to the most common questions about StreamVibe.
              </h1>
            </div>
            <button className="mt-11 p-5 rounded-md   bg-red-500 text-white">
              <p> Ask a Question</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
