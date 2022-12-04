const fakeUser = {
  username: "Nicolas",
  loggedIn: false,
};
//  view name, 템플릿에 보낼 변수
export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Second Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
    {
      title: "Third Video",
      rating: 5,
      comments: 2,
      createdAt: "2 minutes ago",
      views: 59,
      id: 1,
    },
  ];
  res.render("home", { pageTitle: "Home", videos });
};
export const upload = (req, res) => res.send("upload");
export const search = (req, res) => res.send("Search");
export const see = (req, res) => res.render("watch", { potato: "Daniel" });
export const edit = (req, res) => {
  res.render("Edit");
};
export const deleteVideo = (req, res) => {
  res.send("DeleteVideo");
};
