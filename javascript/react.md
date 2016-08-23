1. Uncaught TypeError: Super expression must either be null or a function, not undefined

solution : 대소문자를 확인해본다.
```javascript
class App extends React.component {...} // (x)

class App extends React.Component {...} // (o)
```
