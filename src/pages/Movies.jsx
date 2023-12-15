import { useEffect, useState } from "react";

import axios from "axios";
import Left from "../icons/Left";
import Ustun from "../icons/Ustun";
import Right from "../icons/Right";
import Left2 from "../icons/Left2";

function Support() {
  const [genres, setGenres] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const [data1, setData2] = useState([]);
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
        setSearch(response.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [searchQuery]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status !== 200) throw new Error("Error");
        setData2(response.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
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
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
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
  }, []);

  useEffect(() => {
    fetchGenres("https://api.themoviedb.org/3/genre/movie/list");
    fetchTopRatedMovies("https://api.themoviedb.org/3/movie/top_rated");
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/genre/movie/list",
        {
          params: {
            api_key: "9c0f18ec8895c6672d133e4252168f57",
          },
        },
      );
      console.log(response);
      setGenres(response.data.genres);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTopRatedMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          params: {
            api_key: "9c0f18ec8895c6672d133e4252168f57",
          },
        },
      );
      console.log(response);
      setTopRatedMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="bg-[#141414]">
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
      <div className=" container mx-auto  pt-11">
        <div className="bg-[url('./img/bg.png')] max-w-[1500px] h-[830px] bg-center mb-[200px]">
          <div className="card container  pl-[65px] rounded-md pt-2 pb-6 mx-auto grid grid-cols-4 gap-7 mb-[150px]">
            {filteredData?.slice(0, 8).map((movie, index) => (
              <div
                key={index}
                className="w-[280px] h-[380px] rounded-md bg-neutral-800  z-10 items-center mt-2 p-11 justify-between"
              >
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

        <div className="movie relative border   p-[50px] mb-[130px]">
          <button className=" bg-[#E50000] px-6 py-2 absolute -top-4 text-white rounded-md ">
            Movies
          </button>
          <span className="card1 ">
            <div className=" flex item-center justify-between mb-[50px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Our Genres
                </h1>
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
            <div className="flex   justify-between">
              {data.slice(0, 5).map((item) => (
                <div key={item.id} className="bg-neutral-800 p-5 rounded-md">
                  <img
                    className="w-[200px] h-[250px]"
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                    alt=""
                  />
                  <div className="flex justify-between text-white mx-auto w-[190px] items-center">
                    <p>{item.title}</p>{" "}
                    <span className=" ">
                      <Left2 />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </span>
          <span className="card2">
            <div className=" flex items-center justify-between mb-[50px] mt-[90px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Popular Top 10 In Genres
                </h1>
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
            <div className="flex   justify-between">
              {data.slice(5, 10).map((item) => (
                <div key={item.id} className="bg-neutral-800 p-5 rounded-md">
                  <img
                    className="w-[200px] h-[250px]"
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                    alt=""
                  />
                  <div className="flex justify-between text-white mx-auto w-[190px] items-center">
                    <p>{item.title}</p>{" "}
                    <span className=" ">
                      <Left2 />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </span>
          <span className="card3">
            <div className=" flex items-center justify-between mb-[50px] mt-[90px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Our Genres
                </h1>
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
            <div className="flex   justify-between">
              {data.slice(10, 15).map((item) => (
                <div key={item.id} className="bg-neutral-800 p-5 rounded-md">
                  <img
                    className="w-[200px] h-[250px]"
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                    alt=""
                  />
                  <div className="flex justify-between text-white mx-auto w-[190px] items-center">
                    <p>{item.title}</p>{" "}
                    <span className=" ">
                      <Left2 />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </span>
          <span className="card4">
            <div className=" flex items-center justify-between mb-[50px] mt-[90px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Must - Watch Shows
                </h1>
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
            <div className="flex   justify-between">
              {data.slice(15, 20).map((item) => (
                <div key={item.id} className="bg-neutral-800 p-5 rounded-md">
                  <img
                    className="w-[200px] h-[250px]"
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                    alt=""
                  />
                  <div className="flex justify-between text-white mx-auto w-[190px] items-center">
                    <p>{item.title}</p>{" "}
                    <span className=" ">
                      <Left2 />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </span>
          <span className="card5">
            <div className=" flex items-center justify-between mb-[50px] mt-[90px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Trending Now
                </h1>
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
            <div className="flex   justify-between">
              {data1.slice(0, 5).map((item) => (
                <div key={item.id} className="bg-neutral-800 p-5 rounded-md">
                  <img
                    className="w-[200px] h-[250px]"
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                    alt=""
                  />
                  <div className="flex justify-between text-white mx-auto w-[190px] items-center">
                    <p>{item.title}</p>{" "}
                    <span className=" ">
                      <Left2 />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </span>
        </div>
        <div className="movie relative border  p-[50px]">
          <button className=" bg-[#E50000] px-6 py-2 absolute -top-4 text-white rounded-md ">
            Movies
          </button>
          <span className="card1">
            <div className=" flex items-center justify-between mb-[50px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  New Releases
                </h1>
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
            <div className="flex   justify-between">
              {data1.slice(5, 10).map((item) => (
                <div key={item.id} className="bg-neutral-800 p-5 rounded-md">
                  <img
                    className="w-[200px] h-[250px]"
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                    alt=""
                  />
                  <div className="flex justify-between text-white mx-auto w-[190px] items-center">
                    <p>{item.title}</p>{" "}
                    <span className=" ">
                      <Left2 />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </span>
          <span className="card2">
            <div className=" flex items-center justify-between mb-[50px] mt-[90px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Must - Watch Movies
                </h1>
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
            <div className="flex   justify-between">
              {data1.slice(10, 15).map((item) => (
                <div key={item.id} className="bg-neutral-800 p-5 rounded-md">
                  <img
                    className="w-[200px] h-[250px]"
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                    alt=""
                  />
                  <div className="flex justify-between text-white mx-auto w-[190px] items-center">
                    <p>{item.title}</p>{" "}
                    <span className=" ">
                      <Left2 />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </span>
          <span className="card3">
            <div className=" flex items-center justify-between mb-[50px] mt-[90px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Popular Top 10 In Genres
                </h1>
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
            <div className="flex   justify-between">
              {data1.slice(7, 12).map((item) => (
                <div key={item.id} className="bg-neutral-800 p-5 rounded-md">
                  <img
                    className="w-[200px] h-[250px]"
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                    alt=""
                  />
                  <div className="flex justify-between text-white mx-auto w-[190px] items-center">
                    <p>{item.title}</p>{" "}
                    <span className=" ">
                      <Left2 />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </span>
          <span className="card4">
            <div className=" flex items-center justify-between mb-[50px] mt-[90px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  Trending Shows Now
                </h1>
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
            <div className="flex   justify-between">
              {data1.slice(15, 20).map((item) => (
                <div key={item.id} className="bg-neutral-800 p-5 rounded-md">
                  <img
                    className="w-[200px] h-[250px]"
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                    alt=""
                  />
                  <div className="flex justify-between text-white mx-auto w-[190px] items-center">
                    <p>{item.title}</p>{" "}
                    <span className=" ">
                      <Left2 />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </span>
          <span className="card5">
            <div className=" flex items-center justify-between mb-[50px] mt-[90px] ">
              <div>
                <h1 className=" font-bold text-2xl mb-2 text-white">
                  New Released Shows
                </h1>
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
            <div className="flex   justify-between">
              {data1.slice(4, 9).map((item) => (
                <div key={item.id} className="bg-neutral-800 p-5 rounded-md">
                  <img
                    className="w-[200px] h-[250px]"
                    src={`https://image.tmdb.org/t/p/w220_and_h330_face${item.poster_path}`}
                    alt="https://www.instagram.com/malikovoff/"
                  />
                  <div className="flex justify-between text-white mx-auto w-[190px] items-center">
                    <p>{item.title}</p>{" "}
                    <span className=" ">
                      <Left2 />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </span>
        </div>
      </div>
    </main>
  );
}

export default Support;
