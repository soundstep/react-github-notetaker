'use strict';

var React = require('react');

var Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },
    render: function() {
        var repos = this.props.repos.map(function(repo, index) {
            return <p key={index}>{repo.name}</p>;
        });
        return (
            <div>
                <p>REPOS</p>
                <p>Username: {this.props.username}</p>
                {repos}
            </div>
        );
    }
});

module.exports = Repos;
