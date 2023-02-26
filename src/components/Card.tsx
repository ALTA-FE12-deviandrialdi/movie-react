import { useNavigate } from "react-router-dom";
import { FC } from "react";

import Button2 from "./Button2";

interface CardProps {
  title: string;
  poster_path: string;
  vote_average: number;
  id: any;
  labelButton: string;
  onClickFav?: () => void;
  //   navigate?: any;
  //   params?: any;
}

const Card: FC<CardProps> = ({
  id,
  poster_path,
  title,
  vote_average,
  labelButton,
  onClickFav,
}) => {
  const navigate = useNavigate();

  function onClickDetail() {
    navigate(`/movie/${id}`);
  }

  return (
    <div className="card glass bg-[#efe5e9]">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </figure>
      <div className="card-body items-center justify-between">
        <h2 className="card-title items-center text-center">{title}</h2>
        <p>{vote_average}</p>
      </div>

      <button className="btn gap-1 bg-[#842a50] text-[9px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.5"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Add to Favorite
      </button>
    </div>
  );
};

export default Card;
