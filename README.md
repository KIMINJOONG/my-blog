#블로그 만들기

##Pages:

- [x] Home
- [x] manageLogin
- [x] manageJoin
- [x] Search
- [x] board Upload
- [x] Board Detail
- [x] Edit Board
- [x] images upload
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

- 이부분에서 newBoard에 이미지 objectid를 푸시해주어야하는데 Promise.all을 사용하지 않아서 map이 다 돌기도 전에 save함수가 실행이 되었다.
스택에 쌓인게 먼저 실행되는게 당연한건데...자바스크립트는 기다리게 하지않으면 기다려 주지않는 언어라는걸 잊지말자!

- mongoose의 populate를 헷갈린점 mongoose에서 조인처럼 활용을 해야할때 해당 모델에 objectId를 넣고 ref로 참조를 시켜준다음 해당 모델의 어떤 값을
들고올때 .populate('참조모델')을 해주면 이미 인서트되있는 objectId로 참조모델에 가서 매칭시켜주는 역할을하는데 정확히 이해를 못하고 쓰니 시간이 걸렸다.
