import React from 'react'
import Container from 'react-bootstrap/Container';
import Pagination from './Pagination';
import PhotoCard from './PhotoCard';
import { Basic } from 'unsplash-js/dist/methods/photos/types';

interface IGalleryProps {
  pagActive: number,
  setPagActive: React.Dispatch<React.SetStateAction<number>>,
  photoList: Basic[],
}

const Gallery = ({ photoList, pagActive, setPagActive }: IGalleryProps) => {
  return (
    <Container className='d-flex flex-wrap flex-row justify-content-around align-items-start'>
      <Container className='d-flex flex-wrap flex-row justify-content-around align-items-start'>
        {photoList &&
          photoList.map((photo: Basic) => <PhotoCard url={photo.urls.regular} />)
        }
      </Container>
      <Pagination pagActive={pagActive} setPagActive={setPagActive} />
    </Container>
  )
}

export default Gallery