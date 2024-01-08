import "./HorizontalCard.css"

interface CardProps {
  cardContent: CardItem
}

interface CardItem {
  cardName: string
  cardImage: string
  values: ItemContent[],
}

interface ItemContent {
  name: string,
  price: number
}


const HorizontalCard = (props: CardProps) => {
  const {values, cardName, cardImage} = props.cardContent

  const listCards = values.map((item: ItemContent) => <div className="price-item" key={item.name}><p>{item.name}-{item.price}🪙</p></div>)


  return (
    <div className="horizontal-list-card">
      <div className="horizontal-list-card-image">
        <img src={cardImage} />
      </div>
      <div className="horizontal-list-card-content">
        <div className="horizontal-list-card__header">
          <h6 className="horizontal-card-header__text">{cardName}</h6>
        </div>
        <div className="horizontal-card-content__items">
          {listCards}
        </div>
      </div>
    </div>
  )
}

export default HorizontalCard;
