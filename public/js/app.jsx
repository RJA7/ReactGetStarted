define(function (require) {

    var React = require('react');
    var ReactDom = require('reactDom');
    var Product = require('jsx!./containers/Product');
    
    var product = {category: 'asd'};

    return function () {
        ReactDom.render(
            <Product />,
            document.getElementById('content')
        );
    };

});
