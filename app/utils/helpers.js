'use strict';

var axios = require('axios');
var clientId = '9a676284b86d2be3c4e3';
var clientSecret = 'aedeea33bdc8fece96b489c5dad475b09a92c188';

function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos?client_id=' + clientId + '&client_secret=' + clientSecret);
}

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username + '?client_id=' + clientId + '&client_secret=' + clientSecret);
}

var helpers = {
    getGithubInfo: function(username) {
        return axios.all([
            getRepos(username),
            getUserInfo(username)
        ]).then(function(arr) {
            return {
                repos: arr[0].data,
                bio: arr[1].data
            };
        });
    }
};

module.exports = helpers;
