import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Content from './Content';
// import { getMovieList } from './Api'; 대신에 useHook 사용하기
import { Categoryname } from './Movies';
import { Result } from './GetMoviesPayload';

import useAxios from './Hooks/useHooks';

interface ListItem {
  option: Categoryname;
  listText?: string;
}

const List = ({ option, listText }: ListItem) => {
  const [movies, setMovies] = useState<Result[]>();

  // const fetchData = async ({ option }: ListItem) => {
  //   setMovies(await getMovieList(option));
  // };

  //   useEffect(() => {
  //   fetchData({ option });
  // }, [option]);

  const { data } = useAxios({
    url: `https://api.themoviedb.org/3/movie/${option}?language=en-US&page=1`,
  });

  useEffect(() => {
    setMovies(data);
  }, [data]);

  return (
    <>
      <ListText>{listText}</ListText>
      <ListBlock>
        {movies &&
          movies.map((movie, index) => (
            <Content key={index} content={movie} rank={index} />
          ))}
      </ListBlock>
    </>
  );
};

export default List;

const ListBlock = styled.div`
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 */
  }
`;

const ListText = styled.h2`
  padding-left: 8px;
  margin-top: 48px;
  margin-bottom: 2px;
`;
