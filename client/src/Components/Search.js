import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const SearchForm = styled.form``;
const SearchInput = styled.input``;
const SearchButton = styled.button``;

const Search = ({ onSearchTextChange, onSubmitSearch }) => (
    <Container>
        <SearchForm onSubmit={ onSubmitSearch }>
            <SearchInput 
                name="searchTerm" 
                onChange={ onSearchTextChange } 
                placeholder={'검색 할 내용을 입력해주세요.'} />
            <SearchButton onClick={ onSubmitSearch }>검색</SearchButton>
        </SearchForm>
    </Container>    
);

export default Search;