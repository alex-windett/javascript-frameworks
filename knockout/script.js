$(document).ready(function(){


    var teamViewModel = function() {
        var self            = this;
        self.teamlist       = ko.observableArray([]);


        var team = [];
        var cat = [];

        // var viewModel = {
        //     teamMembers: ko.observableArray(team),
        //     teamCats: ko.observableArray(cat)
        // };

        function teamCatsModal() {
            self.teamCats = ko.observableArray(cat)

            $.ajax({
                url: 'http://www.9bar.com/wp-json/wp/v2/bf-team-cat',
                dataType: 'json',
                success: function (data) {
                    self.teamCats(data);
                }
            });

            toggleCat = function(obj, event) {

            }
        }

        function teamMembersModal() {
            self.teamMembers = ko.observableArray(team)

            $.ajax({
                url: 'http://www.9bar.com/wp-json/wp/v2/bf-team',
                dataType: 'json',
                success: function (data) {
                    self.teamMembers(data);
                }
            });
        }

        // Have to bind different Modals to different areas of the DOM
        ko.applyBindings( new teamCatsModal(), document.getElementById('teamCat') );
        ko.applyBindings( new teamMembersModal(), document.getElementById('teamList') );

        $.getJSON("http://jsonplaceholder.typicode.com/posts", function(data) {
            // Now use this data to update your view models,
            // and Knockout will update your UI automatically
            teamlist.push(data)
            console.debug(self.teamlist + ' inside ajax')
        }).success(function(){
            console.debug(self.teamlist)
        })
        //       ko.applyBindings({ team });
    };

    var teamView = function(teamMembers){
        var self = this;

        self.members = ko.observableArray([
            {id: 1, name:"Alex", sport: "football"},
            {id: 2, name:"John", sport: "cricket"},
            {id: 3, name:"Pete", sport: "handball"},
            {id: 4, name:"Bob", sport: "cycling"},
            {id: 5, name:"Jim", sport: "rugby"}
        ])
    };

    var members = ko.observableArray([
        {id: 1, name:"Alex", sport: "football"},
        {id: 2, name:"John", sport: "cricket"},
        {id: 3, name:"Pete", sport: "handball"},
        {id: 4, name:"Bob", sport: "cycling"},
        {id: 5, name:"Jim", sport: "rugby"}
    ])

    // A single team member
    var teamMember = function(members) {
        this.name = ko.observable(members.name);
        this.sport = ko.observable(members.sport)
    }

    return teamMember(members);

    // return teamViewModel();
});
