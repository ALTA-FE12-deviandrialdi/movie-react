import React, { useState, useEffect, FC } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";

import Layout from "../components/Layout";
import Loading from "../components/Loading";

import { DetailsMovieType } from "../Utils/types/movie";

interface PropsType {
  params?: any;
}

interface StateType {
  loading: boolean;
  data: DetailsMovieType;
}

const formatUSD = (money: any) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(money);
};

const DetailMovie = () => {
  const { id_movie } = useParams();
  const [data, setData] = useState<DetailsMovieType>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(`${id_movie}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }
  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <div className="hero min-h-screen bg-base-200 dark:bg-white dark:text-black mx-auto items-center">
          <div className="w-full bg-cover bg-center bg-no-repeat">
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              className="opacity-40 w-screen"
            />
          </div>
          <div className="hero-content flex-col lg:flex-row justify">
            <div className="card card-side backdrop-blur-xl shadow-xl items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                className="w-1/4 h-1/4 shadow-2xl mx-10 my-10 "
              />
              <div className="mx-14 my-14">
                <h1 className="text-5xl font-bold">{data.title}</h1>
                <p className="pt-2 text-lg font-semibold">
                  <span className="text-lg font-normal italic">
                    {data.tagline}
                  </span>
                </p>
                <br />
                <p className="pt-2 text-lg font-semibold">
                  Ratings:{" "}
                  <span className="text-lg font-normal">
                    {data.vote_average}
                  </span>
                </p>
                <p className="pt-1 text-lg font-semibold">
                  Release:{" "}
                  <span className="text-lg font-normal">
                    {data.release_date}
                  </span>
                </p>
                <p className="pt-1 text-lg font-semibold">
                  Genre:{" "}
                  <span className="text-lg font-normal">
                    {data.genres
                      ?.map((genre) => {
                        return genre.name;
                      })
                      .join(", ")}
                  </span>
                </p>
                <p className="pt-1 text-lg font-semibold">
                  Runtime:{" "}
                  <span className="text-lg font-normal">{data.runtime} s</span>
                </p>
                <p className="pt-1 text-lg font-semibold">
                  Languange:{" "}
                  <span className="text-lg font-normal">
                    {data.original_language}
                  </span>
                </p>
                <p className="pt-1 text-lg font-semibold">
                  Popularity:{" "}
                  <span className="text-lg font-normal">{data.popularity}</span>
                </p>
                <p className="pt-1 text-lg font-semibold">
                  Production:{" "}
                  <span className="text-lg font-normal">
                    {data.production_companies
                      ?.map((companies) => {
                        return companies.name;
                      })
                      .join(", ")}
                  </span>
                  .
                </p>
                <p className="pt-1 text-lg font-semibold">
                  Budget:
                  <span className="text-lg font-normal">
                    {formatUSD(data.budget)}.00
                  </span>
                </p>
                <p className="pt-1 text-lg font-semibold">
                  Revenue:{" "}
                  <span className="text-lg font-normal">{data.revenue}</span>
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DetailMovie;
