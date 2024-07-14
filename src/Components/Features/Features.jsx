import './Features.scss'

export const Features = ({title, subtitle, paragraph}) => {
  return (
    <section className="features">
      <h4>{title}</h4>
      <h3>{subtitle}</h3>
      <p>{paragraph}</p>
    </section>
  )
}