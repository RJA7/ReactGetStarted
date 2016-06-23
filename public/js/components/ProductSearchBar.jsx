define(function (require) {

    var React = require('react');

    return React.createClass({
        handleChange: function () {
            this.props.handleUserInput(
                this.refs.filterText.value,
                this.refs.inStockOnly.checked
            );
        },

        render: function () {
            return (
                <form>
                    <input
                        type="text"
                        placeholder="Search..."
                        ref="filterText"
                        value={this.props.filterText}
                        onChange={this.handleChange}
                    />
                    <p>
                        <input
                            type="checkbox"
                            ref="inStockOnly"
                            value={this.props.inStockOnly}
                            onChange={this.handleChange}
                        />
                        {'  '}
                        Only show stocked products
                    </p>
                </form>
            );
        }
    });

});