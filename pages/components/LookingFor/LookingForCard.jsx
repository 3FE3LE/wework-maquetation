import Image from "next/image"

export const LookingForCard = ({option}) => {
  const {img, description, title} = option
  return (
    <div className='looking-for__card'>
      <Image height={100} width={100} alt={title} className='looking-for__card__img' src={img} />
      <div>
        <p>{title}</p>
        <span className='looking-for__description'>{description}</span>
      </div>
    </div>
  )
}
