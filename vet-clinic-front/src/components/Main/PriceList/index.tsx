import CardList from "../../UI/CardList";
import HorizontalCard from "../../UI/HorizontalCard"
import "./index.css";
import { useState, useEffect } from "react";

interface Values {
  name: string,
  price: number
}

interface Prices {
  cardName: string,
  values : Values[],
  cardImage: string
}

const PriceList = () => {
  const [prices, setData] = useState<Prices[]>([]);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('/api/price');
      const data: Prices[] = await response.json();
      setData(data);
    } catch (error: any) {
      setError(error.message);
    }
  }
  fetchData();
  }, []);

const PricePage = prices.map((item) => <CardList cardContent={item} key={item.cardName + item.values.length} />)

const PricePageHorisontal = prices.map((item) => <HorizontalCard cardContent={item} key={item.cardName + item.values.length} />)


  return (
    <div className="price-page">
      <h4 className="page-header price-page__header">Our prices</h4>
      <div className="price-page__content">
        {PricePage}
      </div>
      <div className="horizontal-pricelist">
        {PricePageHorisontal}
      </div>
    </div>
  )
}

export default PriceList;
