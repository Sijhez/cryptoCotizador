import { useState,useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import {monedas} from '../data/monedas'
import useSelectMonedas from '../hooks/useSelectMonedas'


const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color:#fff;
    font-weight:700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top:30px;
    &:hover{
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {

    const[criptos, setCriptos] = useState([])
    //aviso de error:
    const[error, setError] = useState(false)//cuando haya un error seteamos este valor a true
      //destructuracion por index del array
  const[ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
  const[ criptomoneda, SelectCriptomonedas ] = useSelectMonedas('Elige tu Criptomoneda', criptos)


  useEffect(()=>{
    //consulta asíncrona efectuada una sola vez con useEffect
    const consultarApi= async ()=>{
       const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
       const respuesta = await fetch(url) //await: espera a consultar la url
       const resultado = await respuesta.json() //await: espera a recibir una respuesta y transformarla en JSON
       //console.log(resultado.Data)//imprimir respuesta para prueba

        const arrayCriptos = resultado.Data.map( crypto=>{
          //extraemos solamente la información que queremos usar del API
          //generamos un nuevo objeto, iterando en la info de cada item consultado, devolvemos un nuevo objeto con la info que queremos
          const objeto = {
            id:crypto.CoinInfo.Name,//inciales:'SOL'
            nombre:crypto.CoinInfo.FullName//nombre completo:'solana'
          }
         return objeto //retornamos el nuevo obj1eto que conseguimos
        })
        setCriptos(arrayCriptos)//incluímos el resultado en el state del formukario
    }
    consultarApi();
  },[])
  //generamos un submit para cuando los valores en el select cambien
  const handleSubmit =(e)=>{
    e.preventDefault()
    //podemos acceder a los valores de nuestro hook
   if([moneda, criptomoneda].includes('')){
    //  console.log('error')
    setError(true )
     return
   }
   setError(false)
   setMonedas({
     moneda,
     criptomoneda
   })
   
  }

  return (
  <>
    
    {error && <Error>Todos los campos son obligatorios</Error>}
  
    <form
      onSubmit={handleSubmit}

    >
      <SelectMonedas />
      <SelectCriptomonedas />
      
        <InputSubmit
        type="submit" 
        value="Cotizar" 
        />
        
    </form>
    </>
  )
}

export default Formulario