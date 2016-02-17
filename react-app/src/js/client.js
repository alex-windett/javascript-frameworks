import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';

import CommentBox from './components/CommentBox.js';
import TestDropdown from './components/TestDropdown.js';
import TeamDropdown from './components/TeamDropdown.js';

// import Archives from "./pages/Archives";
// import Featured from "./pages/Featured";
// import Layout from "./pages/Layout";
// import Settings from "./pages/Settings";

const bfTeam    = "http://www.9bar.com/wp-json/wp/v2/bf-team";
const bfTeamCat = "http://www.9bar.com/wp-json/wp/v2/bf-team-cat";

ReactDOM.render(
    <div>
        <TestDropdown />
        <TeamDropdown />
        <CommentBox url='http://9bar.alex.dev/wp-json/wp/v2/bf-team'/>
    </div>,
    document.getElementById('app')
)
