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

