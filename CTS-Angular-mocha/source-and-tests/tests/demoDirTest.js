describe("Directive Test",function(){

var compile, scope, directiveElem;

beforeEach(function(){
  module('demoApp');
  
  inject(function($compile, $rootScope){
    compile = $compile;
    scope = $rootScope.$new();
  });
  
  directiveElem = getCompiledElement();
});

function getCompiledElement(){
  var element = angular.element('<div ng-controller="myCtrl" demo-dir></div>');
 
 
  var compiledElement = compile(element)(scope);
  scope.$digest();
  return compiledElement;
}
it('should give a compiled output for the directive',function(){
    var spanElement = directiveElem.find('span');
  assert.equal(spanElement.text(),'This span is appended from directive.')
});
it('should give a compiled output for the directive',function(){
    var labelElement = directiveElem.find('label');
    console.log(labelElement);
  assert.equal(labelElement.text(),'kiran')
});

});
