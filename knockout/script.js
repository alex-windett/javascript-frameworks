$(document).ready(function(){

    var teamViewModel = function() {
            var self            = this;
            self.teamlist       = ko.observableArray([]);

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
