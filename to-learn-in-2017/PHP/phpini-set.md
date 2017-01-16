# PHP 짧은 태그 허용하기
* PHP 기본은 `<?php ?>`
* xml에서 `<?  ?>` 을 사용하므로 지양하는게 
* phpinfo.php로 php.ini 위치파악
~~~php
<?php phpinfo(); ?>
~~~

~~~
/etc/php/7.0/apache2/php.ini
~~~

* php.ini 편집
~~~
short_open_tag = On
~~~
