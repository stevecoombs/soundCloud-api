var app = angular.module('sounder');

app.service('soundService', function($http) {
    this.getUser = function(username) {
        return $http.get('http://api.soundcloud.com/users/' + username + '/tracks.json?client_id=8c6d150d8ccda717094e957eaf8d8d9b')
    }
})