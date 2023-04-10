import Link from 'next/link'
import  LookingForCard  from './LookingForCard'
import img1 from '../../../public/1.png'
import img2 from '../../../public/2.png'
import img3 from '../../../public/3.png'
import img4 from '../../../public/4.png'

const index = () => {

  const options = [
    {
      img: img1,
      title: 'Membresía de coworking',
      description: 'Hot desks, salas, cabinas telefónicas y más',
      peopleCapacity: 'Mas de 1'
    },
    {
      img: img2,
      title: 'Oficina Privada',
      description: 'Oficinas listas cona menidades compartidas',
      peopleCapacity: '1-20+'
    },
    {
      img: img3,
      title: 'Excecutive Office',
      description: 'Oficinas de primer nivel con amenidades privadas',
      peopleCapacity: '1-100'
    },
    {
      img: img4,
      title: 'Sala de reuniones',
      description: 'Salas privadas que se pueden reservar por hora',
      peopleCapacity: '1-20'
    },
  ]
  return (
    <section className='looking-for'>
      <div className='looking-for__container'>
        <div className='looking-for__row'>
          <h1 className='looking-for__title'>¿Qué estás buscando?</h1>
          <Link className='looking-for__link' href={'/'}>Ver todas las soluciones</Link>
        </div>
        <div className='looking-for__row'>
          {options.map((option, i) => (
            option && <LookingForCard key={i} option={option} />
          ))}
        </div>
      </div>
    </section>
  )
}
export default index
