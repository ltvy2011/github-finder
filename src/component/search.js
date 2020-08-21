import React, { useState } from 'react';
import { Container, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { search } from './../action/search';

function Search() {
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();

    const onChange = ({ target: { value } }) => {
        setKeyword(value);
    };

    const onSearch = (event) => {
        event.preventDefault();
        const action = search(keyword);
        dispatch(action);
    };

    return (
        <Container onSubmit = {onSearch}>
            <Form>
                <FormGroup className="d-flex my-4">
                    <FormControl type="text" onChange={onChange} value={keyword} placeholder="Enter a Github username">
                    </FormControl>
                    <Button variant="primary" type="submit" onClick={onSearch}>
                        Search
                    </Button>
                </FormGroup>
            </Form>
        </Container>
    );
}

export default Search;
