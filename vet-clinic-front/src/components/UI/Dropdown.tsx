import "./Dropdown.css"
import { Link } from "react-router-dom"


interface Item {
  name: string,
  link: string
}

interface Props {
  items: Item[]
  dropdownName: string
}

const Dropdown = (props: Props) => {
  const itemContent = props.items.map((item: Item) => <div key={item.link + item.name} className="dropdown-link"><Link to={item.link}>{item.name}</Link></div>)

    return (
      <>
      <div className="dropdown">
        <div className="dropdown-name">{props.dropdownName}</div>
        <div className="dropdown-content">
          {itemContent}
        </div>
      </div>
      </>
    );
  }

export default Dropdown;
