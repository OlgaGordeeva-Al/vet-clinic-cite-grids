import { priceList } from "../../../mockData/price-list"
import CardList from "../../UI/CardList"

const PriceList = () => {
const PricePage = priceList.map((item) => <CardList cardContent={item} />)

  return (
    <div className="price-page">
      {PricePage}
    </div>
  )
}

export default PriceList;
