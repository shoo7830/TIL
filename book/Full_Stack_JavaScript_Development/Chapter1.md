# 1. MEAN 스택, 자바스크립트의 거침없는 질주
* 최소한 다섯 가지의 언어를 이해해야 앱을 만들 수 있다.
* 프런트, 백엔드로 분리해서 하는 전문화가 프로젝트를 빠르게 완료하거나 품질을 높일수 있게 보증하지는 않음.

## 1.1 풀스택 자바스크립트의 등장
* 자바스크립트는 범용 프로그래밍에 적합한 언어가 되었다.

### 1.1.1 노드
* 2009년 란달이 만든 확장 가능한 네트워크 앱 개발에 주로 사용되는 프레임워크
* 구글의 v8 자바스크립트 엔진과 조이엔트의 libuv 라이브러리가 기반
* 단 여섯 줄로 간단한 웹 서버 구현 가능

### 1.1.2 노드 생태계
* 노드 패키지 관리자 npm이 있고, 매일 170개 이상의 모듈이 새로 추가되고 있음
* 그중 익스프레스가 인기가 가장 많음.(웹 서버)

### 1.1.3 몽고디비
* PaaS (Platform as Service) 플랫폼의 구성요소가 될 NoSQL(SQL에 의존하지 않는 데이터 저장소 유형) 데이터베이스 개발함 (10gen, 지금의 MongoDB.Inc) 
* 문서 중심 데이터베이스이며 정보를 BSON(Binary JSON) 문서 형태로 저장
* 자바스크립트 객체에 기반을 둔 질의로 SQL을 대체

### 1.1.4 앵귤러
* 단일 페이지 앱 (SPA, Single Page Application)은 엄격한 의미에서 딱 한페이지만 읽고, 나머지 모든 데이터는 Ajax 호출로 요청
* AngularJS는 SPA용으로 가장 인기 있는 프레임워크
* 웹 앱에 모델-뷰-컨트롤러(MVC) 를 적용
* 모델을 조작하는 단순한 앵귤러 컨트롤러
~~~javascript
app.controller('PeopleCtrl', ['$scope', function($scope) {
  $scope.people = [
    {
      firstName : 'Colin', 
      lastName : 'Ihrig'
    }, 
    {
      firstName : 'Adam', 
      lastName : 'Bretz'
    }
  ];
}]);
~~~
people 속성은 사람을 표현하는 단순한 객체 들을 포함하는 배열
* 단순한 앵귤러 템플릿
~~~html
<div ng-repeat="person in people">
  {{person.lastName}}, {{person.firstName}}
</div>
~~~


## 1.2 마치며
* MEAN 스택 : MongoDB, Express, AngularJS, Node.js
* 참고링크
  1. http://www.ecma-international.org/publications/standards/Ecma-262.htm
  2. https://nodejs.org/en/
  3. https://en.wikipedia.org/wiki/Comparison_of_server-side_JavaScript_solutions
  4. http://expressjs.com/
  5. https://angularjs.org/
  6. https://www.mongodb.org/
  7. http://hapijs.com/ (익스프레스 대안)
  8. http://gulpjs.com/
  9. http://gruntjs.com/
  10. http://jshint.com/
  11. https://github.com/node-inspector/node-inspector
  12. https://github.com/mochajs/mocha
