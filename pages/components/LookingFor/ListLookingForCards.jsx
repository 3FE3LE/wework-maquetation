import Image from "next/image"
import img1 from '../../../public/1.png'
import img2 from '../../../public/2.png'
import img3 from '../../../public/3.png'
import img4 from '../../../public/4.png'

const ListLookingForCard = () => {
  const options = [
    {
      img: <Image height={100} width={100} alt={'Membresía de coworking'} className='looking-for__card__img' src={img1} />,
      title: 'Membresía de coworking',
      description: 'Hot desks, salas, cabinas telefónicas y más',
      peopleCapacity: 'Mas de 1'
    },
    {
      img: <Image height={100} width={100} alt={'Oficina Privada'} className='looking-for__card__img' src={img2} />,
      title: 'Oficina Privada',
      description: 'Oficinas listas cona menidades compartidas',
      peopleCapacity: '1-20+'
    },
    {
      img: <Image height={100} width={100} alt={'Excecutive Office'} className='looking-for__card__img' src={img3} />,
      title: 'Excecutive Office',
      description: 'Oficinas de primer nivel con amenidades privadas',
      peopleCapacity: '1-100'
    },
    {
      img: <Image height={100} width={100} alt={'Sala de reuniones'} className='looking-for__card__img' src={img4} />,
      title: 'Sala de reuniones',
      description: 'Salas privadas que se pueden reservar por hora',
      peopleCapacity: '1-20'
    },
  ]
  return (
    <>
      {options.map((option, i) => (
        <div key={i} className='looking-for__card'>
          {option.img}
          <div>
            <p>{option.title}</p>
            <span className='looking-for__description'>{option.description}</span>
          </div>
        </div>
      ))}
    </>
  )
}

export default ListLookingForCard
