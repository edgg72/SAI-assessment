import { NewBadge } from "../../assets/NewBadge";

export const Column = ({ column }) => {
  return (
    <div className="footer__column">
      <p className="footer__column footer__column__title">{column.title}</p>
      {column.contentArray.map((el, index) => (
        <div key={index} className="footer__column__row">
          <p>{el.name}</p>
          {el.isNew ? <NewBadge /> : null}
        </div>
      ))}
    </div>
  );
};
