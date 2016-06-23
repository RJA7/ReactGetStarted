define(function (require) {

    var React = require('react');
    var ProductTable = require('jsx!./ProductTable');
    var ProductSearchBar = require('jsx!./ProductSearchBar');

    return React.createClass({

        getInitialState: function () {
            return {
                inStockOnly: false,
                filterText : ''
            };
        },

        handleUserInput: function (filterText, inStockOnly) {
            this.setState({
                filterText : filterText,
                inStockOnly: inStockOnly
            });
        },

        render: function () {
            return (
                <div>
                    <ProductSearchBar
                        filterText={this.state.filterText}
                        inStockOnly={this.state.inStockOnly}
                        handleUserInput={this.handleUserInput}
                    />
                    <ProductTable
                        products={this.props.products}
                        filterText={this.state.filterText}
                        inStockOnly={this.state.inStockOnly}
                    />
                </div>
            );
        }
    });

});