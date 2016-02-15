# BEM

## 정의
* BEM은 Block Element Modifier의 약자
* OOP와 유사
* ID는 사용할 수 없고 class 명만 사용 가능

## Block
* Block은  문단 전체에 적용된 element 또는 element를 담고 있는 컨테이너
~~~~
<div class="header">
  <div class="menu">...</div>
  <div class="search">...</div>
</div>
~~~~

## Element
* element는 block안에서 특정 기능을 수행하는 컴포넌트
* 각 element는 두 개의 밑줄표시로 연결하여 block다음에 작성
~~~~
.header__logo {}
.header__menu {}
.header__search {}
.header__login {}
~~~~
* block 이름이나 element이름이 길 경우 - 하이픈으로 연결 (강제성 아님)

## Modifiers
* Modifiers은 block 또는 element의 속성
* 이 속성은 block 또는 element의 외관이나 상태를 변화시킴
* Class 명은 "-"를 추가하여 modifier 추가
~~~~
.block--modifier {...}
.block__element--modifier {...}
~~~~
* 탭 메뉴가 다른 영역에서 다른 스타일로 사용된다면
  * 메인 속성을 복사하여 추가하거나
  * 전 처리 장치인 sass의 @extend를 활용하여 속성을 상속 받음
~~~~
.header__navigation {
  background:#008cba;
  padding:1px 0;
  margin:2px 0;
}
.header__navigation--secondary {
  @extend .header__navigation
  background:#dfee0e0;
}
~~~~
* 클래스 명이 긴게 흠. - 직접 작업할 때 사용해보니 클래스가 길어도 너무 길어지는게 문제.
  * BEM의 class명은 구체적이고 명료하여 HTML 안에서도 읽기 쉬워야 함.
  * class 명이 무엇을 나타내는지 분명하게 전달되어야 함.
