import './Hero.scss';

export const Hero = ({title, paragraph, buttonText}) => {
  return (
    <section className="hero">
      <div className='hero__content'>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        <button>{buttonText}</button>
      </div>
    </section>
  )
}