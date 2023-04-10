
import Image from 'next/image'
import Link from 'next/link'

import promotionImg from '../../public/promotion-img.jpg'
const Promotions = () => {
  return (
    <section className='promotions' >
      <div className='promotions__container'>
        <Image alt={'promotion'} height={427} width={760} src={promotionImg} />
        <div className='promotions__info'>
          <div>
            <h1 className='promotions__title'>
              Obtén un 25 % de descuento en el plan WeWork All Access Plus con esta oferta especial
            </h1>
            <p className='promotions__description'>
              Accede a espacios de trabajo cerca de ti con un descuento del 25 % en la cuota del plan de membresía mensual Plus de WeWork All Access durante 5 meses. Se aplican términos y condiciones.
            </p>
            <Link className='promotions__link' href={'/'}>
              Obtén más información
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Promotions
