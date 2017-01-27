(function() {
  'use strict';

  angular.module('App', [])
  .service('MyService', function() {

    this.getArtist = function(id) {
        return $http({
            method: 'GET',
            url: "https://api.spotify.com/v1/artists/" + id
        }).then(function success(response) {
            return response.data;
        }, function error() {
            console.error('Error');
        });
    }

    this.orderUp = function(tracks) {
        return tracks.sort(compareUp);
    }

    this.orderDown = function(tracks) {
        return tracks.sort(compareDown);
    }

    function compareDown(a,b) {
        if (a.duration_ms < b.duration_ms) {
            return -1;
        }
        if (a.duration_ms > b.duration_ms) {
            return 1;
        }
        return 0;
    }

    function compareUp(a,b) {
        if (a.duration_ms > b.duration_ms) {
            return -1;
        }
        if (a.duration_ms < b.duration_ms) {
            return 1;
        }
        return 0;
    }
  });
})();
