// Função que atualiza o texto das tags <p> na página com os resultados calculados
function mudarTexto(carne_: number, cerveja_: number, bebida_: number): void {
    // Obtém as três primeiras tags <p> na página
    const p1: HTMLElement = document.getElementsByTagName('p')[0];
    const p2: HTMLElement = document.getElementsByTagName('p')[1];
    const p3: HTMLElement = document.getElementsByTagName('p')[2];

    // Atualiza o conteúdo de texto das tags <p> com os valores calculados
    p1.innerText = `${carne_.toFixed(2)} Kg de carne`; // Exibe o valor de carne em quilos, formatado para duas casas decimais
    p2.innerText = `${cerveja_} Latas de cerveja`; // Exibe o número de latas de cerveja
    p3.innerText = `${bebida_} Garrafas de 2L de Bebida`; // Exibe o número de garrafas de 2L de bebida
}

// Função que calcula as quantidades necessárias de carne, cerveja e bebida com base no número de adultos, crianças e horas de duração do evento
function regras(x: number, y: number, z: number): void {
    // Define as quantidades padrão para carne, cerveja e bebida, dependendo da duração do evento

    let carne: number = z >= 6 ? 650 : 400; // 650g por pessoa se o evento durar 6 horas ou mais, caso contrário, 400g

    let cerveja: number = z >= 6 ? 2000 : 1200; // 2000ml por pessoa se o evento durar 6 horas ou mais, caso contrário, 1200ml

    let bebida: number = z >= 6 ? 1500 : 1000; // 1500ml por pessoa se o evento durar 6 horas ou mais, caso contrário, 1000ml

    // Calcula a quantidade total de carne, considerando que crianças consomem metade da quantidade de um adulto
    carne = (carne * x) + (carne * y / 2); // Resultado em gramas
    carne /= 1000; // Converte gramas para quilos

    // Calcula o número total de latas de cerveja, arredondando para cima
    cerveja = Math.ceil(cerveja * x / 350); // Supondo que cada lata tenha 350ml

    // Calcula a quantidade total de bebida, considerando que crianças consomem metade da quantidade de um adulto
    bebida = (bebida * x) + (bebida * y / 2); // Resultado em mililitros
    bebida = Math.ceil(bebida / 2000); // Converte mililitros para garrafas de 2L

    // Chama a função para atualizar o texto na página com os valores calculados
    mudarTexto(carne, cerveja, bebida);
}

// Função principal que é chamada ao clicar no botão "Calcular"
function calculadora(): void {
    
    // Obtém os valores dos inputs de número de adultos, crianças e duração do evento
    const adultos: HTMLInputElement = document.getElementsByTagName('input')[0] as HTMLInputElement;
    const criancas: HTMLInputElement = document.getElementsByTagName('input')[1] as HTMLInputElement;
    const h: HTMLInputElement = document.getElementsByTagName('input')[2] as HTMLInputElement;

    // Converte os valores dos inputs de string para número
    const adultosValue: number = parseFloat(adultos.value);
    const criancasValue: number = parseFloat(criancas.value);
    const hValue: number = parseFloat(h.value);

    // Chama a função que aplica as regras e realiza os cálculos com base nos valores obtidos
    regras(adultosValue, criancasValue, hValue);
}
