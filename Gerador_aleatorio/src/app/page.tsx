'use client'
import { useState } from 'react'
import GeradorNumeros from '../../lib/gerador'
import styles from './page.module.css'

type Analise = {
  media: number
  maior: number
  menor: number
  pares: number
  impares: number
}

export default function Home() {
  const [quantidade, setQuantidade] = useState(0)
  const [numeros, setNumeros] = useState<number[]>([])
  const [analise, setAnalise] = useState<Analise | null>(null)

  function handleClick() {
    try {
      const gerador = new GeradorNumeros(quantidade)
      gerador.gerar()

      setNumeros(gerador.numeros)
      setAnalise(gerador.analisar())
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert('Erro desconhecido')
      }
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gerador de números aleatórios</h1>

      <label htmlFor="numero" className={styles.label}>Quantidade</label>
      <input
        id="numero"
        type="number"
        className={styles.input}
        onChange={(e) => setQuantidade(Number(e.target.value))}
      />

      <button onClick={handleClick} className={styles.butom}>
        Gerar e Analisar
      </button>

      {numeros.length > 0 && (
        <div>
          <h2 className={styles.geradosTitulo}>Números gerados:</h2>
          <ul className={styles.lista}>
            {numeros.map((num, i) => (
              <li key={i} className={styles.item}>{num}</li>
            ))}
          </ul>

          {analise && (
            <>
              <section className={styles.resultado}>Análise dos resultados</section>
              <ul className={styles.lista}>
                <li className={styles.item}>Média: {analise.media}</li>
                <li className={styles.item}>Maior: {analise.maior}</li>
                <li className={styles.item}>Menor: {analise.menor}</li>
                <li className={styles.item}>Pares: {analise.pares}</li>
                <li className={styles.item}>Ímpares: {analise.impares}</li>
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  )
}
