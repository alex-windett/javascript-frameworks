$(document).ready(function(){

    var team = [
      {id: 1, name:"Alex", sport: "football"},
      {id: 2, name:"John", sport: "cricket"},
      {id: 3, name:"Pete", sport: "handball"},
      {id: 4, name:"Bob", sport: "cycling"},
      {id: 5, name:"Jim", sport: "rugby"},
    ];

    var MemberModel = Backbone.Model.extend({
        defaults: {
          name: 'sam',
          sport: 'tennis'
        }
      });

    var MembersCollection = Backbone.Collection.extend({
        model: MemberModel
    });

    var MembersCollection = new MembersCollection();

    var MemberView = Backbone.View.extend({
        tagName: "div",
        className: "member-container",
        template: $('#team-template').html(),

        render: function(){
            var tmpl = _.template(this.template)

            for ( i in this.model ) {
                    console.log(i)
                    this.$el.html(tmpl(this.model[i].toJSON()))
            }

            return this
        }
    });

    // Creat a new model for each in the team object
    var teamMembers = {

        init: function(){

            members = []

            for (var i in team) {
                memberName = team[i].name;
                memberSport = team[i].sport;

                member = new MemberModel({
                    name: memberName,
                    sport: memberSport
                })
                members.push(member);
            }
        }
    }

    var App = Backbone.View.extend({
        el: '#app',

        initialize: function(){
            this.area = $('.team-app');

            teamMembers.init()

            $.each(members, function(member, i){
                var view = new MemberView({
                    model: members
                });
                
                $('.team-app').append(view.render().el)
            }, this)
        },
    });

    new App();

    // Create a new team member
    // var NewMemberModel = new MemberModel({
    //     name: "A new member",
    //     sport: "An interesting sport"
    // });
    //
    // MemberView = new MemberView({
    //     model: NewMemberModel
    // });

    // $('.team-app').html(MemberView.render().el)

});
