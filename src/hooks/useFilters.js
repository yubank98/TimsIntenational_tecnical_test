export const usefilteredType = (movieData, type) => {
    return movieData.entries
        .filter((movie) => {
            return (movie.programType.toLowerCase() === type.toLowerCase() &&
                movie.releaseYear >= 2010);
        })
        .toSorted((a, b) => a.title.localeCompare(b.title))
        .slice(0, 20);
};