import React from 'react';
import { Col, Card } from 'react-bootstrap';
// import axios from 'axios';
import {
    Link
} from 'react-router-dom';
function RepoItem({repo, owner}) {
    return (
        <Col xs={6} className=" mb-3">
            <Card className="h-100">
                <Card.Body>
                    <Link to={`/commits/${owner}?repoName=${repo.name}`}>
                        <Card.Title>
                            {repo.name}
                        </Card.Title>
                    </Link>
                    <Card.Text>
                        {repo.description}
                    </Card.Text>
                    <div className="d-flex">
                        <span className="d-flex align-items-center mr-2">
                            <svg aria-hidden="true" data-prefix="fas" data-icon="star" width="14" height="14" className="svg-inline--fa fa-star fa-w-18 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                            {repo.stargazers_count}
                        </span>
                        <span className="d-flex align-items-center">
                            <svg aria-hidden="true" data-prefix="fas" data-icon="exclamation-circle" width="14" height="14" className="svg-inline--fa fa-exclamation-circle fa-w-16 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>{repo.open_issues_count}
                        </span>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default RepoItem;
