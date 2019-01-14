import React from "react";
import ProductTable from "../components/ProductTable";
import SearchBar from "../components/SearchBar";

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "", inStockOnly: false };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({ filterText: filterText });
  }

  handleInStockChange(inStockOnly) {
    this.setState({ inStockOnly: inStockOnly });
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockCgange={this.handleInStockChange}
        />
        <ProductTable
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          products={this.props.products}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
