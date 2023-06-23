import React from "react";
import { buyCookies } from "../redux";
import { connect } from "react-redux";

function CookiesContainer(props) {
  return (
    <div>
      <h2>Number of Cookies - {props.numOfCookies} </h2>
      <button onClick={props.buyCookies}>Buy Cookies</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCookies: state.cookies.numOfCookies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCookies: () => dispatch(buyCookies()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CookiesContainer);
