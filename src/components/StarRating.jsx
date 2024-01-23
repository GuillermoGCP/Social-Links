const EmptyStars = () => {
  return <span className="text-gray-400">&#9813;</span>;
};

const FullStars = () => {
  return <span className="text-indigo-600">&#9819;</span>;
};

const StarRating = (link) => {
  const roundRating = Math.round(parseInt(link.link.rating));

  return (
    <p>
      {[...new Array(10)].map((star, index) => {
        return index < roundRating ? (
          <FullStars key={index}></FullStars>
        ) : (
          <EmptyStars key={index}></EmptyStars>
        );
      })}
    </p>
  );
};

export default StarRating;

//codigos de estrellas llena &#9733 vacia &#9734
