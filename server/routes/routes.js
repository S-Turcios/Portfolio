const contactController = require("../controller/controller")

module.exports = (app) => {
    app.get("/api/contact", contactController.getAll);
    app.post("/api/contact", contactController.create);
}