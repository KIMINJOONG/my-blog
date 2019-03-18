export const postUpload = (req, res) => {
    const {
        body : {
            title
        }
    } = req;
    console.log(title);
    console.log("보드컨트롤러");
};