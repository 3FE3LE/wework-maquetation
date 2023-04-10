import Link from 'next/link'
import { LookingForCard } from './LookingForCard'

export const LookingFor = () => {
  
  const options = [
    {
      img: 'https://ctfassets.imgix.net/vh7r69kgcki3/3j9aqbBpEAl7GYPX1CbAIo/6ee0f13d82cc6e1ad53b5affb75d30ab/Hot_Desks_274x274.png?auto=format%20compress&fit=crop&q=50&w=100&h=100',
      title: 'Membresía de coworking',
      description: 'Hot desks, salas, cabinas telefónicas y más',
      peopleCapacity: 'Mas de 1'
    },
    {
      img: 'https://ctfassets.imgix.net/vh7r69kgcki3/UXP1XHGUaziQtFAGuMCZx/e3b5a6c56456da4f290c18426eb84c1a/Private_Office_274x274.png?auto=format%20compress&fit=crop&q=50&w=100&h=100',
      title: 'Oficina Privada',
      description: 'Oficinas listas cona menidades compartidas',
      peopleCapacity: '1-20+'
    },
    {
      img: 'https://ctfassets.imgix.net/vh7r69kgcki3/3UdjOaiPRb734SnJ8ApLUk/b9455393017cfe8916d722ea17b639e9/Office_Suite_1440x1440.png?auto=format%20compress&fit=crop&q=50&w=100&h=100',
      title: 'Excecutive Office',
      description: 'Oficinas de primer nivel con amenidades privadas',
      peopleCapacity: '1-100'
    },
    {
      img: 'https://ctfassets.imgix.net/vh7r69kgcki3/35qhYMr0wIJvd2o5MAuSHd/c45139bad5decb1cf980735f9f632a05/Meeting_Small_274x274.png?auto=format%20compress&fit=crop&q=50&w=100&h=100',
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
          {options.map((option,i) => (
            option && <LookingForCard key={i} option={option} />
          ))}
        </div>
      </div>
    </section>
  )
}
