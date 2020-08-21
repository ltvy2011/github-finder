import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import callAPI from '../callAPI';
import {
    useParams,
    useLocation
} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import LoadingBar from 'react-top-loading-bar'


import RepoItem from './repoItem';
import useRepoList from '../hooks/useRepoList';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}


function RepoList() {
    let { owner } = useParams();
    let query = useQuery();
    let avatarURL = query.get("avatarUrl");

    const [currentPage, setCurrentPage] = useState(1);
    const repoList = useRepoList(owner, currentPage);
    const [totalPage, setTotalPage] = useState('');
    const loading = repoList.loading;

    callAPI(`users/${owner}/repos`).then(res =>{
        setTotalPage(Math.ceil(res.data.length/10));
    });


    const showRepos = () => {
        const items = repoList.repoList;
        var result = null;
        if (items.length > 0) {
            result = items.map((repo, index) => {
                return <RepoItem
                    key={index}
                    repo={repo}
                    owner={owner}
                />
            });
        }
        return result;
    }

    const handlePageClick = (event) => {
        setCurrentPage(event.selected+1);
    };
    return (
        <Container>
            <Row>
                {loading ? <LoadingBar proress={40}/> : <LoadingBar progress={100}/>}
                <Col xs={3}>
                    <Card className="non_border">
                        <Card.Body>
                            {}
                            <img src={`${decodeURIComponent(avatarURL)}`} className="w-100 mb-2" alt="" />
                            <Card.Title className="text-center">
                                {owner}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={9} className="d-flex flex-column align-items-center">
                    <Row>
                        {showRepos()}
                    </Row>
                    {totalPage ? <ReactPaginate
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        breakLabel={"..."}
                        pageCount={totalPage}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        containerClassName={"pagination"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        activeClassName={"active"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        onPageChange={handlePageClick}
                    /> : ''}
                    
                </Col>
            </Row>
        </Container>
    );
}

export default RepoList;
