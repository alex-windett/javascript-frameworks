$(document).ready(function(){
    /*
    var teamObserverableArray = ko.observableArray([
        {id: 1, name:"Alex", sport: "football"},
        {id: 2, name:"John", sport: "cricket"},
        {id: 3, name:"Pete", sport: "handball"},
        {id: 4, name:"Bob", sport: "cycling"},
        {id: 5, name:"Jim", sport: "rugby"}
    ]);

    var teamMemberModel = {
        name: ko.observable("Alex"),
        sport: ko.observable("Rugby")
    };

    ko.applyBindings({
        team: [
            {id: 1, name:"Alex", sport: "football"},
            {id: 2, name:"John", sport: "cricket"},
            {id: 3, name:"Pete", sport: "handball"},
            {id: 4, name:"Bob", sport: "cycling"},
            {id: 5, name:"Jim", sport: "rugby"}
        ]
    });
    */
    
    var teamView = function(teamMembers){
        var self = this;

        self.members = ko.observableArray([
            {id: 1, name:"Alex", sport: "football"},
            {id: 2, name:"John", sport: "cricket"},
            {id: 3, name:"Pete", sport: "handball"},
            {id: 4, name:"Bob", sport: "cycling"},
            {id: 5, name:"Jim", sport: "rugby"}
        ])
    }

    // A single team member
    var teamMember = function(name, sport) {
        this.name = ko.observable(name);
        this.sport = ko.observable(sport)
    }

    return teamMember;
});
