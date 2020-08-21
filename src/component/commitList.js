import React from 'react';
import CommitItem from './commitItem';
import { ListGroup, Container } from 'react-bootstrap';
import useCommitsList from './../hooks/useCommitsList';
import LoadingBar from 'react-top-loading-bar';
import {
    useParams,
    useLocation
} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


function CommitList() {
    // const [commitList, setCommitList] = useState([]);
    let {owner} = useParams();
    let query = useQuery();
    let repoName = query.get("repoName");

    const commitsList = useCommitsList(owner, repoName);

    const items = commitsList.commitsList;
    const loading = commitsList.loading;

    const showCommits = () =>{
        var result = null;
        if(items.length > 0){
            result = items.map((commit, index) => {
                return <CommitItem
                        key = {index}
                        commit = {commit}
                />
            });
        }
        return result;
    };

    return (
        <Container>
            {loading ? <LoadingBar proress={40}/> : <LoadingBar progress={100}/>}
            <ListGroup>
                <h2>
                    {owner}/{repoName}
                </h2>
                <span className="mb-4">
                    Lastest commit from branch master
                </span>
                {showCommits()}
            </ListGroup>
        </Container>
    );
}

export default CommitList;
