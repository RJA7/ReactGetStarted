define(function (require) {

    var React = require('react');

    return React.createClass({
        render: function () {
            var name = this.props.stocked ? 
                <span style={{color: 'red'}}>this.props.product.name</span> : 
                this.props.product.name;

            return (
                <tr>
                    <td>
                        {name}
                    </td>
                    <td>
                        {this.props.product.price}
                    </td>
                </tr>
            );
        }
    });

});