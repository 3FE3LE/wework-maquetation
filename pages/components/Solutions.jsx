import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import solutionsImg1 from '../../public/solutions-img-1.jpg'
import solutionsImg2 from '../../public/solutions-img-2.jpg'


export const Solutions = () => {
  const tabs = [
    {
      key: 1,
      title: 'Para particulares/equipos pequeños',
      img: solutionsImg1,
      description: 'Membresías flexibles y oficinas llave en mano que se adaptan a todos los presupuestos y estrategias híbridas. Encuentra espacio para concentrarte y colaborar en cientos de ubicaciones cerca de tu casa o en diferentes partes del mundo.'
    },
    {
      key: 2,
      title: 'Para empresas medianas/grandes',
      img: solutionsImg2,
      description: 'Impulsa tu estrategia híbrida, mejora la experiencia de los empleados y ahorra en costos inmobiliarios combinando oficinas privadas, metodologías de coworking y soluciones de software.'
    }
  ]
  const [tab, setTab] = useState(tabs[0])
  return (
    <section className='solutions'>
          <div className='solutions__SVG-container'>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
            </svg>
          </div>
          <div className="solutions__container">
            <div className="solutions__info">
              <h1 className='solutions__title'>
                Soluciones para empresas de todos los tamaños
              </h1>
              <div className="solutions__tabs">
                {tabs.map((t,i) => (
                  <div onClick={() => setTab(t)} key={i} className={`solutions__tab ${tab.key=== t.key?'solutions__tab--selected': ''}`} >
                    {t.title}
                  </div>))}
              </div>
              <p className='solutions__description'>{tab.description}</p>
              <Link className='solutions__link' href={'/'} >Obtén más información</Link>
            </div>
            <Image className='solutions__img' alt={tab.title} height={511} width={383} src={tab.img} ></Image>
          </div>

        </section>
  )
}
