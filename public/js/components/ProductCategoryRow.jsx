define(function (require) {

    var React = require('react');

    return React.createClass({
        render: function () {
            return (
                <tr>
                    <th colspan="2">
                        {this.props.product.category}
                    </th>
                </tr>
            );
        }
    });

});
