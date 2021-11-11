import React from 'react';
import './Reviews.css';

let ReviewsRateDate = function(props) {
  console.log('ReviewRate-->', props);
  let date = new Date(props.date.slice(0, 10));
  let starAndMonthTile = {
    '0': '☆☆☆☆☆', 'Jan': 'January', 'Jul': 'July',
    '1': '★☆☆☆☆', 'Feb': 'February', 'Aug': 'August',
    '2': '★★☆☆☆', 'Mar': 'March', 'Sep': 'September',
    '3': '★★★☆☆', 'Apr': 'April', 'Oct': 'October',
    '4': '★★★★☆', 'May': 'May', 'Nov': 'November',
    '5': '★★★★★', 'Jun': 'June', 'Dec': 'December'
  };

  let starsToDisplay, nightShiftOn;
  if (props.nightShift === 'nightShiftOn') { nightShiftOn = props.nightShift; }

  date = date.toString().slice(4, 15);
  date = `${starAndMonthTile[date.slice(0, 3)]} ${date.slice(4, 6)}, ${date.slice(-4)}`;

  if (nightShiftOn) { starsToDisplay = props.starGenerator(props.stars, true); }
  if (!nightShiftOn) { starsToDisplay = props.starGenerator(props.stars); }


  return (
    <React.Fragment>
      <p>
        <img src={starsToDisplay[0]} className="ratingOverviewStars" width="15" height="8" alt="Star 1"/>
        <img src={starsToDisplay[1]} className="ratingOverviewStars" width="15" height="8" alt="Star 2"/>
        <img src={starsToDisplay[2]} className="ratingOverviewStars" width="15" height="8" alt="Star 3"/>
        <img src={starsToDisplay[3]} className="ratingOverviewStars" width="15" height="8" alt="Star 4"/>
        <img src={starsToDisplay[4]} className="ratingOverviewStars" width="15" height="8" alt="Star 5"/>
      </p>
      <p id="usernameDate">
        {
          props.username.length > 60
            ? `${props.username.slice(0, 60)}, ${date}`
            : `${props.username}, ${date}`
        }
      </p>
    </React.Fragment>
  );
};

export default ReviewsRateDate;