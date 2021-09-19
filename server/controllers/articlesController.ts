const articles = require('./articles/lib')

module.exports = function (app) {
    // Route GET /user/signup
    app.get('/', articles.getArticle)
    app.post('/', articles.addArticle)
    app.put('/', articles.editArticle)
    app.delete('/', articles.deleteArticle)
    app.put('/archived', articles.archivedArticle)
    app.put('/repair', articles.repairArticle)
}