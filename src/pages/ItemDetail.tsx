import { Link, useParams } from "react-router-dom";
import { getItem } from "../data/items";

export default function ItemDetail() {
  const { id } = useParams<{ id: string }>();
  const item = id ? getItem(id) : undefined;

  if (!item) {
    return (
      <section>
        <p className="muted">Item not found.</p>
        <Link to="/" className="back-link">← Back to list</Link>
      </section>
    );
  }

  return (
    <section>
      <Link to="/" className="back-link">← Back to list</Link>
      <h1 className="page-title">{item.title}</h1>
      <p className="item-summary">{item.summary}</p>
      <p className="item-description">{item.description}</p>
    </section>
  );
}
