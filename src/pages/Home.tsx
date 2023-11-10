import React, { useEffect, useCallback, useState } from "react";
import { Navbar, ProductCard } from "../components";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import _ from "lodash";
type Props = {};
interface Data {}
const Home = (props: Props) => {
  const [baseUrl, setBaseUrl] = useState(
    "https://free-to-play-games-database.p.rapidapi.com/api/games"
  );
  const [genres, setGenres] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(baseUrl, {
        headers: {
          "X-RapidAPI-Key":
            "6ca948ceb7msh426f11ced47c1b7p13741cjsnf6f65942f5df",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      });
      let sorterResult = _.sortBy(result.data, (r) => r.genre);
      let tempGenres = [];
      let lastGenreAdded = "";
      for (let i = 0; i < sorterResult.length; i++) {
        if (sorterResult[i].genre !== lastGenreAdded) {
          tempGenres.push(sorterResult[i].genre);
          lastGenreAdded = sorterResult[i].genre;
        }
      }

      setGenres(tempGenres);
      setData(result.data);
      setDisplayedData(result.data);
    } catch (error) {
      toast.error("Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  const handleGenreChange = useCallback(
    (e: any) => {
      if (e.target.value !== "") {
        setDisplayedData(data.filter((r: any) => r.genre === e.target.value));
      } else {
        setDisplayedData(data);
      }
    },
    [data, displayedData]
  );

  return (
    <div className="bg-[#EDF1F3]">
      <Toaster />
      <Navbar />
      <section
        style={{
          backgroundImage: "url('/images/bg-hero.png')",
        }}
        className="relative wrapper  text-white bg-cover bg-no-repeat"
      >
        <div className="absolute w-full opacity-60 h-full bg-gradient-to-r  to-[#55AEA9] from-[#1B568C]"></div>

        <div className="z-[20] flex-col gap-6 h-[540px] flex justify-center items-center">
          <h1 className="text-3xl font-bold ">Pilih Game Favorite Kalian</h1>
          <p className="text-[16px] text-center  max-w-[336px]">
            Shortbread cookie tootsie roll sugar plum cheesecake pudding
            croissant apple pie. Lollipop macaroon lollipop croissant chocolate
            cake croissant fruitcake brownie jelly-o.
          </p>
          <button className="btn bg-[#0884F5]">Sign Up For Free Account</button>
        </div>
      </section>

      <section className="wrapper section-break">
        <div className="container">
          <div className="flex justify-between items-center">
            <h4 className="text-2xl">Game Terbaru</h4>

            <select
              name="genre"
              id="genre"
              className="py-3 px-4 border border-[#C9D2DA]"
              onChange={handleGenreChange}
            >
              <option value="">Semua Genre</option>
              {genres.map((r: string, i: number) => {
                return (
                  <option key={`genre-${i}`} value={r}>
                    {r}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[34px] mt-[46px]">
            {displayedData.map((r: any, i: number) => {
              return (
                <ProductCard
                  genre={r.genre}
                  link={r.freetogame_profile_url}
                  img={r.thumbnail}
                  key={"product-" + i}
                  title={r.title}
                  desc={r.short_description}
                  platform={r.platform}
                  releaseDate={r.release_date}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
