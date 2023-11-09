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
  console.log(props.cardContent)
  const listCards = listItems.map((item: ItemContent) => <div><p>{item.name}</p><p>{item.price}</p></div>)
  return (
    <div className="card">
      <h6 className="card-header">{listHeader}</h6>
      {listCards}
    </div>
  )
}

export default CardList;
