(function() {
  'use strict';

  angular.module('App', [])

  // function($http) es necesario para las llamadas, sino va vacío.
  .service('MyService', function($http) {

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

    this.getData = function () {
       var result = $http.get("http://localhost:36337/api/EmployeeInfoAPI");
       return result; //deferrer
   };

   this.get = function (id) {
       var result = $http.get("https://api.spotify.com/v1/artists/" + id);
       return result; //deferrer
   };


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
