import React, { Dispatch, SetStateAction, useState } from "react";

export const ButtonTransparencia = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div >
      <div className="mx-auto flex gap-5 items-center justify-center mb-10">
        {TAB_DATA.map((t) => (
          <ToggleButton
            key={t.id}
            id={t.id}
            selected={selected}
            setSelected={setSelected}
          >
            {t.title}
          </ToggleButton>
        ))}
      </div>
      <div>
        {   selected === 1 ?
                <div className='flex flex-col items-center justify-center gap-4 my-4 '>
                    <div className='flex items-center justify-center gap-4 my-4 flex-wrap'>
                        {/* Ayuntamiento */}
                        <div className='border-2 p-4 rounded-xl'>
                            <h2 className='text-center my-2 text-2xl text-gray-600'>Ayuntamiento</h2>
                            <div className='flex flex-row gap-3 flex-wrap items-center justify-center'>
                            <a 
                                href="http://transparencia.jiquilpan.gob.mx"
                                className='text-center text-neutral-400 text-lg border-amarillo border-[1px] py-2 px-6 rounded-xl hover:bg-amarillo hover:text-white transition duration-300'
                            >
                                SEVAC
                            </a>
                            <a 
                                href="http://transparencia.jiquilpan.gob.mx/?page_id=1025"
                                className='text-center text-neutral-400 text-lg border-amarillo border-[1px] py-2 px-6 rounded-xl hover:bg-amarillo hover:text-white transition duration-300'
                            >
                                LGCG
                            </a>
                            <a 
                                href="http://transparencia.jiquilpan.gob.mx/?page_id=1016"
                                className='text-center text-neutral-400 text-lg border-amarillo border-[1px] py-2 px-6 rounded-xl hover:bg-amarillo hover:text-white transition duration-300'
                            >
                                CONAC
                            </a>
                            <a 
                                href="http://transparencia.jiquilpan.gob.mx/?page_id=1023"
                                className='text-center text-neutral-400 text-lg border-amarillo border-[1px] py-2 px-6 rounded-xl hover:bg-amarillo hover:text-white transition duration-300'
                            >
                                LDF
                            </a>
                            </div>
                        </div>
                        {/* Organismo Operador de Agua Potable */}
                        <div className='border-2 p-4 rounded-xl'>
                            <h2 className='text-center my-2 text-2xl text-gray-600'>Organismo Operador de Agua Potable</h2>
                            <div className='flex flex-row gap-3 flex-wrap items-center justify-center'>
                            <a 
                                href="http://transparencia.jiquilpan.gob.mx/?page_id=1038"
                                className='text-center text-neutral-400 text-lg border-amarillo border-[1px] py-2 px-6 rounded-xl hover:bg-amarillo hover:text-white transition duration-300'
                            >
                                SEVAC
                            </a>
                            <a 
                                href="http://transparencia.jiquilpan.gob.mx/?page_id=1032"
                                className='text-center text-neutral-400 text-lg border-amarillo border-[1px] py-2 px-6 rounded-xl hover:bg-amarillo hover:text-white transition duration-300'
                            >
                                LGCG
                            </a>
                            </div>
                        </div>
                    </div>
                    {/* Presupuesto */}
                    <div className="flex gap-4 items-center justify-center">
                        <div className='border-2 p-4 rounded-xl duration-300 hover:bg-amarillo'>
                            <a href='http://transparencia.jiquilpan.gob.mx/?page_id=1027' className='text-center my-2 text-2xl text-gray-600'>Presupuesto</a>
                        </div>
                        {/* Presupuesto */}
                        <div className='border-2 p-4 rounded-xl duration-300 hover:bg-amarillo'>
                            <a href='http://transparencia.jiquilpan.gob.mx/?page_id=1036' className='text-center my-2 text-2xl text-gray-600'>RTF</a>
                        </div>
                        {/* Presupuesto */}
                        <div className='border-2 p-4 rounded-xl duration-300 hover:bg-amarillo'>
                            <a href='http://transparencia.jiquilpan.gob.mx/?page_id=1031' className='text-center my-2 text-2xl text-gray-600 '>POA</a>
                        </div>
                    </div>
                </div>
            : selected === 2 &&
                <div className="flex items-center justify-center mb-10">
                    {/* Declaración */}
                    <div className='border-2 p-4 rounded-xl duration-300 hover:bg-amarillo'>
                        <a href='http://declaraciones.jiquilpan.gob.mx' className='text-center my-2 text-2xl text-gray-600 '>Presenta aquí</a>
                    </div>
                </div>
        }
        {/* Opción 1 */}
      </div>
    </div>
  );
};

const ToggleButton = ({
  children,
  selected,
  setSelected,
  id,
}: {
  children: string;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  id: number;
}) => {
  return (
    <div
      className={`rounded-lg transition-colors ${
        selected === id ? "bg-amarillo" : "bg-zinc-900"
      }`}
    >
      <button
        onClick={() => setSelected(id)}
        className={`w-full origin-top-left rounded-lg border py-3 px-4 text-xs font-medium transition-all md:text-base ${
          selected === id
            ? "-translate-y-1 border-amarilloDark bg-white text-amarilloDark"
            : "border-zinc-900 bg-white text-zinc-900 hover:-rotate-2"
        }`}
      >
        {children}
      </button>
    </div>
  );
};

const TAB_DATA = [
  {
    id: 1,
    title: "Información Trimestral",
  },
  {
    id: 2,
    title: "Presenta tu declaración",
  },
];