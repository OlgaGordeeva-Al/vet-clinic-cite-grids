import "./index.css"
import Card from "../../UI/Card"
import { useState, useEffect } from "react";

interface ServiceData {
  svg: string;
  header: string;
  text: string;
}


function AboutUs() {

  const [services, setData] = useState<ServiceData[]>([]);
  const [error, setError] = useState<string | null>(null);

  // async function fetchData(): Promise<ServiceData[]> {
  //   const response = await fetch('/api/');
  //   const data = await response.json();
  //   return data.servisesData;
  // }

  useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('/api/');
      const data: ServiceData[] = await response.json();
      setData(data);
    } catch (error: any) {
      setError(error.message);
    }
  }
  fetchData();
  }, []);


  const cardBlock = services.map(item => <Card key={item.svg} cardImage={item.svg} cardHeader={item.header} cardDescription={item.text}></Card>)
  
    return (
      <>
        <div className="about">
          <div className="about-text">
            <h4 className="page-header">Welcome to our brand new clinic!</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae rerum sint, laboriosam officia iusto illo exercitationem dolore dolorum quidem, quas commodi minima pariatur ad corporis facere saepe perspiciatis laudantium:
            </p>
          </div>
          <img src="images/cat-about.jpg" alt="cat" className="about-img" />
        </div>
        <div className="departments-head">
          <h4 className="page-header">
            Our departments available now!
          </h4>
        </div>
        <div className="about-services">
          { cardBlock }
        </div>
      </>
    );
  }

export default AboutUs;