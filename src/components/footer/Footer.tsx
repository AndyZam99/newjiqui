import Image from 'next/image'
import React from 'react'
import { ButtonTransparencia } from './Botones'

const Footer = () => {
  return (
    <div className='bg-white py-20'>
      <div className='flex flex-col items-center justify-center'>
        <Image 
          width={500}
          height={500}
          className='w-32 mx-auto'
          alt='Logo Live Tech'
          src='/static/pnt.png'
        />
        <a 
          href="https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/?idSujetoObigadoParametro=3463&idEntidadParametro=16&idSectorParametro=21"
          target='_blank' 
          rel='noreferrer'
          className='text-center mx-auto w-full text-neutral-400 text-lg mb-14'
        >
            Transparencia
        </a>
        <ButtonTransparencia />
        {/* --------------------------- */}
        <p className='text-lg text-neutral-400 text-center'>
          Gobierno de Jiquilpan 2024 - 2027 <br /> <span className='text-neutral-500'>Juntos somos más</span> <br /> <br /> <span>P R Ó X I M A M E N T E</span>
        </p>
      </div>
      <div className='flex items-end justify-center gap-4'>
        <p className='text-black text-center mt-10'>Powered by</p>
        <a href="https://livetech.world" target='_blank' rel='noreferrer'>
          <Image 
            width={500}
            height={500}
            className='w-10'
            alt='Logo Live Tech'
            src='/static/live-tech-logo.png'
          />
        </a>
      </div>
    </div>
  )
}

export default Footer