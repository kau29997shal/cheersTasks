export const Movie = (params) => {
    return (
        <>
            <div className="card" id={params.key}>
                <p className="cardTitle">Movie Name : {params.movieName}</p>
                <p className="rating">Rating : {params.rating}/5</p>
                <p className="date">Release Data : {params.releaseDate.slice(0, 10)}</p>
            </div>
        </>
    )
}