import "./Card.css"

interface CardProps {
  cardImage: string;
  cardHeader?: string;
  cardDescription: string;
}


const Card = (props: CardProps) => {
  const {cardImage, cardHeader, cardDescription} = props
  return (
    <div className="card">
      <img src={cardImage} alt="card image" className="card-image" />
      <p className="card-header">{cardHeader}</p>
      <p className="card-description">{cardDescription}</p>
    </div>
  )
}

export default Card;