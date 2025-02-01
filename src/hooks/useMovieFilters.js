import { useState, useMemo } from "react";

export const useMovieFilters = (movies) => {
    const [yearFilter, setYearFilter] = useState("");
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const availableYears = useMemo(
        () => [...new Set(movies.map((movie) => movie.releaseYear))].sort((a, b) => b - a),
        [movies]
    );

    const filteredMovies = useMemo(
        () => movies.filter((movie) => movie.releaseYear >= yearFilter),
        [movies, yearFilter]
    );

    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedMovies = filteredMovies.slice(startIndex, startIndex + itemsPerPage);

    return {
        availableYears,
        yearFilter,
        setYearFilter,
        itemsPerPage,
        setItemsPerPage,
        currentPage,
        setCurrentPage,
        totalPages,
        paginatedMovies,
    };
};