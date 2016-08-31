# 일반적인 css에 대해 알게된 점

## Remove IE10's “clear field” X button on certain inputs?
* solution
``` css
.someinput::-ms-clear {
    display: none;
}
```
