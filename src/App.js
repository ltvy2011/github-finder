import React from 'react';
import Header from './component/header';
import Logo from './component/headingLogo';
import Search from './component/search';
import UserList from './component/userList';
import RepoList from './component/repoList';
import CommitList from './component/commitList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

function App() {


    return (
        <Router>
            <div className="App">
                <Header/>
                <Route path='/' exact>
                    <Logo/>
                    <Search/>
                    <UserList/>
                </Route>
                <Route path='/repos/:owner'exact>
                    <RepoList/>
                </Route>
                <Route path="/commits/:owner">
                    <CommitList />
                </Route>
            </div>
        </Router>
    );
}

export default App;