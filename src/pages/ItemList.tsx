import { Link } from "react-router-dom";
import { items } from "../data/items";

export default function ItemList() {
  return (
    <section>
      <h1 className="page-title">All Items</h1>
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id} className="item-card">
            <Link to={`/items/${item.id}`} className="item-link">
              <h2 className="item-title">{item.title}</h2>
              <p className="item-summary">{item.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
