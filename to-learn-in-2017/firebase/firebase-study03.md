# firebase 로그인

## 1부
* 구글메일은 인증정보를 설정할 필요가 없음
* Fb, twitter, Github은 인증 정보가 별도로 필요, 개발자 등록 필요

### 구글 로그인
* app.component or app.module에 등록
* angularfire2를 사용 (현 beta)
* 팝업 혹은 페이지로 가능

### 페이스북 로그인
* Oauth: 대형 서비스에 가입한 회원 정보를 필요할 때, 필요한 양만큼 가져오기
* access token을 parameter로 사용
* 앱 검수에서 공개하기를 해야 외부에서 사용 가능
* ionic -g authservice
* uid, email, 이름, 프로필 사진..

### 패스워드 로그인
* 기능을 구현해야 함.

## 2부
* 

