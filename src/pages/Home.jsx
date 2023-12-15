import Left2 from "../icons/Left2";
import Line from "../icons/Line";
import Right from "../icons/Right";
import Phone from "../icons/Phone";
import Ustun from "../icons/Ustun";
import Left from "../icons/Left";
import axios from "axios";
import { useEffect, useState } from "react";
import NegativeIcon from './../icons/NegativeIcon';
import Positive from './../icons/Positive';

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
          query: searchQuery,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status !== 200) throw new Error("Error");
        setData(response.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [searchQuery]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
          query: searchQuery,
        },
      })
      .then((response) => {
        console.log(response.data.genres);
        if (response.status !== 200) throw new Error("Error");
        setFilteredData(response.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [searchQuery]);

  const handleSearch = () => {
    setData(filteredData);
  };

  return (
    <main className=" bg-neutral-950 ">
      <div className=" bg-neutral-950 p-3 text-white absolute top-9 right-[180px]">
        <input
          className="bg-neutral-950"
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="bg-[url('./img/sub.png')] max-w-[100%]    h-[850px] mt-[-120px] bg-center text-center pt-[825px] ">
        <div className="card container pl-[65px]  z-10 rounded-md pt-2 pb-6 mx-auto grid grid-cols-4 mt-[-520px] gap-7 mb-[150px]">
          {filteredData?.slice(0, 8).map((movie, index) => (
            <div
              key={index}
              className="w-[280px] h-[380px] rounded-md bg-neutral-800  z-10 items-center mt-2 p-11 justify-between"            >
              <img
                className="w-[200px] h-[280px]"
                src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt=""
              />
              <p className="text-white">{movie.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" bg-center text-center z-0 ">
        {" "}
        <h1 className="text-5xl mt-[-40px] text-white">
          The Best Streaming Experience
        </h1>
        <p className=" mb-3 mx-auto text-zinc-800 mt-[14px] w-[900px]">
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
        <button className="border p-3 bg-red-500 text-white">
          Start Watching Now
        </button>
      </div>
      <div className=" container mx-auto mt-[300px] p-6 mb-[100px]">
        <div class="bg-[url('/src/img/Sub Container (1).png')]"></div>
        <div className=" flex items-center justify-between mb-[80px]">
          <div>
            <h1 className=" font-bold text-2xl mb-2 text-white">
              Explore our wide variety of categories
            </h1>
            <p className="text-gray-500">
              Whether you're looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new
            </p>
          </div>
          <div className=" max-[375px]:hidden flex items-center justify-center gap-1">
            <button>
              <Left />
            </button>
            <Ustun />
            <button>
              <Right />
            </button>
          </div>
        </div>
        <div className="flex card items-center   justify-between mx-auto   mb-[150px]">
          {data.slice(0, 5).map((item) => (
            <div
              key={item.id}
              className="w-[280px] h-[380px] rounded-md bg-neutral-800  z-10 items-center mt-2 p-11 justify-between text-white"            >
              <img
                className="w-[200px] mx-auto h-[280px]"
                src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                alt=""
              />
              <p className="mx-auto text-">{item.title}</p>
            </div>
          ))}
        </div>

        <div>
          <h1 className="font-bold text-2xl mb-2 text-white">
            We Provide you streaming experience across various devices.
          </h1>
          <p className="text-gray-500 max-w-5xl">
            With StreamVibe, you can enjoy your favorite movies and TV shows
            anytime, anywhere. Our platform is designed to be compatible with a
            wide range of devices, ensuring that you never miss a moment of
            entertainment.
          </p>
        </div>
        <div className="w-full  grid grid-cols-3 grid-rows-2  gap-[30px]  mt-[80px] mb-[150px] max-lg:grid-cols-2">
          <div className="border border-black-15 bg-gradient-to-tr from-80% from-[#0F0F0F]  to-[#e5000080]   p-[50px]  rounded-xl">
            <div className="flex items-center justify-start gap-4 mb-4">
              <span className="p-3 bg-zinc-950 rounded-xl">
                <Phone />
              </span>
              <p className=" font-bold text-2xl  text-white">Smartphones</p>
            </div>
            <p className="text-gray-500">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="rounded-md border border-black-15 bg-gradient-to-tr from-80% from-[#0F0F0F]  to-[#e5000080]  p-[50px]  ">
            <div className="flex items-center justify-start gap-4 mb-4">
              <span className="p-3 bg-zinc-950 rounded-xl">
                <Phone />
              </span>
              <p className="text-white font-bold text-2xl">Tablet</p>
            </div>
            <p className="  text-gray-500">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="border border-black-15 bg-gradient-to-tr from-80% from-[#0F0F0F]  to-[#e5000080]   p-[50px]  rounded-xl">
            <div className="flex items-center justify-start gap-4 mb-4">
              <span className="p-3 bg-zinc-950 rounded-xl">
                <Phone />
              </span>
              <p className="text-white font-bold text-2xl">Smart TV</p>
            </div>
            <p className="text-gray-500">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="border border-black-15 bg-gradient-to-tr from-80% from-[#0F0F0F]  to-[#e5000080]   p-[50px]  rounded-xl">
            <div className="flex items-center justify-start gap-4 mb-4">
              <span className="p-3 bg-zinc-950 rounded-xl">
                <Phone />
              </span>
              <p className="text-white font-bold text-2xl ">Laptops</p>
            </div>
            <p className="text-gray-500">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="border border-black-15 bg-gradient-to-tr from-80% from-[#0F0F0F]  to-[#e5000080]   p-[50px]  rounded-xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="p-3 bg-zinc-950 rounded-xl">
                <Phone />
              </span>
              <p className="text-white font-bold text-2xl">Gaming Consoles</p>
            </div>
            <p className="text-gray-500">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="border border-black-15 bg-gradient-to-tr from-80% from-[#0F0F0F]  to-[#e5000080]   p-[50px]  rounded-xl">
            <div className="flex items-center justify-start gap-4 mb-4">
              <span className="p-3 bg-zinc-950 rounded-xl">
                <Phone />
              </span>
              <p className="text-white font-bold text-2xl">Smartphones</p>
            </div>
            <p className="text-gray-500">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between min-[375px]: flex-wrap">
          <div>
            <h1 className=" font-semibold text-3xl text-white mb-3">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-500 min-[375px]:mt-3">
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <div>
            <button className=" bg-red-600 py-4 px-4 rounded-lg text-white max-[374px]:mt-5">
              Ask a Question
            </button>
          </div>
        </div>
        <span className="flex items-center justify-between">
          <div>
            <div className="  flex items-center justify-start py-8 gap-5 bg-neutral-950  ">
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
              <span className="text-white">
                <NegativeIcon />
              </span>
            </div>
            <Line />
            <div className="  flex items-center justify-start py-8 gap-5 bg-neutral-950 ">
              <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                02
              </span>
              <span>
                <h1 className="text-white mr-[300px]">How much does StreamVibe cost?</h1>
                <p className="text-white hidden">
                  StreamVibe is a streaming service that allows you to watch
                  movies <br />
                  and shows on demand.
                </p>
              </span>
              <span className="text-white">
                <Positive />
              </span>
            </div>
            <Line />
            <div className="  flex items-center justify-start py-8 gap-5 bg-neutral-950 ">
              <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                03
              </span>
              <span>
                <h1 className="text-white mr-[300px]">What content is available on StreamVibe?</h1>
                <p className="text-white hidden">
                  StreamVibe is a streaming service that allows you to watch
                  movies <br />
                  and shows on demand.
                </p>
              </span>
              <span className="text-white"> <Positive /></span>
            </div>
            <Line />
            <div className="  flex items-center justify-start py-8 gap-5 bg-neutral-950 ">
              <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                04
              </span>
              <span>
                <h1 className="text-white mr-[300px]">How can I watch StreamVibe?</h1>
                <p className="text-white hidden">
                  StreamVibe is a streaming service that allows you to watch
                  movies <br />
                  and shows on demand.
                </p>
              </span>
              <span className="text-white"> <Positive /></span>
            </div>
          </div>
          <div>
            <div className="  flex items-center justify-start py-8 gap-5 bg-neutral-950 ">
              <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                05
              </span>
              <span>
                <h1 className="text-white mr-[300px]">How do I sign up for StreamVibe?</h1>
                <p className="text-white hidden">
                  StreamVibe is a streaming service that allows you to watch
                  movies <br />
                  and shows on demand.
                </p>
              </span>
              <span className="text-white"> <Positive /></span>
            </div>
            <Line />
            <div className="  flex items-center justify-start py-8 gap-5 bg-neutral-950 ">
              <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                06
              </span>
              <span>
                <h1 className="text-white mr-[300px]">What is the StreamVibe free trial?</h1>
                <p className="text-white hidden">
                  StreamVibe is a streaming service that allows you to watch
                  movies <br />
                  and shows on demand.
                </p>
              </span>
              <span className="text-white"> <Positive /></span>
            </div>
            <Line />
            <div className="  flex items-center justify-start py-8 gap-5 bg-neutral-950 ">
              <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                07
              </span>
              <span>
                <h1 className="text-white mr-[300px]">How do I contact StreamVibe customer support?</h1>
                <p className="text-white hidden">
                  StreamVibe is a streaming service that allows you to watch
                  movies <br />
                  and shows on demand.
                </p>
              </span>
              <span className="text-white"> <Positive /></span>
            </div>
            <Line />
            <div className="  flex items-center justify-start py-8 gap-5 bg-neutral-950 ">
              <span className="p-3 bg-neutral-900 border rounded-xl text-white">
                08
              </span>
              <span>
                <h1 className="text-white mr-[300px]">What are the StreamVibe payment methods?</h1>
                <p className="text-white hidden">
                  StreamVibe is a streaming service that allows you to watch
                  movies <br />
                  and shows on demand.
                </p>
              </span>
              <span className="text-white"> <Positive /></span>
            </div>
          </div>
        </span>
        <div className="container text-white  mt-[100px]">
          <div className="card-group  max-w-sm[576px;] flex mt-11  justify-between ">
            <div className="card  bg-neutral-800 rounded-md p-5 w-[320px]">
              <div className="card-top  ">
                <h1 className="text-2xl">Basic Plan</h1>
                <p className="text-neutral-400 py-3">
                  Enjoy an extensive library of movies and shows, featuring a
                  range of content, including recently released titles.
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
                  Enjoy an extensive library of movies and shows, featuring a
                  range of content, including recently released titles.
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
                  Enjoy an extensive library of movies and shows, featuring a
                  range of content, including recently released titles.
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
        </div>
        <div class="bg-[url('./src/img/BgImage.svg')  w-96 h-36 ]"></div>
      </div>
    </main>
  );
}

export default Home;
