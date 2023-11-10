import axios from 'axios';
import { GetMoviesPayload } from '../GetMoviesPayload';

export const getMovieList = async (option: string) => {
  try {
    const res = await axios.get<GetMoviesPayload>(
      `https://api.themoviedb.org/3/movie/${option}?language=en-US&page=1`,
      {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    return res.data.results;
  } catch (e) {
    if (e instanceof Error) {
    }
  }
};
