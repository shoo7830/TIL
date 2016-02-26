# 웹 디자이너를 위한 SASS
## 왜 SASS 인가?
* SASS 엘리베이터 피치
  * 흩어져있는 색상값을 일괄적으로 바꾸기 편함.
~~~css
$brand-color:#fc3;
a {color:$brand-color;}
nav {background-color:$brand-color;}
~~~

  * 반복되는 스타일 블록을 재사용할 수 있는 블록으로 사용가능.
  * 규칙을 단 한 번 적용하고 필요한 곳마다 넣으면 됨.
~~~css
p {margin-bottom:20px;font-size:14px;line-height:1.5;}
footer {margin-bottom:20px;font-size:14px;line-height:1.5}
~~~

~~~css
@mixin default-type {margin-bottom:20px;font-size:14px;line-height:1.5;}

p {@include default-type}
footer {@include default-type}
~~~

