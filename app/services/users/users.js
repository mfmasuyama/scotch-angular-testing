(function() {
  'use strict';

  angular.module('api.users', [])
  .service('MyService', function() {

    var tracks = {};

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

    // var Users = {};
    // var userList = [
    //   {
    //     id: '1',
    //     name: 'Jane',
    //     role: 'Designer',
    //     location: 'New York',
    //     twitter: 'gijane'
    //   },
    //   {
    //     id: '2',
    //     name: 'Bob',
    //     role: 'Developer',
    //     location: 'New York',
    //     twitter: 'billybob'
    //   },
    //   {
    //     id: '3',
    //     name: 'Jim',
    //     role: 'Developer',
    //     location: 'Chicago',
    //     twitter: 'jimbo'
    //   },
    //   {
    //     id: '4',
    //     name: 'Bill',
    //     role: 'Designer',
    //     location: 'LA',
    //     twitter: 'dabill'
    //   }
    // ];
    //
    // Users.all = function() {
    //   return userList;
    // };
    //
    // Users.findById = function(id) {
    //   return userList.find(function(user) {
    //     return user.id === id;
    //   });
    // };

  });
})();
