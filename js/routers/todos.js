new (Backbone.Router.extend({
  routes: module.routes,
  index: function () {
    var collection = new Application.Collection([{
      title: 'Fish Taco',
      done: true
    }])

    console.log('routers-todo.js');
    var view = new Application.Views['todos/index']({
      collection: collection
    });
    Application.setView(view);
  }
}));