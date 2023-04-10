import Link from 'next/link'
import WeWorkLogo from '../../public/wework-logo.svg'
import { useState } from 'react'
import Image from 'next/image'
import menuIcon from '../../public/menu-icon.png'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <div className='navbar__section'>
          <Image onClick={() => setShowMenu(true)} className='navbar__menu-toggler' height={25} width={25} alt='menu' src={menuIcon} />
          {showMenu && <div className='navbar__mobile-menu'>
            <span onClick={() => setShowMenu(false)} className='navbar__mobile-item'>X</span>
            <Link href={'/'} className='navbar__mobile-item'>
              Inicio
            </Link>
            <Link href={'/'} className='navbar__mobile-item'>
              Encuentra una ubicacion
            </Link>
            <Link href={'/'} className='navbar__mobile-item'>
              Soluciones
            </Link>
            <Link href={'/'} className='navbar__mobile-item'>
              Grandes Empresas
            </Link>
            <Link href={'/'} className='navbar__mobile-item'>
              Inicio de sesion de miembros
            </Link>
            <Link href={'/'}>
              ¿Tienes preguntas o necesitas ayuda? +5715087567
            </Link>
          </div>}
          <Link href={'/'} >
            <WeWorkLogo />
          </Link >
          <div className='navbar__item-list'>
            <Link href={'/'} className='navbar__link hover-underline-animation'>
              Encuentra una ubicacion
            </Link>
            <Link href={'/'} className='navbar__link hover-underline-animation'>
              Soluciones
            </Link>
            <Link href={'/'} className='navbar__link hover-underline-animation'>
              Grandes Empresas
            </Link>
          </div>
        </div>
        <div className='navbar__section--seccond'>
          <Link href={'/'} className='navbar__button'>Contacto</Link>
          <Link href={'/'} className='navbar__link hover-underline-animation'>Inicio de sesion de miembros</Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
