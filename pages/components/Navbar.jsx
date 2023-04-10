import Link from 'next/link'
import WeWorkLogo from '../../public/wework-logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
          <div className='navbar__container'>
            <div className='navbar__section'>
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
              <Link href={'/'} className='navbar__link hover-underline-animation'>Inicio de sesion de mienbros</Link>
            </div>
          </div>
        </nav>
  )
}
export default Navbar
