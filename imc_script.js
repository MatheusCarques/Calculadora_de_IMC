function calcularIMC() {   //Define uma função chamada calcularIMC, que será responsável por calcular o Índice de Massa Corporal (IMC).
    let peso = document.getElementById("peso").value;   //Obtém o valor do elemento HTML com o ID "peso
    let altura = document.getElementById("altura").value; //Obtém o valor do elemento HTML com o ID "altura"
    let imc = peso / (altura * altura);  //Calcula o IMC dividindo o peso pela altura ao quadrado e armazena o resultado na variável imc.            
    let resultado = document.getElementById("resultado");  //Obtém o elemento HTML com o ID "resultado"

    if (isNaN(imc)) {   //Verifica se o valor do IMC é "Não é um Número" (NaN). Isso ocorre se o usuário inserir valores não numéricos nos campos de peso ou altura.
        resultado.innerHTML = "Por favor, insira valores numéricos válidos."; //Se o IMC não for um número válido, exibe uma mensagem de erro no elemento "resultado"
    } else { //Se o IMC for um número válido, executa o seguinte bloco de código
        resultado.innerHTML = "Seu IMC é: " + imc.toFixed(2) + "<br>"; //Exibe o valor do IMC no elemento "resultado", formatado com duas casas decimais, e adiciona uma quebra de linha (<br>).
        mostrarDicas(imc);//Chama a função mostrarDicas, passando o valor do IMC como argumento.
    }
}

function mostrarDicas(imc) { //Define uma função chamada mostrarDicas, que recebe o valor do IMC como argumento.
    let resultado = document.getElementById("resultado"); //Obtém o elemento HTML com o ID "resultado" e armazena-o na variável resultado.

    if (imc < 18.5) {
        let dicasIMC_Baixo = 
    
        `
            <h2>Dicas para IMC Baixo</h2>
            <p>Ter um IMC baixo pode indicar que você está abaixo do peso ideal, o que pode levar a problemas de saúde como fadiga, deficiência imunológica e osteoporose. É importante buscar orientação médica para identificar a causa do baixo peso e receber um plano de tratamento individualizado.</p>

            <h3>1. Aumente a ingestão calórica:</h3>
            <ul>
                <li>Coma com mais frequência: Faça 5-6 refeições menores ao longo do dia, em vez de 3 grandes refeições.</li>
                <li>Escolha alimentos calóricos e nutritivos: Inclua alimentos como abacate, oleaginosas (castanhas, nozes), azeite de oliva, frutas secas, iogurte integral, queijos e carnes magras.</li>
                <li>Adicione calorias extras às refeições: Use azeite de oliva em saladas, adicione queijo ralado em massas e inclua frutas secas em cereais.</li>
                <li>Beba shakes de proteína: Eles podem ser uma forma fácil de aumentar a ingestão calórica e de proteínas.</li>
            </ul>

            <h3>2. Priorize alimentos nutritivos:</h3>
            <ul>
                <li>Proteínas: Essenciais para a construção muscular. Inclua carnes magras, peixes, ovos, leguminosas e laticínios.</li>
                <li>Carboidratos complexos: Fornecem energia de forma gradual. Opte por pães e massas integrais, arroz integral, batata doce e aveia.</li>
                <li>Gorduras saudáveis: Importantes para a saúde hormonal e para a absorção de vitaminas. Inclua abacate, azeite de oliva, oleaginosas e peixes gordurosos.</li>
                <li>Frutas e vegetais: Fornecem vitaminas, minerais e fibras essenciais.</li>
            </ul>

            <h3>3. Faça exercícios físicos:</h3>
            <ul>
                <li>Musculação: Ajuda a ganhar massa muscular e a aumentar o peso de forma saudável.</li>
                <li>Exercícios aeróbicos: Melhoram o apetite e a saúde cardiovascular.</li>
            </ul>

            <h3>4. Outras dicas:</h3>
            <ul>
                <li>Beba bastante água: Ajuda na digestão e na absorção de nutrientes.</li>
                <li>Durma bem: O sono é essencial para a recuperação muscular e para a saúde em geral.</li>
                <li>Gerencie o estresse: O estresse pode afetar o apetite e o peso.</li>
            </ul>

            <p><strong>Lembre-se:</strong></p>
            <ul>
                <li>Consulte um médico ou nutricionista para obter orientação individualizada.</li>
                <li>Evite alimentos ultraprocessados, ricos em açúcar e gorduras ruins.</li>
                <li>Tenha paciência e seja consistente, pois o ganho de peso saudável leva tempo.</li>
            </ul>
        `;

        resultado.innerHTML += dicasIMC_Baixo;  //Adiciona as dicas apropriadas ao conteúdo existente no elemento "resultado". O operador += é usado para concatenar as novas dicas ao conteúdo anterior.
    } else if (imc < 25) {
        let dicasIMC25 = `
            <h2>Dicas para manter o IMC saudável (abaixo de 25)</h2>
            <p>Um IMC abaixo de 25 indica que você está dentro da faixa de peso saudável. O objetivo aqui é manter esse peso e promover um estilo de vida equilibrado.</p>

            <h3>Alimentação balanceada:</h3>
            <ul>
                <li>Priorize alimentos nutritivos: frutas, legumes, verduras, grãos integrais, proteínas magras e gorduras saudáveis.</li>
                <li>Limite o consumo de alimentos ultraprocessados, ricos em açúcar, sal e gorduras ruins.</li>
                <li>Faça refeições regulares e evite pular refeições.</li>
                <li>Controle as porções para evitar o consumo excessivo de calorias.</li>
                <li>Beba bastante água.</li>
            </ul>

            <h3>Exercícios físicos regulares:</h3>
            <ul>
                <li>Pratique atividades físicas que você goste, como caminhada, corrida, natação, dança ou musculação.</li>
                <li>Tente se exercitar por pelo menos 150 minutos por semana, com intensidade moderada.</li>
                <li>A musculação ajuda a manter a massa muscular e a fortalecer os ossos.</li>
            </ul>

            <h3>Sono de qualidade:</h3>
            <ul>
                <li>Durma de 7 a 8 horas por noite para garantir a recuperação do corpo e a regulação do metabolismo.</li>
                <li>Crie uma rotina de sono regular, indo para a cama e acordando sempre nos mesmos horários.</li>
            </ul>

            <h3>Gerenciamento do estresse:</h3>
            <ul>
                <li>Encontre maneiras saudáveis de lidar com o estresse, como meditação, ioga, exercícios físicos ou hobbies.</li>
                <li>O estresse crônico pode afetar o peso e a saúde em geral.</li>
            </ul>
        `;

        resultado.innerHTML += dicasIMC25;
    } else if (imc < 30) {
        let dicasIMC30 = `
            <h2>Dicas para perder peso e manter um IMC saudável (abaixo de 30)</h2>
            <p>Um IMC abaixo de 30 indica sobrepeso, o que significa que você está acima do peso ideal para sua altura. O objetivo aqui é perder peso de forma saudável e sustentável, promovendo um estilo de vida equilibrado.</p>

            <h3>Alimentação balanceada:</h3>
            <ul>
                <li>Priorize alimentos nutritivos: frutas, legumes, verduras, grãos integrais, proteínas magras e gorduras saudáveis.</li>
                <li>Reduza o consumo de alimentos ultraprocessados, ricos em açúcar, sal e gorduras ruins.</li>
                <li>Controle as porções para evitar o consumo excessivo de calorias.</li>
                <li>Beba bastante água e evite bebidas açucaradas.</li>
                <li>Faça refeições regulares e evite pular refeições.</li>
            </ul>

            <h3>Exercícios físicos regulares:</h3>
            <ul>
                <li>Pratique atividades físicas que você goste, como caminhada, corrida, natação, dança ou musculação.</li>
                <li>Tente se exercitar por pelo menos 150 minutos por semana, com intensidade moderada.</li>
                <li>A musculação ajuda a manter a massa muscular e a acelerar o metabolismo.</li>
            </ul>

            <h3>Mudanças no estilo de vida:</h3>
            <ul>
                <li>Durma de 7 a 8 horas por noite para garantir a recuperação do corpo e a regulação do metabolismo.</li>
                <li>Gerencie o estresse com técnicas de relaxamento, como meditação ou ioga.</li>
                <li>Evite o consumo excessivo de álcool.</li>
                <li>Busque apoio de amigos, familiares ou profissionais de saúde para manter a motivação.</li>
            </ul>
        `;

        resultado.innerHTML += dicasIMC30;
    } else if (imc >= 30) {
        let dicasIMCAcima30 = `
            <h2>Dicas para perder peso e manter um IMC saudável (abaixo de 30)</h2>
            <p>Um IMC acima de 30 indica obesidade, o que significa que você está com excesso de peso e pode ter um risco aumentado de desenvolver problemas de saúde. É fundamental buscar orientação médica e nutricional para um plano de tratamento individualizado.</p>

            <h3>Mudanças na alimentação:</h3>
            <ul>
                <li>Consulte um nutricionista para um plano alimentar personalizado.</li>
                <li>Priorize alimentos naturais e nutritivos: frutas, legumes, verduras, grãos integrais, proteínas magras e gorduras saudáveis.</li>
                <li>Reduza o consumo de alimentos ultraprocessados, ricos em açúcar, sal e gorduras ruins.</li>
                <li>Controle as porções e evite comer por impulso.</li>
                <li>Beba bastante água e evite bebidas açucaradas.</li>
                <li>Faça refeições regulares e evite pular refeições.</li>
            </ul>

            <h3>Aumento da atividade física:</h3>
            <ul>
                <li>Consulte um médico para avaliar sua condição física e receber orientação sobre exercícios adequados.</li>
             <li>Comece com atividades leves e aumente gradualmente a intensidade e a duração.</li>
                <li>Encontre atividades físicas que você goste, como caminhada, natação, e outros</li>
                </ul>
            `;
            resultado.innerHTML += dicasIMCAcima30
    }
}
                      //RESUMÃO
 /* Este código JavaScript calcula o IMC com base nos valores 
 inseridos pelo usuário em campos de entrada HTML e exibe o resultado e dicas de saúde apropriadas em um elemento HTML. */
                     //PONTOS IMPORTANTES
/* O código utiliza document.getElementById para acessar elementos HTML, o que pressupõe que existam elementos com os IDs "peso", "altura" e
 "resultado" na página HTML.
A função isNaN é usada para verificar se um valor é um número válido.
O método toFixed é usado para formatar o valor do IMC com duas casas decimais.
O uso de template literals facilita a criação de strings HTML de várias linhas.
O código fornece dicas de saúde personalizadas com base na faixa de IMC do usuário. */