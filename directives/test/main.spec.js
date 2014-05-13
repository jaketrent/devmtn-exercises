describe('main', function () {

  beforeEach(module('app'))

  var scope
  var el
  var $compile

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new()
    $compile = _$compile_
  }))

  it('sets a color', function () {
    el = angular.element('<div dv-color="blue"></div>')
    el = $compile(el)(scope)
    scope.$digest()
    expect(el.css('color')).toBe('blue')
  })

})