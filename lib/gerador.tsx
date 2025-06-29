class GeradorNumeros {
  quantidade: number
  numeros: number[] = []
  constructor(quantidade: number) {
    if (quantidade < 1 || quantidade > 100) {
      throw new Error('Os números digitados devem estar entre 1 e 100')
    }
    this.quantidade = quantidade
  }
  gerarNumeroAleatorioDe1a100(): number {return Math.floor(Math.random() * 100) + 1}

  gerar(): void {
    this.numeros = []
    for (let i = 0; i < this.quantidade; i++) {
      this.numeros.push(this.gerarNumeroAleatorioDe1a100())
    }
  }

  analisar() {
    const tamanho = this.numeros.length
    const numerosOrdenados = [...this.numeros].sort((a, b) => a - b)
    const menor = numerosOrdenados[0]
    const maior = numerosOrdenados[tamanho - 1]
   
    let total = 0
    let pares = 0
    let impares = 0

    for (const num of this.numeros) {
      total += num
      if (num % 2 === 0) pares++
      else impares++
    }

    const media = Number((total / tamanho).toFixed(2))

    return {
      menor,
      maior,
      media,
      pares,
      impares,
    }
  }
}

export default GeradorNumeros