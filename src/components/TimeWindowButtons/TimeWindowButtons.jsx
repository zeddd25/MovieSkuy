import "../TimeWindowButtons/TimeWindowButtons.css";

const TimeWindowButtons = ({ timeWindow, handleTimeWindowChange }) => {
  return (
    <div className="time_window_buttons">
      <button
        className={timeWindow === "day" ? "active" : ""}
        onClick={() => handleTimeWindowChange("day")}
      >
        Day
      </button>
      <button
        className={timeWindow === "week" ? "active" : ""}
        onClick={() => handleTimeWindowChange("week")}
      >
        Week
      </button>
      <div
        className={`switch ${timeWindow === "week" ? "active" : ""}`}
        onClick={() => handleTimeWindowChange("week")}
      ></div>
    </div>
  );
};

export default TimeWindowButtons;
