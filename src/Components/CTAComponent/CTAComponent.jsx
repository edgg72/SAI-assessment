import './CTAComponent.scss';

export const CTAComponent = ({title, paragraph, pButtonText, sButtonText}) => {
  return (
    <section className="cta">
      <div>
        <p className='cta__title'>{title}</p>
        <p className='cta__paragraph'>{paragraph}</p>
      </div>
      <div>
        <button className='cta__button--primary'>{pButtonText}</button>
        <button className='cta__button--secondary'>{sButtonText}</button>
      </div>
  </section>
  )
}