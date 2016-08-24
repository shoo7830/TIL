1. Uncaught TypeError: Super expression must either be null or a function, not undefined

solution : 대소문자를 확인해본다.
```javascript
class App extends React.component {...} // (x)

class App extends React.Component {...} // (o)
```

2. React Fundamentals: Precompile JSX

```
sudo npm install bable-cli -g
```

```
babel --presets react App.js -o dist.js --watch
```

라고 하면 실시간으로 JSX를 변환시킨다.
