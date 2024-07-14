
export const Column = ({ column }) => {
  return (
    <div className="footer__column">
      <p className="footer__column footer__column__title">{column.title}</p>
      {column.contentArray.map((el, index) => <p key={index}>{el}</p>)}
    </div>
  )
}