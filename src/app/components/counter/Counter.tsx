import { useState } from "react"

export const Counter: React.FC = () => {
  const [valor, setValor] = useState<number>(0)

  const acrescentar = (): void => {
    setValor(prevValue => prevValue + 1)
  }

  const retirar = (): void => {
    setValor(prevValue => prevValue - 1)
  }

  const zerar = (): void => {
    setValor(0)
  }

  return (
    <div>
      <h1>Contador</h1>
      <p>{valor}</p>
      <div style={{ display: "flex" }}>
        <button onClick={acrescentar}>Acrescentar</button>
        <button onClick={retirar}>Retirar</button>
        <button onClick={zerar}>Zerar</button>
      </div>
    </div>
  )
}
