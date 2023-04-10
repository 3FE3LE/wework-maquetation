
import { useState } from 'react'

import Link from 'next/link'
const Alert = () => {

  const [closeAlert, setCloseAlert] = useState(false)
  return (
    <>
      {!closeAlert && <div className='alert'>
        <Link href={'/'}>
          <div className='alert__container'>
            <button onClick={() => setCloseAlert(true)} className='alert__close-button' >x</button>
            <span className='alert__info'>Accede a espacios de trabajo cerca de ti con un descuento del 25 % en la cuota de membresía mensual de WeWork All Access Plus durante 5 meses. Se aplican términos y condiciones.</span><span className='alert__info--link'>Obtén más información</span>
          </div>
        </Link>
      </div>}
    </>
  )
}
export default Alert
