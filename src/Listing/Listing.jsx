import React, { Component } from "react";
import "./ListingStyle.css";
import axios from "axios";
import ListingDisplay from "./ListingDisplay";
import CuisineFilter from "../Filter/CuisineFilter";

const restOnMeal = "https://zomatoajulypi.herokuapp.com/restaurant?stateId=1";

class Listing extends Component {
  constructor() {
    super();

    this.state = {
      restaurantList: "",
    };
  }

  setDataPerFilter = (data) => {
    this.setState({ restaurantList: data });
  };

  render() {
    return (
      <div className="row">
        <div id="mainListing">
          <div id="filter">
            <CuisineFilter
              restPerCuisine={(data) => {
                this.setDataPerFilter(data);
              }}
            />
          </div>
          <ListingDisplay listData={this.state.restaurantList} />
        </div>
      </div>
    );
  }

  //call api
  componentDidMount() {
    let mealId = this.props.match.params.id ? this.props.match.params.id : 1;
    sessionStorage.setItem("mealId", mealId);
    axios.get(`${restOnMeal}${mealId}`).then((res) => {
      this.setState({ restaurantList: res.data });
    });
  }
}

export default Listing;
