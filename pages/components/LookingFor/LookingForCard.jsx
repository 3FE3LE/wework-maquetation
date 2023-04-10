import Image from "next/image"

const LookingForCard = ({option}) => {
  const {img, description, title} = option
  return (
    <div className='looking-for__card'>
      {img}
      <div>
        <p>{title}</p>
        <span className='looking-for__description'>{description}</span>
      </div>
    </div>
  )
}

export default LookingForCard
