define(function (require) {

    var React = require('react');
    var ProductRow = require('jsx!./ProductRow');
    var ProductCategoryRow = require('jsx!./ProductCategoryRow');

    return React.createClass({
        render: function () {
            var rows = [];
            var lastCategory = null;

            this.props.products.forEach(function (product) {
                if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                    return;
                }
                if (lastCategory !== product.category) {
                    rows.push(<ProductCategoryRow product={product} key={product.category} />);
                    lastCategory = product.category;
                }
                rows.push(<ProductRow product={product} key={product.name} />);
            }.bind(this));

            return (
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            );
        }
    });
});
