#블로그 만들기

##Pages:

- [x] Home
- [x] manageLogin
- [x] manageJoin
- [x] Search
- [x] board Upload
- [x] Board Detail
- [x] Edit Board
- [ ] images upload
- [ ] use markdown edit


## 내가 실수한것
reducer에서
`default: {
    return {
        state
    }
}`
로 해버린점....
...state를 해줬어야했는데 이것때문에 다른 case문에서 ...state를 해도 값이 이상하게 엉켜버리는 현상이 있었다.....

image upload할때 imageFormData를 그대로 액션에 던져줘야 매개변수에서 그대로 받을텐데
`const data = {
    data: imageFormData
}`
이런식으로 객체를 만들어서 액션에 data를 던져주었는데 이렇게 날리면 매개변수.data 이런식으로 받아야했는데 이런부분을 전혀 고려하지않은점.