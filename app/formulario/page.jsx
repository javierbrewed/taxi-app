"use client"
import {useEffect, useState} from  "react"
import { Html5QrcodeScanner } from "html5-qrcode"
import { useSearchParams } from "next/navigation"

const PageForm = () => {


    const searchParams = useSearchParams();
    const folio = searchParams.get("folio");
    const fecha = searchParams.get("fecha");
    const pax = searchParams.get("pax");
    const hora = searchParams.get("hora");
    const zona = searchParams.get("zona");
    const tipo = searchParams.get("tipo");


    const [scanResult, setScanResult] = useState();
    const labels = [
        {
            name : "folio",
            label : "Folio: ",
            value : folio
        },
        {
            name : "fecha",
            label : "Fecha: ",
            value : fecha

        },
        {
            name : "pax",
            label : "Pax: ",
            value : pax
        },
        {
            name : "hora",
            label : "Hora: ",
            value : hora
        },
        {
            name : "zona",
            label : "Zona: ",
            value : zona

        },
        {
            name : "tipo",
            label : "Tipo: ",
            value : tipo

        }
    ]

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            qrbox: {
                width: 250,
                height: 250
            },
            fps : 5,
        });
    
        scanner.render(succes,error);
    
        function succes (result){
            scanner.clear;
            setScanResult(result)
        }
    
        function error (err){
            console.warn(err)
        }
    },)



  return (
    <div className="max-w-6xl mx-auto">
        <form className="m-3">
            <div className="bg-slate-200 rounded-md p-3 flex gap-5 justify-center flex-wrap">
                {
                    labels.map((data) => {
                        return(
                        <div key={data.name} className=" ">
                            <label className="text-lg font-semibold">{data.label}</label>
                            <span>{data.value}</span>
                        </div>
                        )
                    })
                }
            </div>


            <div id="reader" className="max-w-[250px] "></div>
            <h2 className="text-center mt-5">Detalles del viaje</h2>
            <div className="w-full flex flex-col mb-2">
                <label className="font-semibold text-xl ">Supervisor</label>
                <input type="text" placeholder="Nombre del supervisor"/>
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
                <div className="w-full flex flex-col">
                    <label className="font-semibold text-xl ">Operador s</label>
                    <input type="text" placeholder="Nombre del operador"/>
                </div>
                <div className="w-full flex flex-col">
                    <label className="font-semibold text-xl ">Unidad s</label>
                    <input type="text" placeholder="Nombre del supervisor"/>
                </div>
                <div className="w-full flex flex-col">
                    <label className="font-semibold text-xl ">Kilometraje de salida</label>
                    <input type="text" placeholder="Nombre del supervisor"/>
                </div>
                <div className="w-full flex flex-col">
                    <label className="font-semibold text-xl ">Kilometraje de llegada</label>
                    <input type="text" placeholder="Nombre del supervisor"/>
                </div>
                <div className="w-full flex flex-col">
                    <label className="font-semibold text-xl ">Hora de salida</label>
                    <input type="time" placeholder="Nombre del supervisor"/>
                </div>
                <div className="w-full flex flex-col">
                    <label className="font-semibold text-xl ">Hora de llegada</label>
                    <input type="time" placeholder="Nombre del supervisor"/>
                </div>
                <div className="w-full flex flex-col">
                    <label className="font-semibold text-xl ">Estado</label>
                    <select>
                        <option>En Ruta</option>
                        <option>Completo</option>
                        <option>Cancelado</option>
                    </select>
                </div>
                <div className="w-full flex flex-col">
                    <label className="font-semibold text-xl ">Fecha de actualización</label>
                    <input type="time" placeholder="Nombre del supervisor" readOnly/>
                </div>
                
            </div>
            <div className="w-full flex flex-col my-2">
                <label className="font-semibold text-xl ">Comentarios</label>
                <textarea type="time" placeholder="Comentarios..."/>
            </div>

            <button className="bg-orange-500 text-white p-2 rounded-md font-semibold text-xl mt-2">Guardar Información</button>
        </form>
    </div>
  )
}

export default PageForm