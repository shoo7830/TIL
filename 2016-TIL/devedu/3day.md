#JSON
## 카테고리 구현
~~~ javascript 
function setCategory(seqno, category) {
		$.ajax({
			url:"/assets/get_category.json",
		    data:{seqno:seqno}, 
		    dataType:"JSON", 
		    type:"post",
		    success : function(response) {
		    	appendCategory(response, category);
		    }
		});
	}

	function appendCategory(data, cid)
	{
		var option = "";
		$.each(data, function(k, v) {
			option += "<option value="+v[0]+">"+v[1]+"</option>";
		});
		$('#' + cid).append(option);
	}

	setCategory(0, 'category1');
~~~


## 페이징
### 필수요소
* 총 게시물의 수
* 한 페이지당 출력 게시물 수
* 현재 페이지 번호

### 컨셉


