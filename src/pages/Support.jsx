import Line from "../icons/Line";

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
              <h1 className="text-white p-2">Email</h1>
              <input
                type="email"
                className="p-2 w-[260px] rounded-md bg-neutral-800"
                placeholder="Enter your Email"
              />
            </div>
            <div className="card__name">
              <h1 className="text-white p-2">Phone Number</h1>
              <select name="" className="p-2  rounded-md bg-neutral-800" id="">
                <option value="Uzbekistan" selected disabled>
                  States
                </option>
                <option value="Uzbekistan">UZB</option>
                <option value="Uzbekistan">AR</option>
                <option value="Uzbekistan">USA</option>
                <option value="Uzbekistan">AU</option>
                <option value="Uzbekistan">AO</option>
                <option value="Uzbekistan">IRN</option>
                <option value="Uzbekistan">NI</option>
                <option value="Uzbekistan">MA</option>
                <option value="Uzbekistan">LY</option>
                <option value="Uzbekistan">IZ</option>
                <option value="Uzbekistan">EI</option>
                <option value="Uzbekistan">IN</option>
                <option value="Uzbekistan">HR</option>
                <option value="Uzbekistan">ID</option>
                <option value="Uzbekistan">De</option>
                <option value="Uzbekistan">IRN</option>
                <option value="Uzbekistan">PK</option>
                <option value="Uzbekistan">KW</option>
                <option value="Uzbekistan">RUS</option>
                <option value="Uzbekistan">KG</option>
                <option value="Uzbekistan">KAZ</option>
                <option value="Uzbekistan">SA</option>
              </select>
              <input
                type="number"
                className="p-2 w-[220px] ml-1 rounded-md bg-neutral-800"
                placeholder="   Enter Phone Number"
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
              ></textarea>
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
          <span className="flex items-center justify-between">
            <div>
              <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                  01
                </span>
                <span>
                  <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
                  <p className="text-white hidden">
                    StreamVibe is a streaming service that allows you to watch
                    movies <br />
                    and shows on demand.
                  </p>
                </span>
                <span className="text-white">--</span>
              </div>
              <Line />
              <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                  02
                </span>
                <span>
                  <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
                  <p className="text-white hidden">
                    StreamVibe is a streaming service that allows you to watch
                    movies <br />
                    and shows on demand.
                  </p>
                </span>
                <span className="text-white">--</span>
              </div>
              <Line />
              <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                  03
                </span>
                <span>
                  <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
                  <p className="text-white hidden">
                    StreamVibe is a streaming service that allows you to watch
                    movies <br />
                    and shows on demand.
                  </p>
                </span>
                <span className="text-white">--</span>
              </div>
              <Line />
              <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                  04
                </span>
                <span>
                  <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
                  <p className="text-white hidden">
                    StreamVibe is a streaming service that allows you to watch
                    movies <br />
                    and shows on demand.
                  </p>
                </span>
                <span className="text-white">--</span>
              </div>
            </div>
            <div>
              <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                  05
                </span>
                <span>
                  <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
                  <p className="text-white hidden">
                    StreamVibe is a streaming service that allows you to watch
                    movies <br />
                    and shows on demand.
                  </p>
                </span>
                <span className="text-white">--</span>
              </div>
              <Line />
              <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                  06
                </span>
                <span>
                  <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
                  <p className="text-white hidden">
                    StreamVibe is a streaming service that allows you to watch
                    movies <br />
                    and shows on demand.
                  </p>
                </span>
                <span className="text-white">--</span>
              </div>
              <Line />
              <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                  07
                </span>
                <span>
                  <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
                  <p className="text-white hidden">
                    StreamVibe is a streaming service that allows you to watch
                    movies <br />
                    and shows on demand.
                  </p>
                </span>
                <span className="text-white">--</span>
              </div>
              <Line />
              <div className="  flex items-center justify-start p-8 gap-5 bg-neutral-950 ">
                <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                  08
                </span>
                <span>
                  <h1 className="text-white mr-[300px]">What is StreamVibe?</h1>
                  <p className="text-white hidden">
                    StreamVibe is a streaming service that allows you to watch
                    movies <br />
                    and shows on demand.
                  </p>
                </span>
                <span className="text-white">--</span>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
