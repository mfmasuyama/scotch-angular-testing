(function() {
  'use strict';

  angular.module('App', [])
  .service('MyService', function() {

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
