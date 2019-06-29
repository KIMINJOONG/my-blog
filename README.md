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
- reducer에서
`default: {
    return {
        state
    }
}`
로 해버린점
...state를 해줬어야했는데 이것때문에 다른 case문에서 ...state를 해도 값이 이상하게 엉켜버리는 현상이 있었다.....

- image upload할때 imageFormData를 그대로 액션에 던져줘야 매개변수에서 그대로 받을텐데
`const data = {
    data: imageFormData
}`
이런식으로 객체를 만들어서 액션에 data를 던져주었는데 이렇게 날리면 매개변수.data 이런식으로 받아야했는데 이런부분을 전혀 고려하지않은점.

- 서버에서 멀티파일 업로드를 처리할때

---

`
    if(Array.isArray(fileUrl)){
        const images = await Promise.all(fileUrl.map(async (image) => {
          const newImage = await Image.create({ src : image });
          newBoard.images.push(newImage.id);
          return newImage
        }));
        if(images){
          newBoard.save();
        }
      }
`
---

이부분에서 newBoard에 이미지 objectid를 푸시해주어야하는데 Promise.all을 사용하지 않아서 map이 다 돌기도 전에 save함수가 실행이 되었다.
스택에 쌓인게 먼저 실행되는게 당연한건데...자바스크립트는 기다리게 하지않으면 기다려 주지않는 언어라는걸 잊지말자!
