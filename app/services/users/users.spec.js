describe('MyService factory', function() {
  var MyService;
  var trackList = [{duration_ms: 1}, {duration_ms: 20}, {duration_ms: 90}, {duration_ms: 5}];

  beforeEach(angular.mock.module('api.users'));

  beforeEach(inject(function(_MyService_) {
    MyService = _MyService_;
  }));

  it('should exist', function() {
    expect(MyService).toBeDefined();
  });

  it('should order down', function() {
    var results = [{duration_ms: 1}, {duration_ms: 5}, {duration_ms: 20}, {duration_ms: 90}];
    expect(MyService.orderDown(trackList)).toEqual(results);
  });

  it('should order up', function() {
    var results = [{duration_ms: 90}, {duration_ms: 20}, {duration_ms: 5}, {duration_ms: 1}];
    expect(MyService.orderUp(trackList)).toEqual(results);
  });
  // describe('.all()', function() {
  //
  //   it('should exist', function() {
  //     expect(MyService.all).toBeDefined();
  //   });
  //
  //   it('should return a hard-coded list of users', function() {
  //     expect(MyService.all()).toEqual(trackList);
  //   });
  // });

  // describe('.findById()', function() {
  //   it('should exist', function() {
  //     expect(MyService.findById).toBeDefined();
  //   });
  //
  //   it('should return one user object if it exists', function() {
  //     expect(MyService.findById('2')).toEqual(singleUser);
  //   });
  //
  //   it('should return undefined if the user cannot be found', function() {
  //     expect(MyService.findById('ABC')).not.toBeDefined();
  //   });
  // });
});
