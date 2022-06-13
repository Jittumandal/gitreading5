import React, { Component } from "react";
import SearchHeader from "./SearchHeader";
// import Footer from "./Footer";
import ProductDisplay from "./productDisplay";
import JSON from "./db.json";
import { Link } from "react-router-dom";

class Product extends Component {
  constructor() {
    super();

    this.state = {
      productData: JSON,
      filteredData: JSON,
    };
  }
  /*
        var a = [-1,0,1,2,3]
        a.filter((data) => {return data>2})
        [3]
    */
  filterProduct = (userInput) => {
    let output = this.state.productData.filter((item) => {
      return item.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
    });
    this.setState({ filteredData: output });
  };

  render() {
    return (
      <>
        {/* we are reciving the data from header */}
        <SearchHeader
          userText={(data) => {
            this.filterProduct(data);
          }}
        />
        <ProductDisplay prodData={this.state.filteredData} />
        {/* <Footer year="2022" month="may" /> */}
      </>
    );
  }
}

export default Product;
