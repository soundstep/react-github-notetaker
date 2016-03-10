'use strict';

var React = require('react');

var UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
            <div>
                <p>USER PROFILE</p>
                <p>Username: {this.props.username}</p>
                <pre>{this.props.bio.name}</pre>
            </div>
        );
    }
});

module.exports = UserProfile;
