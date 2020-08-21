import React from 'react';
import {
    Link
} from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

function UserItem({ user }) {
    
    return (
        <Col>
            <Link to={`/repos/${user.login}?avatarUrl=${encodeURIComponent(user.avatar_url)}`}>
                <Card className="non_border mb-3">
                    <Card.Body className="p-0">
                        <img src={user.avatar_url} className="w-100 mb-3 px-4" alt="" />
                        <Card.Title className="text-truncate text-dark text-center text-small m-0">
                            {user.login}
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
}

export default UserItem;
