import "./BackgroundCardList.css"

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


const BackgroundCardList = (props: CardProps) => {
  const {values, cardName} = props.cardContent

  const listCards = values.map((item: ItemContent) => <div className="background-price-item" key={item.name}><p>{item.name} - {item.price}🪙</p></div>)


  return (
    <div className="background-list-card">
      <div className="background-list-card-content">
        <div className="background-list-card__header">
          <h6 className="background-card-header__text">{cardName}</h6>
        </div>
        <div className="background-card-content__items">
          {listCards}
        </div>
      </div>
    </div>
  )
}

export default BackgroundCardList;