// Função para calcular o saldo de vitórias e o nível do jogador
function calcularRanque(vitorias, derrotas) {
  // Verificando se as variáveis vitorias e derrotas são números válidos
  if (isNaN(vitorias) || isNaN(derrotas)) {
      console.log("As vitórias e derrotas devem ser números válidos.");
      return;
  }

  // Calculando o saldo de vitórias
  let saldoVitorias = vitorias - derrotas;

  // Variável para armazenar o nível do jogador
  let nivel = "";

  // Decidindo o nível com base no número de vitórias
  if (vitorias < 10) {
      nivel = "Ferro";
  } else if (vitorias >= 10 && vitorias <= 20) {
      nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
  } else if (vitorias > 100) {
      nivel = "Imortal";
  }

  // Verificando se o nível foi atribuído corretamente antes de imprimir
  if (nivel === "") {
      console.log("Erro: Não foi possível determinar o nível.");
      return;
  }

  // Imprimindo a mensagem final com o saldo e nível do jogador
  console.log(`O Herói tem de saldo ${saldoVitorias} e está no nível de ${nivel}`);
}

// Testando a função com exemplos de vitórias e derrotas
calcularRanque(45, 30);  // Exemplo 1: 45 vitórias e 30 derrotas
calcularRanque(55, 20);  // Exemplo 2: 55 vitórias e 20 derrotas
calcularRanque(10, 5);   // Exemplo 3: 10 vitórias e 5 derrotas
calcularRanque(120, 50); // Exemplo 4: 120 vitórias e 50 derrotas
calcularRanque("vinte", 20);  // Exemplo 5: erro no tipo de dado
calcularRanque(30, "dez");   // Exemplo 6: erro no tipo de dado
