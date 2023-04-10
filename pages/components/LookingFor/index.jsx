import Link from 'next/link'
import ListLookingForCards from './ListLookingForCards'

const index = () => {
  return (
    <section className='looking-for'>
      <div className='looking-for__container'>
        <div className='looking-for__row'>
          <h1 className='looking-for__title'>¿Qué estás buscando?</h1>
          <Link className='looking-for__link' href={'/'}>Ver todas las soluciones</Link>
        </div>
        <div className='looking-for__row'>
          <ListLookingForCards />
        </div>
      </div>
    </section>
  )
}
export default index
