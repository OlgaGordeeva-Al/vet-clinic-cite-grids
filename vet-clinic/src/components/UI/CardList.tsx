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

  const listCards = listItems.map((item: ItemContent) => <div className="price-item"><p>{item.name} – {item.price}🪙</p></div>)
  return (
    <div className="card">
      <h6 className="card-header">{listHeader}</h6>
      {listCards}
    </div>
  )
}

export default CardList;
