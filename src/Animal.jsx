export function Animal({nombre, imagen}){

    return (
        <div className="w-[200px] h-[200px] border shadow-xl flex flex-col items-center rounded-xl overflow-hidden pt-2 hover:scale-75 duration-300 ease-in-out">
            <div className="h-5/6">
                <img className="h-full" src={imagen} alt="" />
            </div>
            <p className="h-1/6 text-xl bg-orange-300 w-full text-center p-1">{nombre}</p>
            
        </div>
    )
}