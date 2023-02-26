import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import Layout from "../components/Layout";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

import { MoviesType } from "../Utils/types/movie";
import Loading from "../components/Loading";
import DetailMovie from "./DetailMovie";

interface ResultType {
  // ini adalah kumpulan beberapa data yang akan diambil untuk component card
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  datas: []; // ini adalah kumpulan dari banyak data di API. makanya datas
}

const HomeMovie = () => {
  const navigate = useNavigate();
  const [totalPage, setTotalPage] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState<ResultType[]>([]);
  const [page, setPage] = useState<number>(1);

  function nowPlaying(page: number) {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${page}`
      )
      .then((data) => {
        const { results, total_pages } = data.data;
        setDatas(results);
        setTotalPage(total_pages);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }

  function nextPage() {
    const newPage = page + 1;
    setPage(newPage);
    nowPlaying(newPage);
  }

  function prevPage() {
    const newPage = page - 1;
    setPage(newPage);
    nowPlaying(newPage);
  }

  useEffect(() => {
    nowPlaying(1);
  }, []);

  return (
    <Layout>
      {!loading && (
        <Carousel
          datas={datas}
          content={(data) => (
            <div
              className="w-full h-full flex justify-center items-center bg-cover bg-center dark:opacity-90"
              style={{
                backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
              }}
            >
              <p className="text-white italic tracking-widest font-bold break-words text-2xl text-center">
                {data.title}
              </p>
            </div>
          )}
        />
      )}
      <div className="grid grid-cols-4 justify-center gap-3 p-3">
        {loading
          ? [...Array(20).keys()].map((data) => <Loading key={data} />)
          : datas.map((data: ResultType) => (
              <Card
                key={data.id}
                title={data.title}
                poster_path={data.poster_path}
                vote_average={data.vote_average}
                // onClickFav={() => handleFavorite(data)}
              />
            ))}
      </div>
      <div className="btn-group w-full justify-center">
        <button
          className="btn bg-blue-800"
          onClick={() => prevPage()}
          disabled={page === 1}
        >
          «
        </button>
        <button className="btn">{page}</button>
        <button
          className="btn bg-indigo-900"
          onClick={() => nextPage()}
          disabled={page === totalPage}
        >
          »
        </button>
      </div>
    </Layout>
  );
};

export default HomeMovie;
