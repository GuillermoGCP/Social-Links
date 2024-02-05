const EmptyStars = () => {
  return <span className="text-gray-400 text-2xl"> &#9734;</span>;
};

const FullStars = () => {
  return <span className="text-yellow-500 text-2xl"> &#9733;</span>;
};

const StarRating = (link) => {
  const roundRating = Math.round(parseInt(link.link.rating));

  return (
    <>
      {[...new Array(10)].map((star, index) => {
        return index < roundRating ? (
          <FullStars key={index}></FullStars>
        ) : (
          <EmptyStars key={index}></EmptyStars>
        );
      })}
    </>
  );
};

export default StarRating;

//codigos de estrellas llena &#9733 vacia &#9734
