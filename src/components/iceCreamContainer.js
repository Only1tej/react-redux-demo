import React, { useState } from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of icecreams - {props.numOfIceCreams}</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyIceCream(number)}>
        Buy {number} Icecream
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: (number) => dispatch(buyIceCream(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
