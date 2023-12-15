import React from "react";

const follow = () => {
  return (
    <div className="container mx-auto text-white  p-11">
      <div className="  ">
        <h1 className="text-3xl">Choose the plan that's right for you</h1>
        <div className="start-top flex justify-between items-center">
          <p className=" text-neutral-600">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
          <div className="left flex p-2 rounded-md border border-gray-600 bg-black w-[150px] ">
            <button className=" bg-black  hover:bg-gray-600 p-2 rounded-md">
              Monthly
            </button>
            <button className=" bg-black  hover:bg-gray-600 p-2 rounded-md">
              Yearly
            </button>
          </div>
        </div>
      </div>
      <div className="card-group  max-w-sm[576px;] flex mt-11  justify-between ">
        <div className="card  bg-neutral-800 rounded-md p-5 w-[320px]">
          <div className="card-top  ">
            <h1 className="text-2xl">Basic Plan</h1>
            <p className="text-neutral-400 py-3">
              Enjoy an extensive library of movies and shows, featuring a range
              of content, including recently released titles.
            </p>
          </div>
          <div className="card-body text-neutral-400 py-3">
            <span className="text-2xl text-white">$9.99</span>/month
          </div>
          <div className="btn-group flex">
            <button className="p-4 bg-neutral-700 rounded-md">
              Start Free Trial
            </button>
            <button className="p-4 bg-red-600 ml-5 rounded-md">
              Choose Plan
            </button>
          </div>
        </div>
        <div className="card  bg-neutral-800 rounded-md p-5 w-[320px]">
          <div className="card-top  ">
            <h1 className="text-2xl">Standard Plan</h1>
            <p className="text-neutral-400 py-3">
              Enjoy an extensive library of movies and shows, featuring a range
              of content, including recently released titles.
            </p>
          </div>
          <div className="card-body text-neutral-400 py-3">
            <span className="text-2xl text-white">$12.99</span>/month
          </div>
          <div className="btn-group flex">
            <button className="p-4 bg-neutral-700 rounded-md">
              Start Free Trial
            </button>
            <button className="p-4 bg-red-600 ml-5 rounded-md">
              Choose Plan
            </button>
          </div>
        </div>
        <div className="card  bg-neutral-800 rounded-md p-5 w-[320px]">
          <div className="card-top  ">
            <h1 className="text-2xl">Premium Plan</h1>
            <p className="text-neutral-400 py-3">
              Enjoy an extensive library of movies and shows, featuring a range
              of content, including recently released titles.
            </p>
          </div>
          <div className="card-body text-neutral-400 py-3">
            <span className="text-2xl text-white">$14.99</span>/month
          </div>
          <div className="btn-group flex">
            <button className="p-4 bg-neutral-700 rounded-md">
              Start Free Trial
            </button>
            <button className="p-4 bg-red-600 ml-5 rounded-md">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
      <div className="img mt-24">
        <img src="./src/img/Sub Container (2).png" alt="" />
      </div>
    </div>
  );
};

export default follow;
