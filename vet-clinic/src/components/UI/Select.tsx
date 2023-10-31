import "./index.css"

interface Option {
  name: string;
  val: number | string;
}

const Select = (options: [Option]) => {
  const optionContent = options.map((item: Option) => <option key={item.val + item.name} value={item.val}>{item.name}</option>)
  console.log(optionContent);
    return (
      <select className="select">
        {optionContent}
      </select>
    );
  }

export default Select;