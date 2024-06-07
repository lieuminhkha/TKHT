import React, { useState } from 'react';
import MovieCard from './MovieCard';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"; // Adjust the import path according to your project structure
import MovieList from './MovieList';
interface Movie {
  id: number;
  title: string;
  image: string;
  classification: string;
  format: string;
  director: string;
  actors: string[];
  genre: string;
  releaseDate: Date;
  duration: number;
  subtitles: string;
}

export interface MovieListProps {
  movies: Movie[];
}

const MoviesComingSoon: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="movie-list flex flex-col items-center justify-center min-h-screen gap-8 text-xl bg-white">
      <h2 className="text-lg md:text-xl lg:text-2xl text-black">Phim sắp chiếu</h2>
      <div className="flex flex-wrap justify-center">
        <MovieList movies={movies} isSaleTicket={false} />
      </div>
    </div>
  );
};

export default MoviesComingSoon;
