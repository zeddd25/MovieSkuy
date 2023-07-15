import { NavLink } from "react-router-dom";

// komponent dropdown list untuk navbar
const DropdownList = ({ items }) => {
  return (
    <div className="dropdown_list">
      <span>
        {items.map((item) => (
          <NavLink to={item.url} className="text_dropdown" key={item.id}>
            <li>{item.icon} {item.label}</li>
          </NavLink>
        ))}
      </span>
    </div>
  );
};

export default DropdownList;