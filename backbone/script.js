$(document).ready(function(){

    var team = [
      {id: 1, name:"Alex", sport: "football"},
      {id: 2, name:"John", sport: "cricket"},
      {id: 3, name:"Pete", sport: "handball"},
      {id: 4, name:"Bob", sport: "cycling"},
      {id: 5, name:"Jim", sport: "rugby"},
    ];

    var Member = Backbone.Model.extend({
        defaults: {
          name: 'sam',
          sport: 'tennis'
        }
      });

    var Members = Backbone.Collection.extend({
        model: Member
    });

    var Members = new Members();

    var MemberView = Backbone.View.extend({
        tagName: "div",
        className: "member-container",
        template: $('#team-template').html(),

        render: function(){
            var tmpl = _.template(this.template)
            this.$el.html(tmpl(this.model.toJSON()))

            return this
        }
    });

    // Create a new team member
    var member = new Member({
        name: "A new member",
        sport: "An interesting sport"
    });

    memberView = new MemberView({
        model: member
    });

    $('.team-app').html(memberView.render().el)

});
