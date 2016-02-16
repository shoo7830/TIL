# 생활코딩 6주차
## where
* like : % 라는 와일드 카드를 이용해 유사어 검색을 하는 함수
  * where name like 'a%' 는 a로 시작하는 내용
  * where title like '%a%' 는 a가 들어가 있는 내용
  * where content like '%a'는 a로 끝나는 내용

* between A and B : A와 B사이라는 조건에 만족하면 TRUE
  * where seqno between 1 and 5 -> seqno가 1 이상 5이하
  * where seqno between 2 and 4 -> seqno가 2 이상 4이하

* in () : in 안에 있는 값이면 TRUE
  * where seqno in (1,2) -> seqno가 1 또는 2이면 TRUE
  * where seqno in (3, 5, 10) -> seqno가 3,5,10 중 하나면 TRUE

## limit
* select 하는 내용에 제한
* order by와 함께 써야 가져오는 데이터가 명확해짐
~~~sql
select * from board order by seqno desc limit 10;
select * from board order by seqno desc limit 10, 20;
~~~
* 숫자가 한 개 일 경우 숫자만큼의 row를 가져옴
* 숫자가 두 개 일 경우 숫자만큼의 row부터 뒤의 숫자 만큼의 row를 가져옴 

## PHP와 mysql 연동
* mysql : 과거에 쓰이던 버전. 안정성과 보안, 속도 문제로 현재는 쓰지 말라는 권고. 5.5에서는 없어짐.
* mysqli : php 5.대 버전에서 나온 방식. 기존 mysql에서 문제점으로 지적되는 것들을 개선한 버전. 이것을 기준으로 작업.
* PDO : PHP Database Object. database를 제어 하는 방법을 표준화 시킨것. php 5.1버전 부터 지원.

## 연동 작업 순서
1. 접속 정보 설정 – server 주소, id, password, database name
2. 연결 – 에러 코드를 확인 하여 접속 상태 확인
3. 작업 SQL 생성
4. SQL execute
5. 결과 확인
6. data 처리
7. 연결 종료 – 반드시 해 주어야 함.

## select 실습
* list
~~~php
<?
$host = "localhost";
$id = "kis";
$pass = "kis";
$db = "kis";

$db_h = new mysqli($host,$id,$pass,$db);

if ( $db_h->connect_errno )
{
	echo("db connect error : " . $db_h->connect_errno);
	exit();
}
else
{
	echo($db_h->host_info . "<br>");
}

$SQL = "select seqno, title, registdate from board order by seqno desc limit 5";

$rs = $db_h->query($SQL);

if ( $rs->num_rows <= 0 )
{
	echo($SQL . " - error. no data");
}
else
{
	echo("<ul>\n");
	while ( $row = $rs->fetch_array() )
	{
	    echo("<li><a href=\"./view.php?seqno=" . $row["seqno"] . "\">" . $row["seqno"] . " - " . $row["title"] . " - " . $row["registdate"] . "</a></li>\n");	}
	echo("</ul>\n");
	
	$rs->close();
}

$db_h->close();
?>

~~~

* view
~~~php
<?
$seqno = $_GET["seqno"];
if ( empty($seqno) ) {
	echo("invalid seqno");
	exit();
}
$host = "localhost";
$id = "kis";
$pass = "kis";
$db = "kis";
$db_h = new mysqli($host,$id,$pass,$db);
if ( $db_h->connect_errno ) {
	echo("db connect error : " . $db_h->connect_errno);
	exit();
}
$SQL = sprintf("select seqno, title, registdate, content from board where seqno = '%s'", $db_h->escape_string($seqno));
$rs = $db_h->query($SQL);

if ( $rs->num_rows <= 0 ) {
	echo($SQL . " - error. no data");
}
else {
	$row = $rs->fetch_array();
	$rs->close();
	
	echo("<h1>" . $row["title"]	. "</h1><br>\n");
	echo("<h2>" . $row["registdate"]	. "</h2><br>\n");
	echo("<h3>" . $row["content"]	. "</h3><br>\n");
	echo("<h4><button onclick=\"location.href='./delete.php?seqno=" . $seqno . "'\">삭제</button></h4><br>\n");
}
$SQL = sprintf("update board set readcnt = readcnt + 1 where seqno = '%s'", $db_h->escape_string($seqno));
if ( !$db_h->query($SQL) ) {
	echo("<h1>read count update fail.</h1>");
}

$db_h->close();
?>
~~~

## escape_string
* sql injection 을 막기 위한 최소한의 방법.
* 반드시 써주어야 함.
* 최근에 뽐뿌 site가 이런 방법으로 해킹 당해서 이슈가 되었었음.
