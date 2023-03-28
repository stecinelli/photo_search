import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

interface ISearchProps {
  wordToSearch: string,
  setWordToSearch: React.Dispatch<React.SetStateAction<string>>,
  setPagActive: React.Dispatch<React.SetStateAction<number>>,
  getPhotos: () => void,
}

const Search = ({ wordToSearch , setWordToSearch, setPagActive, getPhotos}: ISearchProps) => {

  const getWordToSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWordToSearch(e.target.value)
  }

  const handleSearchButton = () => { 
    getPhotos();
    setPagActive(1);
  }

  return (
    <Container 
      className='d-flex flex-column justify-content-center align-items-center border-bottom pb-5 pt-5'
      style={{
        position: 'absolute', left: '50%', top: '30%',
        transform: 'translate(-50%, -50%)'
      }}>
      <Form className='d-flex flex-row justify-content-between align-items-end'>
        <Form.Group className="mb-3" controlId="formBasic">
          <Form.Label 
            className='display-3 mb-5 border-bottom'
            lg={2}
            >
            Photo Search
          </Form.Label>
          <Form.Control
            type="text"
            size="lg"
            placeholder="search"
            value={wordToSearch}
            onChange={getWordToSearch}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSearchButton()
              }
            }}
          />
        </Form.Group>
        <Button 
          variant="primary" 
          size="lg"
          type="button"
          className='mb-3 ms-3'
          onClick={handleSearchButton}
        >
          Find
        </Button>
      </Form>
    </Container>
  )
}

export default Search