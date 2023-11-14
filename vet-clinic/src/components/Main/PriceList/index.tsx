import { priceList } from "../../../mockData/price-list";
import CardList from "../../UI/CardList";
import "./index.css";

const PriceList = () => {
const PricePage = priceList.map((item) => <CardList cardContent={item} />)

  return (
    <div className="price-page">
      <h4 className="page-header price-page__header">Our prices</h4>
      <div className="price-page__content">
        {PricePage}
      </div>
    </div>
  )
}

export default PriceList;
