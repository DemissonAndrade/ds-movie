

import axios from "axios";
import { useEffect, useState } from "react";
import { MoviePage } from "type/movie";
import { BASE_URL } from "util/requests";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";


function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response => {
            const data = response.data as MoviePage;
            console.log(data);
            setPageNumber(data.number);
        });
    }, []);

    return (
        <>
            <p>{pageNumber}</p>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className=" col-sm-3 col-4 mb-3">
                        <MovieCard />
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;