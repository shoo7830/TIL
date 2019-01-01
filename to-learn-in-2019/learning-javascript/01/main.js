$(document).ready(function() {
    'use strict';

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // 가운데 초록 색 원 출력
    // var c = Shape.Circle(200, 200, 50);
    // c.fillColor = 'green';

    // 바둑판 형태로 초록색 원 출력
    // var c;
    // for(var x=25; x<400; x+=50) {
    //     for(var y=25; y<400; y+=50) {
    //         c = Shape.Circle(x, y, 20);
    //         c.fillColor = 'green';
    //     } 
    // }

    // 자유롭게 그리기
    // var tool = new Tool();
    // tool.onMouseDown = function(event) {
    //     var c = Shape.Circle(event.point, 20);
    //     c.fillColor = 'green';
    // }

    // 가운데에 까만 원 만들고 흰색 글씨 가운데에 출력
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    paper.view.draw();
    console.log('main.js loaded');
});
