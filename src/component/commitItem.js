import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

function CommitItem({commit}) {
    return (
        <ListGroupItem className="d-flex justify-content-between">
            <div className="d-flex flex-column">
                <span>
                    {commit.commit.message}
                </span>
                <span className="text-small text-muted">
                    committed by {commit.commit.author.name}
                </span>
            </div>
            <a href={commit.html_url} className="btn btn-outline-primary">
                {commit.sha.slice(0, 7)}
            </a>
        </ListGroupItem>
    );
}

export default CommitItem;
