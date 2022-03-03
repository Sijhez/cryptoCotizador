import {useState} from 'react'
import styled from '@emotion/styled'
//estilizando el hook

const Label = styled.label` //generamos un elemento label
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select= styled.select` //generamos un elemento select:
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    margin-bottom: 20px;
`

//generando hook propio como un select con opciones
//recibe label, se genera un arrow function, y se interpreta el label recibido con un styled component
const useSelectMonedas = (label, opciones) => {
//usamos un useState para que exista un estado en nuestro hook
    const [state, setState] = useState('')

  const SelectMonedas = ()=> (
      <>
      <Label>{label}</Label>
      <Select
         value={state}
         onChange={(e)=>setState(e.target.value)}
      >
          <option value=''>Seleccione:</option>
          {
              opciones.map(unOpcion=>(
                  <option
                  key={unOpcion.id}
                  value={unOpcion.id}
                  >
                      {unOpcion.nombre}
                  </option>
              ))
          }
      </Select>
      </>
  )
  return [state, SelectMonedas ] //retornamos el resultado del arrow function
}

export default useSelectMonedas