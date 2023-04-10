import Image from "next/image"
import selectLocation from '../../public/select-location.jpg'
const SelectLocation = () => {
  return (
    <section className='select-location'>
          <div className='select-location__container'>
          <div className='select-location__float'>
            <h1 className='select-location__title'>
              Para todas tus formas de trabajo, estamos aquí
            </h1>
            <p className='select-location__text'>
              Encuentra una ubicación cerca de ti. Explora las membresías y las oficinas listas para mudarse para particulares o empresas de todos los tamaños.
            </p>
            <form className='select-location__form' >
              <select  className='select-location__select' name="" id="">
                <option value="">Barranquilla</option>
                <option value="">Bogota</option>
                <option value="">Medelle</option>
              </select>
              <button className='select-location__button'>Comenzar</button>
            </form>
          </div>
          <div className='select-location__carousel'>
            <Image height={616} width={1096} src={selectLocation} alt="select-location" />
          </div>
          </div>
        </section>
  )
}
export default SelectLocation
