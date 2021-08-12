import React from "react";
import PropTypes from "prop-types";

export default function Form({ onHandleChsnge }) {
  return (
    <div>
      <div>
        <button type="button" name="Good" onClick={onHandleChsnge}>
          Good
        </button>
        <button type="button" name="Neutral" onClick={onHandleChsnge}>
          Neutral
        </button>
        <button type="button" name="Bad" onClick={onHandleChsnge}>
          Bad
        </button>
      </div>
    </div>
  );
}

Form.propTypes = {
  onHandleChsnge: PropTypes.func.isRequired,
};
