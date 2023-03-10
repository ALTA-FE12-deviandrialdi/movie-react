export interface MoviesType {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}

type GenreType = {
  id?: number;
  name?: string;
};
type companiesType = {
  id?: number;
  name?: string;
};

export interface DetailsMovieType {
  id?: number;
  title?: string;
  poster_path?: string;
  backdrop_path?: string;
  tagline?: string;
  vote_average?: number;
  release_date?: string;
  genres?: GenreType[];
  runtime?: number;
  original_language?: string;
  status?: string;
  popularity?: string;
  production_companies?: companiesType[];
  budget?: number;
  revenue?: number;
  overview?: string;
}
