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

//1.
describe(' $http', function () {
    var MyService, httpBackend;

    // 2.
    // 3. load the module.
    beforeEach(angular.mock.module('App'));

    // 4. get your service, also get $httpBackend
    // $httpBackend will be a mock.
    beforeEach(inject(function(_MyService_, $httpBackend) {
      MyService = _MyService_;
      httpBackend = $httpBackend;
    }));

    // 5. make sure no expectations were missed in your tests.
    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    // 6.
    it(' get()', function () {

        var returnData = {};

        // 7. expectGET to make sure this is called once.
        httpBackend.expectGET("https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg").respond(returnData);

        // 8. make the call.
        var returnedPromise = MyService.get("0TnOYISbd1XYRBk9myaseg");

        //9. set up a handler for the response, that will put the result
        // into a variable in this scope for you to test.
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });

        // 10. flush the backend to "execute" the request to do the expectedGET assertion.
        httpBackend.flush();

        // 11. check the result.

        expect(result).toEqual(returnData);
    });
});

////////////////////////////////////////////////////////////////////////////////

//1.
describe(' asychronous $http', function () {
    var MyService, httpBackend;
    var originalTimeout;
    

    async.beforeEach(function() {
      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    });

    // it("takes a long time", function(done) {
    //   setTimeout(function() {
    //     done();
    //   }, 9000);
    // });

    // 2.
    // 3. load the module.
    beforeEach(angular.mock.module('App'));

    // 4. get your service, also get $httpBackend
    // $httpBackend will be a mock.
    beforeEach(inject(function(_MyService_, $httpBackend) {
      MyService = _MyService_;
      httpBackend = $httpBackend;
    }));

    // 5. make sure no expectations were missed in your tests.
    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    // 6.
    it(' getArtist()', function (done) {

        setTimeout(function() {
          done();
        }, 2000);


        var returnData = {};

        // 7. expectGET to make sure this is called once.
        httpBackend.expectGET("https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg").respond(returnData);

        // 8. make the call.
        var returnedPromise = MyService.getArtist("0TnOYISbd1XYRBk9myaseg");

        //9. set up a handler for the response, that will put the result
        // into a variable in this scope for you to test.
        var result;
        returnedPromise.then(function (response) {
            result = response.data;
        });

        // 10. flush the backend to "execute" the request to do the expectedGET assertion.
        httpBackend.flush();

        // 11. check the result.

        expect(result).toEqual(returnData);
    });
});
