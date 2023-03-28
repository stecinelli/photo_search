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

const SmallSearch = ({ wordToSearch , setWordToSearch, setPagActive, getPhotos}: ISearchProps) => {
  const getWordToSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWordToSearch(e.target.value)
  }

  const handleSearchButton = () => { 
    getPhotos();
    setPagActive(1);
  }

  return (
    <Container className='d-flex flex-column ps-0 pb-3 mt-5 mb-5 border-bottom'>
      <Form className='d-flex flex-row justify-content-around align-items-center'>
        <Form.Group className="mb-3 flex-fill d-flex justify-content-around flex-row align-items-center" controlId="formBasic">
          <Form.Label className='display-6 w-100 m-0'>Photo Search</Form.Label>
          <Form.Control
            type="text"
            className='flex-fill flex-shrink-1'
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
          className='mb-3 ms-3'
          type="button"
          onClick={handleSearchButton}
        >
          Find
        </Button>
      </Form>
    </Container>
  )
}

export default SmallSearch