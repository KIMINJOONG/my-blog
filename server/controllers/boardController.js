import routes from "../routes";

export const home = (req, res) => {
    console.log(req);
    res.render("home");
};