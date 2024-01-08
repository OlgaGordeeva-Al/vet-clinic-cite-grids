import "./CardList.css"

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


const CardList = (props: CardProps) => {
  const {values, cardName, cardImage} = props.cardContent

  const listCardsNames = values.map((item: ItemContent) => <div className="price-item" key={item.name}><p>{item.name}</p></div>)

  const listCardsPrices =  values.map((item: ItemContent) => <div className="price-item" key={item.name}><p>{item.price}🪙</p></div>)


  return (
    <div className="list-card">
      <div className="list-card-image">
        <img src={cardImage} alt="card photo" />
      </div>
      <div className="list-card-header">
        <h6 className="card-header__text">{cardName}</h6>
      </div>
      <div className="list-card-content">
        <div className="card-content__names">
          {listCardsNames}
        </div>
        <div className="card-content__prices">
          {listCardsPrices}
        </div>
      </div>
    </div>
  )
}

export default CardList;
