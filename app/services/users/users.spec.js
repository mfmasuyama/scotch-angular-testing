describe('Order', function() {

  var MyService;
  var trackList = [{duration_ms: 1}, {duration_ms: 1}, {duration_ms: 100}, {duration_ms: 90}, {duration_ms: 5}];

  beforeEach(angular.mock.module('App'));

  beforeEach(inject(function(_MyService_) {
    MyService = _MyService_;
  }));

  it(' should exist', function() {
    expect(MyService).toBeDefined();
  });

  describe('Order Up', function() {

    it(' should order up', function() {
      var results = [{duration_ms: 100}, {duration_ms: 90}, {duration_ms: 5}, {duration_ms: 1}, {duration_ms: 1}];
      expect(MyService.orderUp(trackList)).toEqual(results);
    });

    it(' should show the same when it orders up', function() {
      var results = [{duration_ms: 100}, {duration_ms: 90}, {duration_ms: 5}, {duration_ms: 1}, {duration_ms: 1}];
      expect(MyService.orderUp(results)).toEqual(results);
    });

  });

  describe('Order Down', function() {

    it(' should order down', function() {
      var results = [{duration_ms: 1}, {duration_ms: 1}, {duration_ms: 5}, {duration_ms: 90}, {duration_ms: 100}];
      expect(MyService.orderDown(trackList)).toEqual(results);
    });

    it(' should show the same when it orders down', function() {
      var results = [{duration_ms: 1}, {duration_ms: 1}, {duration_ms: 5}, {duration_ms: 90}, {duration_ms: 100}];
      expect(MyService.orderDown(results)).toEqual(results);
    });

  });

});

///////////////////////////////////////////////////////////////////////////////
// describe('$http', function() {
//
//   var MyService;
//
//   beforeEach(angular.mock.module('App'));
//
//   beforeEach(inject(function(_MyService_,  _$httpBackend_) {
//     MyService = _MyService_;
//     $httpBackend =  _$httpBackend_;
//   }));
//
//    afterEach(function() {
//      $httpBackend.verifyNoOutstandingExpectation();
//      $httpBackend.verifyNoOutstandingRequest();
//    });
//
//    it('should fetch authentication token', function() {
//      $httpBackend.expectGET('/auth.py');
//      $httpBackend.flush();
//    });
//
//   it(' $http call works', function() {
//
//   });
//
// });

//////////////////////////////////////////////////

// describe('$http', function() {
//   var MyService;
//
//   beforeEach(angular.mock.module('App'));
//
//   beforeEach(inject(function(_MyService_) {
//     MyService = _MyService_;
//   }));
//
//   it(' should order down', function() {
//     expect(MyService.getArtist("0OdUWJ0sBjDrqHygGUXeCF").name).toEqual("Band of Horses");
//   });
//
// });
