function home(req, res) {
  res.send("Home page (from controller)");
}

function about(req, res) {
  res.send("About page (from controller)");
}

function contact(req, res) {
  res.send("Contact page (from controller)");
}

module.exports = {
  home,
  about,
  contact,
};

