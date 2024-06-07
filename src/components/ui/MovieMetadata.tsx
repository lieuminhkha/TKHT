export interface Trailer {
    ofMovieId: number,
    youtubeLinkUrl: string;
}

export interface Poster {
    of_movie_id: number,
    original_filename: string,
    original_image_url: string;
}

export interface MovieType {
    id: number,
    display_name: string;
}

export interface Genre {
    id: number,
    display_name: string;
}

export interface Image {
    id: number,
    of_movie_id: number,
    original_filename: number,
    original_image_url: number;
}


export interface Movie {
    id: number,
    title: string,
    description: string,
    duration: number,
    release_date: number,
    poster: Poster,
    trailer: Trailer,
    movieType: MovieType;
}

export interface MovieMetadata {
    movie: Movie;
    genreList: Genre[];
    imageList: Image[];
}

export const MovieMetadataCard:;