import Image from 'next/image';
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import Link from 'next/link';

const NavbarTitles = [
  {
    title: "Nosotros",
    sublinks: [
      { title: "Historia", href: "#" },
      { title: "Valores", href: "#" },
    ],
  },
  {
    title: "Noticias",
    sublinks: [
      { title: "Noticias", href: "/noticias" },
    ],
  },
];

const Footer = () => {
  return (
    <><div className="bg-gray-200 rounded-2xl mx-4 md:mx-10 lg:mx-5 mb-2 pb-2">
        <div className='flex flex-col md:flex-row justify-between items-end'>
          <div className='justify-center ml-7 mt-7'>
            <Link href="https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/?idSujetoObigadoParametro=3463&idEntidadParametro=16&idSectorParametro=21" target="_blank" rel="noopener noreferrer">
              <Image
                width={500}
                height={500}
                className='w-32'
                alt='Logo Live Tech'
                src='/static/pnt.png' 
              />
            </Link>
          </div>
          
          <div className='flex justify-between ml-20 mt-2 text-black w-full md:w-[500px]'>
            {NavbarTitles.map((item, index) => (
              <React.Fragment key={index}>
                <div className='flex flex-col w-1/4 items-center'>
                  <h4 className='font-bold text-sm'>{item.title}</h4>
                  <ul className='list-none pl-0 text-xs'>
                    {item.sublinks.map((sublink, subIndex) => (
                      <li key={subIndex}>
                        <a href={sublink.href} className='text-gray-700 hover:text-blue-500'>
                          {sublink.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inserta el div con la imagen después del primer item */}
                {index === 0 && (
                  <div className='flex flex-col items-center w-1/4'>
                    <Image
                      src="/static/2027.webp"
                      alt="Logo"
                      width={300}
                      height={250}
                      className="w-[150px] h-[50px] mb-4 justify-center rounded-lg"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
              <div>
                <div className='text-justify mr-20 mb-4'>
                  <h4 className='text-gray-700 font-bold text-sm'>Números de Emergencia</h4>
                  <p className='text-gray-700 text-xs'>Seguridad Pública: 35-31-27-65-67</p>
                  <p className='text-gray-700 text-xs'>Protección Civil: 35-35-33-41-08</p>
                </div>
              </div>
        </div>
  
        <div className='flex flex-col items-center mt-10'>
        <div className='w-full border-t border-gray-300 my-15'></div>
        <div className='flex justify-between items-center w-full text-xs'>
          <p className='text-black text-center flex-grow ml-40'>Todos los derechos reservados Gobierno de Jiquilpan 2024-2027</p>
          <div className='flex gap-3 text-base text-black mr-6 mt-2'>
            <a href="https://www.instagram.com/jiquilpanpueblomagicooficial/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/amancmich/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com/amancmich?lang=es" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://www.youtube.com/channel/UCy4bi0aJS8vXhX-roUdg8rQ" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="https://wa.me/+524434602927" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
            <a href="mailto:michoacan@amanc.org" target="_blank" rel="noreferrer"><IoMdMail /></a>
          </div>
        </div>

        <div className='flex items-center justify-center text-xs gap-4 mt-2'>
          <p className='text-black text-center'>Powered by</p>
          <a href="https://livetech.world" target='_blank' rel='noreferrer'>
            <Image
              width={200}
              height={200}
              className='w-5'
              alt='Logo Live Tech'
              src='/static/live-tech-logo.png' />
          </a>
        </div>
      </div>
    </div>
    <div className="h-2"></div> 
    </>
  );
};
export default Footer;
