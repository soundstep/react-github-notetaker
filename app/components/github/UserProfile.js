'use strict';

var React = require('react');

var UserProfile = React.createClass({
    render: function() {
        console.log('--', this.props.bio);
        return (
            <div>
                <p>USER PROFILE</p>
                <p>Username: {this.props.username}</p>
                <p>Bio: {this.props.bio.name}</p>
            </div>
        );
    }
});

module.exports = UserProfile;
