import "./CardList.css"

interface CardProps {
  cardContent: CardItem
}

interface CardItem {
  cardName: string
  values: ItemContent[],
}

interface ItemContent {
  name: string,
  price: number
}


const CardList = (props: CardProps) => {
  const listItems = props.cardContent?.values
  const listHeader = props.cardContent?.cardName

  const listCardsNames = listItems.map((item: ItemContent) => <div className="price-item" key={item.name}><p>{item.name}</p></div>)

  const listCardsPrices =  listItems.map((item: ItemContent) => <div className="price-item" key={item.name}><p>{item.price}🪙</p></div>)


  return (
    <div className="card">
      <div className="card-image">
        <img src="images\cat-about.jpg" alt="card photo" />
      </div>
      <div className="card-header">
        <h6 className="card-header__text">{listHeader}</h6>
      </div>
      <div className="card-content">
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
