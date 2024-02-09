import React from "react";
import PropTypes from "prop-types";

const PostCounter = ({ createdAt }) => {
  const [minutesSincePost, setMinutesSincePost] = React.useState(0);
  const [hoursSincePost, setHoursSincePost] = React.useState(0);
  const [daysSincePost, setDaysSincePost] = React.useState(0);
  const [monthsSincePost, setMonthsSincePost] = React.useState(0);
  const [yearsSincePost, setYearsSincePost] = React.useState(0);

  React.useEffect(() => {
    const calculateDaysSincePost = () => {
      const postDateObj = new Date(createdAt);
      const currentDate = new Date();
      const differenceInTime = currentDate.getTime() - postDateObj.getTime();

      const differenceInMinutes = Math.floor(differenceInTime / (1000 * 60));

      const differenceInHours = Math.floor(differenceInTime / (1000 * 60 * 60));

      const differenceInDays = Math.floor(
        differenceInTime / (1000 * 3600 * 24)
      );

      const differenceInMonths = Math.floor(
        differenceInTime / (1000 * 3600 * 24 * 30)
      );

      const differenceInYears = Math.floor(
        differenceInTime / (1000 * 3600 * 24 * 365)
      );

      setMinutesSincePost(differenceInMinutes);
      setHoursSincePost(differenceInHours);
      setDaysSincePost(differenceInDays);
      setMonthsSincePost(differenceInMonths);
      setYearsSincePost(differenceInYears);
    };

    calculateDaysSincePost();

    return () => {};
  }, [createdAt]);

  return (
    <div>
      {minutesSincePost >= 0 &&
        minutesSincePost < 60 &&
        `Hace ${minutesSincePost} minuto/s`}

      {hoursSincePost >= 1 &&
        hoursSincePost < 24 &&
        `Hace ${hoursSincePost} horas/s`}

      {daysSincePost >= 1 &&
        daysSincePost < 30 &&
        `Hace ${daysSincePost} dias/s`}

      {monthsSincePost >= 1 &&
        monthsSincePost < 12 &&
        `Hace ${monthsSincePost} meses/s`}

      {yearsSincePost >= 1 && `Hace ${yearsSincePost} años/s`}
    </div>
  );
};
PostCounter.propTypes = {
  createdAt: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
  ]),
};

export default PostCounter;
