import { Animal } from "./Animal"
import { Titulo } from "./componentes/Titulo"
import { bd } from "./bd"

function App() {



  return (
    <div className="p-5 flex flex-col items-center">
      <Titulo></Titulo>
        <div className="flex gap-3 mt-5">
          {
            bd.map((animal, index)=>{
              return(
                <Animal key = {index} nombre={animal.nombre} imagen={animal.imagen}/>
              )
            })

          }
      </div>
    </div>
  )
}

export default App
