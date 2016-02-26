# 웹 디자이너를 위한 SASS
## 1. 왜 SASS 인가?
* SASS 엘리베이터 피치
  * 흩어져있는 색상값을 일괄적으로 바꾸기 편함.
~~~css
$brand-color:#fc3;
a {
 color:$brand-color;
}
nav {
 background-color:$brand-color;
}
~~~

  * 반복되는 스타일 블록을 재사용할 수 있는 블록으로 사용가능.
  * 규칙을 단 한 번 적용하고 필요한 곳마다 넣으면 됨.
~~~css
p {margin-bottom:20px;font-size:14px;line-height:1.5;}
footer {margin-bottom:20px;font-size:14px;line-height:1.5}
~~~

~~~css
@mixin default-type {
 margin-bottom:20px;font-size:14px;line-height:1.5;
}

p {
 @include default-type
}
footer {
 @include default-type
}
~~~

* SASS 문법
 * SCSS는 CSS를 작성하던 기존의 방식으로 작성할 수 있다.
 * 작업된 스타일시트에 Sass기능을 적용하여 코드를 점차적으로 변경할 수 있다.
 * 코드 형식을 변경할 필요가 없다.
 * SCSS 변환 예제
 ~~~ css
$pink:#ea4c89;
p {
 font-size:12px;color:$pink;
}
p strong {
 text-transform:uppercase;
}
 ~~~

 ~~~css
 p {font-size:12px;color:#ea4c89;}
 p strong {text-transform:uppercase;}
 ~~~

## 2. SASS 워크플로
* 맥에서 설치하기 
 * Sass는 루비의 gem으로 패키지화 되어 있음
 * 터미널에서 아래와 같이 입력
 ~~~
 $ gem install sass
 ~~~
 * 비공식 최신 버전 설치
 ~~~
 $ gem install sass --pre
 ~~~

* 윈도우에서 SASS 설치하기
 * 윈도우용 루비인스톨러를 이용하여 설치 (http://webactually.com/2014/08/%EC%9C%88%EB%8F%84%EC%9A%B0%EC%97%90%EC%84%9C-sass-%EC%84%A4%EC%B9%98%ED%95%98%EA%B8%B0/)
 * 루비 설치 확인 - CMD 실행
 ~~~
 ruby -v
 ~~~
