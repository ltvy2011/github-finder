import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar'

import useUserList from '../hooks/useUserList';
import UserItem from './userItem';

function UserList() {
    const [currentPage, setCurrentPage] = useState(1);
    const keyword = useSelector(state => state.keyword.keyword);
    const userLists = useUserList(keyword, currentPage);
    // const { items } = userList;
    // const userLists = useSelector(state => state.userList);
    const { userList, loading } = userLists;
    const { items, total_count } = userList;

    const showUsers = () => {
        let result = null;
        if (items.length > 0) {
            result = items.map((user, index) => {
                return (<UserItem
                        key={user.id}
                        user={user}
                    />);
            });
        }

        return result;
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
    };

    return (
        <Container className="d-flex align-items-center flex-column">
            {loading ? <LoadingBar progress={40} /> : <LoadingBar progress={100}/>}
            <Row xs={6} className="w-100">
                {showUsers()}
            </Row>
            {items.length > 0 ?
                <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={Math.ceil(total_count / 30)}
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
                /> : ''
            }
        </Container>
    );
}

export default UserList;
