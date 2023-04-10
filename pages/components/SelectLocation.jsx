
export const SelectLocation = () => {
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
              <select className='select-location__select' name="" id=""></select>
              <button className='select-location__button'>Comenzar</button>
            </form>
          </div>
          <div className='select-location__carousel'>
            <img src="https://ctfassets.imgix.net/vh7r69kgcki3/4IY416EqySXcQq3A51yzM4/17de763e2381784ae66adc608cbdbce3/Web_150DPI-WeWork__-__21_Collyer_Quay__-__Singapore-15.jpg?auto=format%20compress&fit=crop&q=50&w=1096&h=617" alt="" />
          </div>
          </div>
        </section>
  )
}
