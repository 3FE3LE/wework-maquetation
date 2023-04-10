import Image from 'next/image'
import { FormContact } from './FormContact'
import { contactImg } from '../../../public/contact-us.jpg'

export const ConctactForm = () => {
  return (
    <section className='contact-us'>
      <div className="contact-us__container">
        <Image className='contact-us__img' height={740} width={1320} src={contactImg} />
        <div className='contact-us__content'>
          <h1 className='contact-us__title'>
            Te ayudamos a encontrar tu espacio de trabajo ideal
          </h1>
          <p className='contact-us__description' >Completa el formulario y un miembro del equipo de WeWork se pondrá en contacto contigo a la brevedad.</p>
          <FormContact/>
        </div>
      </div>
    </section>
  )
}
