var app = angular.module('sounder');

app.controller('mainController', function(soundService, $scope, $sce) {
    $scope.getUser = function() {
        soundService.getUser($scope.searchText)
        .then(function(res) {
            $scope.userData = res.data;
            console.log(res.data);
            //return res.data;
        })
    }
    $scope.play = function(track_url) {
        SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
            $scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
        });
    }
});