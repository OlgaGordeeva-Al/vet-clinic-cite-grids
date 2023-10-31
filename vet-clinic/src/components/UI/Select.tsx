import { Link } from "react-router-dom"


interface Option {
  name: string,
  val: string
}

interface Props {
  options: Option[]
}

const Select = (props: Props) => {
  const optionContent = props.options.map((item: Option) => <option key={item.val + item.name} value={item.val}><a href={item.val}>{item.name}</a></option>)
  console.log(optionContent);
    return (
      <select className="select">
        {optionContent}
      </select>
    );
  }

export default Select;