import React from 'react'
import Figure from 'react-bootstrap/Figure';

interface ICardProps {
  url: string,
}

const PhotoCard = ({ url }: ICardProps) => {
  return (
    <a href={url}>
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          src={url}
        />
      </Figure>
    </a>
  )
}

export default PhotoCard