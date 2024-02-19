import Image from "next/image"


const Page = () => {
  return (
    <>
        <div className="flex h-screen"> 
            <div className="w-1/3 px-3 flex h-full justify-center items-center flex-col">
                <div className="max-w-[400px]">
                    <h1>Bienvenido de nuevo!</h1>
                    <p className="mb-5">Ingresa tu nombre de usuario y contraseña para iniciar sesión</p>
                    <form className="flex flex-col">
                        <input type="text" placeholder="Username" className="border-orange-500 border-2 mb-3 rounded-lg p-1.5"/>
                        <input type="password" placeholder="Password" className="border-orange-500 border-2 mb-3 rounded-lg p-1.5"/>
                        <button className="mt-5 bg-blue-950 w-fit p-2 text-white rounded-lg font-bold">Iniciar Sesión</button>
                    </form>
                </div>

            </div>
            <div className="w-2/3">
                <Image src="/login-bg.jpg" width={1920} height={1080} alt="Taxis para Aeropuertos" className="object-cover h-full"/>
            </div>
        </div>
    </>
  )
}
export default Page