import Image from 'next/image'
import React from 'react'
import ws from '../../public/ws.png'

const WhatsappButton = () => {
  return (
    <div className='whatsapp-button'><Image height={30} width={30} src={ws} alt='whatsapp-icon' /></div>
  )
}

export default WhatsappButton