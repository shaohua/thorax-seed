new (Backbone.Router.extend({
  routes: module.routes,
  index: function () {
    console.log('routers-todo.js');
    var view = new Application.Views['todos/index']();
    Application.setView(view);
  }
}));