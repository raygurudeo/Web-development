import React from 'react';
import Tour from './Tour';
const Tours = ({ toursProps, removeTour }) => {
  // console.log(typeof(tours));
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {toursProps.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour}/>;
        })}
      </div>
    </section>
  );
};

export default Tours;
