import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import Header  from '../components/Header'

import buttonleft from "../assets/button-left.png"
import buttonright from "../assets/button-right.png"
import buttonconfirmar from "../assets/button-confirmar.png"

import cachorro from "../assets/cachorro.png"

import { H1, H2, H3 } from '../components/Texto'

export function PorteCachorro() {
    return (
        <div className='bg-laranjaclaro'>
            <Header/>
            <div>
                <img src={buttonright} alt="Botão Cachorro" />
                //** if apertar no button right pagina porte-cachorro, if button left página porte-gato */
            

                <div className='bg-laranjaescuro h-[735px] w-[1134px] flex justify-between items-center px-[16px]'>
                <H2>Porte de Cachorro</H2> 
                
                    <H3>Porte</H3>
                    <button className='border-black bg-laranjaescuro h-[70px] w-[307px]'>Pequeno</button>
                    <button className='border-black bg-laranjaescuro h-[70px] w-[307px]'>Médio</button>
                    <button className='border-black bg-laranjaescuro h-[70px] w-[307px]'>Grande</button>                
                    
                    <H3>Peso Médio</H3>
                    <button className='border-black bg-laranjaescuro h-[70px] w-[307px]'>5 - 10 Kg</button>
                    <button className='border-black bg-laranjaescuro h-[70px] w-[307px]'>10 - 25 Kg</button>
                    <button className='border-black bg-laranjaescuro h-[70px] w-[307px]'>24 - 45+</button> 

                    <H3>Altura</H3>
                    <button className='border-black bg-laranjaescuro h-[70px] w-[307px]'>25 - 35 cm</button>
                    <button className='border-black bg-laranjaescuro h-[70px] w-[307px]'>36 - 49 cm</button>
                    <button className='border-black bg-laranjaescuro h-[70px] w-[307px]'>50 - 70+ cm</button> 

                    <div>
                        <button>
                            <img src={buttonconfirmar} alt="Botão Confirmar" />
                        </button>
                    </div>
                </div>

                <img src={cachorro} alt="Cachorro" />
            </div>

            <Rodape/>
        </div>
    )
}