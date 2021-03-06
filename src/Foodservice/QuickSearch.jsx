import React, { Component } from "react";
import "./QuickSearch.css";
import QuickDisplay from "./QuickDisplay";

const quickUrl = "https://zomatoajulypi.herokuapp.com/quicksearch";

class QuickSearch extends Component {
  constructor() {
    super();
    this.state = {
      mealTypes: "",
    };
  }
  render() {
    return (
      <>
        <section>
          <>
            <div id="">
              <span id="QuickSearchHeading">Quick Search</span>
              <span id="QuickSubHeading">Find Restaurants By MealType</span>
              <QuickDisplay mealData={this.state.mealTypes} />
            </div>
          </>
        </section>
      </>
    );
  }

  // call AP
  componentDidMount() {
    fetch(quickUrl, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ mealTypes: data });
      });
  }
}

export default QuickSearch;
