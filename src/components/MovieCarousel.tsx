const MovieCarousel = () => {
    const slides = [];
    for (let i = 0; i < movies.length; i += 5) {
        slides.push(
            <div key={i} style={{ display: 'flex', justifyContent: 'space-around' }}>
                {movies.slice(i, i + 5).map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}
            </div>
        );
    }

    return (
        <Carousel autoplay dotPosition="bottom">
            {slides}
        </Carousel>
    );
};

export default MovieCarousel;
