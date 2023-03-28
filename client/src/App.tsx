import React, { useEffect, useState } from 'react';
import { createApi } from "unsplash-js";

import Container from 'react-bootstrap/Container';
import Search from './Components/Search';
import SmallSearch from './Components/SmallSearch';
import Gallery from './Components/Gallery';
import { Basic } from 'unsplash-js/dist/methods/photos/types';

import './App.css';


function App() {
  const [isFirst, setIsFirst] = useState<Boolean>(true)
  const [wordToSearch, setWordToSearch] = useState<string>('')
  const [pagActive, setPagActive] = useState<number>(1)
  const [photoList, setPhotoList] = useState<Basic[]>([]);


  const api = createApi({
    accessKey: "LGQxhcqsPRB05XpKLRC6MummBxQ9T9KlL77UGIrgnDI"
  });

  const getPhotos = () => {
    api.search
      .getPhotos({ query: wordToSearch, orientation: "landscape", perPage: 12, page: pagActive })
      .then(data => {
        setPhotoList(data.response!.results);
        console.log(data.response!.results);
      })
      .catch(() => {
        console.log("something went wrong!");
      });

    setIsFirst(false)
  }

  useEffect(() => {
    if (wordToSearch !== '') {
      getPhotos();
    }
  }, [wordToSearch, pagActive])


  return (
    <div className="App">
      {isFirst
        ? <Search
          wordToSearch={wordToSearch}
          setWordToSearch={setWordToSearch}
          getPhotos={getPhotos}
          setPagActive={setPagActive}
        />
        : <Container>
          <SmallSearch
            wordToSearch={wordToSearch}
            setWordToSearch={setWordToSearch}
            getPhotos={getPhotos}
            setPagActive={setPagActive}
          />
          <Gallery
            pagActive={pagActive}
            setPagActive={setPagActive}
            photoList={photoList}
          />
        </Container>
      }
    </div>
  );
}

export default App;
