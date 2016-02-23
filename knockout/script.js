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
    */

    var teamViewModel = function() {
            var self            = this;
            self.teamlist   = ko.observableArray();

            self.getTeam = function(){
                $.ajax({
                    type: 'GET',
                    url: 'url',
                    data: "json",
                    success: function(data) {
                        var observableData = ko.mapping.fromJS(data);
                        var array = observableData();
                        self.teamList(array);
                        console.log(data)
                    },
                    error:function(jq, st, error){
                        alert(error);
                    }
                })
            }
    };

    // ko.applyBindings({
    //     team: [
    //         {id: 1, name:"Alex", sport: "football"},
    //         {id: 2, name:"John", sport: "cricket"},
    //         {id: 3, name:"Pete", sport: "handball"},
    //         {id: 4, name:"Bob", sport: "cycling"},
    //         {id: 5, name:"Jim", sport: "rugby"}
    //     ]
    // });

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

    // return teamMember;

    return teamViewModel;
});
