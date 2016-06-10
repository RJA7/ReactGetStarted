define(function (require) {

    var React = require('react');
    var ReactDom = require('reactDom');

    function App() {
        this.AppView = React.createClass({
            render: function () {
                return (
                    <div>
                        <p>Hello, React!</p>
                    </div>
                );
            }
        });
    }

    App.prototype.init = function () {
        ReactDom.render(<this.AppView />, document.getElementById('example'));
    };

    return App;

});
