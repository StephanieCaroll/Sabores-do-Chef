  document.addEventListener("DOMContentLoaded", function () {
    const expandedCardContainer = document.getElementById("expanded-card-container");
    const expandedCard = document.getElementById("expanded-card");
    const closeButton = document.getElementById("close-button");
    const row = document.querySelector(".row"); // Seleciona a linha principal onde os cards serão inseridos

    // Dados dos cards
    const cardsData = [

        {
            image: "https://i.ytimg.com/vi/8lW_KzUJi0k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDr7uS2hfBV1oZzJlJmYeQpmPaRHA",
            alt: "PaoDeQueijo",
            title: "Pão De Queijo",
            description: "✨ Nosso pão de queijo é crocante por fora, macio por dentro e cheio de sabor! 🧀🥖 Feito com ingredientes de qualidade, é perfeito para qualquer momento do dia! ☕💛",
            ingredients: ["500g de polvilho doce", "250ml de leite", "100ml de óleo vegetal", "2 ovos","200g de queijo parmesão ralado","Sal a gosto"],
            preparation: "Preaqueça o forno a 180°C. Em uma panela, ferva o leite e o óleo. Despeje o líquido quente sobre o polvilho em uma tigela grande, misturando bem para escaldar o polvilho. Deixe esfriar um pouco e adicione os ovos, um de cada vez, misturando bem. Acrescente o queijo ralado e o sal. A masse até formar uma massa homogênea. Modele bolinhas do tamanho de uma noz e coloque-as em uma assadeira untada ou forrada com papel manteiga.Asse por aproximadamente 25-30 minutos ou até ficarem dourados."
        },

        {
            image: "https://areademulher.r7.com/wp-content/uploads/2022/03/fricasse-de-frango-facil-1200x675.png",
            alt: "FricasseDeFrango",
            title: "Fricasse De Frango",
            description: "Nosso fricassê de frango é a combinação perfeita de cremosidade e sabor! 🍗🧀 Feito com frango desfiado e uma camada irresistível de queijo gratinado, é uma explosão de sabor que aquece a alma. Perfeito para qualquer ocasião! ✨🍴",
            ingredients: ["500g de peito de frango cozido e desfiado", "1 lata de milho verde (escorrido)", "1 caixa de creme de leite", "1 copo de requeijão","1 dente de alho picado","1 cebola média picada","Sal e pimenta-do-reino a gosto","200g de queijo mussarela fatiado","100g de batata palha","Azeite para refogar"],
            preparation: "Prepare o creme: No liquidificador, bata o milho, o creme de leite e o requeijão até formar um creme homogêneo. Refogue o frango:Em uma panela, aqueça um fio de azeite e refogue a cebola e o alho até dourar.Adicione o frango desfiado, tempere com sal e pimenta a gosto. Misture o creme com o frango: Montagem: Em um refratário, espalhe a mistura de frango e creme.Cubra com as fatias de queijo mussarela.Assar:Leve ao forno preaquecido a 180°C por cerca de 20 minutos, ou até o queijo derreter e dourar levemente.Finalização:Retire do forno e cubra com batata palha antes de servir.Dica Extra: Sirva com arroz branco e uma salada verde para equilibrar o sabor cremoso do prato."
        },

        {
            image: "https://culinariadesucesso.com/wp-content/uploads/2023/04/brownie-gourmet-para-vender.png",
            alt: "Brownie",
            title: "Brownie",
            description: "Nosso brownie é uma explosão de sabor! 🍫✨ Feito com chocolate de alta qualidade, ele é macio, úmido e irresistivelmente delicioso. Perfeito para adoçar o seu dia! 🍪❤️",
            ingredients: ["200g de chocolate meio amargo", "150g de manteiga sem sal", "1 xícara de açúcar (200g)", "3 ovos","1 xícara de farinha de trigo (120g)","1/2 xícara de cacau em pó (50g)","1 colher de chá de essência de baunilha","Uma pitada de sal"],
            preparation: "Derreta o chocolate e a manteiga:Em banho-maria ou no micro-ondas, derreta o chocolate meio amargo com a manteiga, misturando até ficar homogêneo.Misture os ingredientes secos:Em uma tigela, peneire a farinha de trigo, o cacau em pó e adicione uma pitada de sal.Bata os ovos e o açúcar:Em outra tigela, bata os ovos com o açúcar até obter uma mistura clara e fofa. Adicione a essência de baunilha.Combine tudo:Misture o chocolate derretido à mistura de ovos e, em seguida, adicione os ingredientes secos, mexendo delicadamente.Asse:Despeje a massa em uma forma forrada com papel manteiga e asse em forno preaquecido a 180°C por aproximadamente 25 a 30 minutos.Finalize:Deixe esfriar antes de cortar em quadradinhos.Dica Extra:Para um toque especial, adicione nozes ou pedaços de chocolate à massa antes de assar."
        },

        {
            image: "https://i.ytimg.com/vi/F2npcDqkY5g/maxresdefault.jpg",
            alt: "Empadao",
            title: "Empadao",
            description: "Nosso empadão de frango é recheado com amor e sabor! 🥧🍗 Feito com uma massa dourada e recheio cremoso de frango, é a escolha perfeita para qualquer momento especial. ❤️✨",
            ingredients: ["Para a massa: 500g de farinha de trigo, 250g de manteiga ou margarina gelada", "1 ovo", "1 colher de sopa de água gelada (se necessário) 1 pitada de sal","Para Recheio: 500g de peito de frango desfiado, 1 cebola média picada","2 dentes de alho picados","2 tomates sem pele e sem sementes picados","1/2 pimentão verde picado","1/2 xícara de azeitonas verdes picadas", "1 colher de sopa de óleo ou azeite", "Sal e pimenta a gosto","1/2 xícara de milho verde","1/2 xícara de requeijão cremoso ou creme de leite","Salsinha e cebolinha a gosto"],
            preparation: " Massa:Em uma tigela, misture a farinha de trigo e o sal. Adicione a manteiga gelada e corte-a na farinha com as pontas dos dedos até formar uma farofa.Acrescente o ovo e, se necessário, a água gelada para formar uma massa homogênea.Modele a massa em uma bola, embrulhe em plástico filme e leve à geladeira por cerca de 30 minutos.Recheio:Em uma panela, aqueça o óleo ou azeite e refogue a cebola e o alho até ficarem dourados.Adicione o frango desfiado e refogue por alguns minutos.Acrescente o tomate, o pimentão, as azeitonas e o milho. Tempere com sal, pimenta e cozinhe por cerca de 10 minutos.Adicione o requeijão ou creme de leite e misture bem. Deixe esfriar.Montagem:Preaqueça o forno a 180°C.Abra 2/3 da massa em uma superfície enfarinhada e forre o fundo e as laterais de uma forma (aproximadamente 24cm de diâmetro).Coloque o recheio de frango frio por cima da massa.Abra o restante da massa e cubra o empadão, fechando bem as laterais.Pincele a parte superior com uma gema de ovo batida para dar brilho.Leve ao forno por cerca de 40 minutos ou até a massa ficar dourada."
        },

        {
            image: "https://selecoes.ig.com.br/media/_versions/legacy/e/0/b026ee357bec1dddfa156fbe0a132fa3e76b30b9_widelg.jpg",
            alt: "Muffin",
            title: "Muffin",
            description: "Nossos muffins são pura fofura e sabor! 🧁✨ Feitos com ingredientes fresquinhos e uma textura irresistível, são perfeitos para acompanhar o café ou adoçar seu dia. ❤️🍫🍓",
            ingredients: ["2 xícaras de farinha de trigo", "1 xícara de açúcar", "1 colher de sopa de fermento em pó", "1/2 colher de chá de bicarbonato de sódio","1/2 colher de chá de sal","2 ovos","1/2 xícara de leite","1/2 xícara de óleo vegetal (ou manteiga derretida)","1 colher de chá de essência de baunilha"],
            preparation: "Preaqueça o forno a 180°C e unte uma forma para muffins ou coloque forminhas de papel nas cavidades da forma.Em uma tigela grande, misture a farinha de trigo, o açúcar, o fermento, o bicarbonato de sódio e o sal.Em outra tigela, bata os ovos, adicione o leite, o óleo (ou manteiga derretida) e a essência de baunilha. Misture bem.Faça um buraco no centro dos ingredientes secos e despeje os ingredientes líquidos. Misture até incorporar, mas não bata demais. A massa deve ficar um pouco empelotada.Se desejar, adicione pedaços de chocolate ou frutas secas à massa e misture suavemente.Distribua a massa nas forminhas de muffin, preenchendo cerca de 2/3 de cada uma.Leve ao forno por cerca de 20-25 minutos ou até que, ao enfiar um palito no centro de um muffin, ele saia limpo.Deixe esfriar um pouco e sirva."
        },

        {
            image: "https://receitatodahora.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2024/10/torresmo-crocante-1510-1024x683.jpg.webp",
            alt: "Torresmo",
            title: "Torresmo",
            description: "Nosso torresmo é uma verdadeira explosão de crocância e sabor! 🐖✨ Perfeito para acompanhar aquela cerveja gelada ou como petisco em qualquer momento especial. Uma delícia dourada que conquista todos os paladares! 🍺❤️",
            ingredients: ["500g de pele de porco com gordura (pode ser comprada em açougues ou supermercados)", "1 colher de sopa de sal", "1 colher de sopa de vinagre (opcional, mas ajuda na crocância)", "1 dente de alho amassado (opcional, para dar sabor)","Óleo para fritar"],
            preparation: "Preparando a pele de porco:Lave bem a pele de porco e corte-a em tiras ou cubos pequenos (tamanho de sua preferência).Se houver pelos na pele, queime-os com o maçarico ou passe rapidamente em uma chama para removê-los.Coloque a pele de porco em uma panela grande e adicione a água suficiente para cobri-la. Adicione o sal e o vinagre (se estiver usando) e, se quiser, o alho.Cozinhe em fogo médio por cerca de 40-60 minutos, até que a pele esteja macia e a gordura comece a derreter. Você pode testar furando com um garfo; a carne deve estar bem cozida.Escorrendo e secando:Retire a pele de porco da água e deixe escorrer bem. Se necessário, pode secar um pouco com toalhas de papel para remover o excesso de umidade.Fritando:Aqueça uma boa quantidade de óleo em uma frigideira funda ou panela.Quando o óleo estiver bem quente (cerca de 180°C), adicione as tiras ou cubos de pele de porco, com cuidado para não respingar.Frite até que fiquem dourados e crocantes. O tempo de fritura pode variar, mas geralmente leva de 10 a 15 minutos.Retire os torresmos do óleo e coloque-os em um prato com papel toalha para absorver o excesso de gordura.Servindo:Sirva imediatamente, acompanhado de molho de pimenta, farofa ou até mesmo como petisco com cerveja!"
        },

        {
            image: "https://cdn.casaeculinaria.com/wp-content/uploads/2023/09/15104232/recheio-de-prestigio-cremoso.webp",
            alt: "BoloDePrestigio",
            title: "Bolo De Prestigio",
            description: "Nosso bolo Prestígio é um clássico irresistível! 🍫🥥 Feito com camadas de massa de chocolate fofinha e recheio cremoso de coco, é a combinação perfeita de sabores. Ideal para adoçar momentos especiais! ✨🎂",
            ingredients: ["Para o Bolo: 2 xícaras de açúcar", "4 ovos", "1 xícara de leite", "1/2 xícara de óleo","2 xícaras de farinha de trigo","1 colher de sopa de fermento em pó","100g de coco ralado (de preferência, o coco fresco ou coco seco sem açúcar)","Para a cobertura de chocolate (opcional):1/2 xícara de leite","Para o recheio e cobertura: 1 lata de leite condensado","1 colher de sopa de manteiga","200g de coco ralado (fresco ou seco, sem açúcar)","200g de chocolate meio amargo ou ao leite (para cobertura)"],
            preparation: " Preparando o bolo:Preaqueça o forno a 180°C e unte uma forma média (de aproximadamente 24 cm de diâmetro) com manteiga e farinha.Em uma tigela, bata o açúcar com os ovos até formar um creme claro e fofo.Acrescente o leite e o óleo e continue batendo.Adicione a farinha de trigo aos poucos, misturando até que fique uma massa homogênea.Por último, adicione o fermento em pó e o coco ralado, misturando bem.Despeje a massa na forma e leve ao forno por cerca de 30-40 minutos, ou até que, ao espetar um palito, ele saia limpo.Retire do forno e deixe esfriar.2. Preparando o recheio e cobertura:Em uma panela, coloque o leite condensado, a manteiga e o coco ralado. Cozinhe em fogo médio, mexendo sempre até desgrudar do fundo da panela (como um brigadeiro).Retire do fogo e reserve.3. Montagem:Depois que o bolo esfriar, corte-o ao meio, formando duas camadas.Espalhe o recheio de coco sobre uma das metades do bolo.Coloque a outra metade por cima e cubra todo o bolo com o recheio de coco restante.Derreta o chocolate escolhido (pode ser no micro-ondas ou em banho-maria) e despeje sobre o bolo, cobrindo bem a parte superior e as laterais.Deixe o bolo descansar por alguns minutos para que o chocolate se firme."
        },

        {
            image: "https://cdn.shopify.com/s/files/1/0748/1684/8190/files/20240717170612-recipe-20kit-20thumbnail-20photo-20-20-20.png?v=1721235975&width=1600&height=900",
            alt: "Feijoada",
            title: "Feijoada",
            description: "Nossa feijoada é a verdadeira tradição brasileira! 🍛✨ Feita com carnes selecionadas, temperos caseiros e acompanhada por arroz, farofa e couve refogada. É o prato perfeito para reunir a família e os amigos. Uma explosão de sabores! ❤️🥓🌿",
            ingredients: ["500g de feijão preto", "300g de carne seca (dessalgada e cortada em pedaços)", "300g de costelinha de porco (cortada em pedaços)", "200g de linguiça calabresa (cortada em rodelas)","200g de paio (cortado em rodelas)","150g de bacon (picado)","1 cebola grande (picada)","4 dentes de alho (picados)","2 folhas de louro","1 colher de sopa de azeite de oliva","Sal e pimenta a gosto","1 laranja (cortada em rodelas, opcional, para dar sabor)","1 pimentão verde (opcional)","Cheiro-verde a gosto (salsinha e cebolinha)"],
            Preparation: "Em uma panela grande, coloque o feijão preto e cubra com água. Deixe de molho por pelo menos 8 horas (ou durante a noite) para amolecer os grãos. Se preferir, pode deixar o feijão de molho por menos tempo, mas o processo ajuda a cozinhar mais rápido. Após o tempo de molho, escorra a água e reserve o feijão. 2. Em uma panela grande, coloque o azeite de oliva e frite o bacon até que ele fique crocante. Retire e reserve. 3. Na mesma panela, adicione a carne seca, a costelinha de porco, a linguiça calabresa e o paio. Frite as carnes até dourar um pouco. 4. Adicione a cebola e o alho picados e refogue até que fiquem dourados. 5. Adicione o feijão escorrido à panela com as carnes e refogado. Cubra com água, deixando cerca de 3 dedos de água acima dos ingredientes. Adicione as folhas de louro e, se quiser, a laranja cortada em rodelas (isso ajuda a suavizar o sabor do feijão). 6. Deixe cozinhar em fogo baixo por cerca de 1h30 a 2 horas, ou até que as carnes estejam bem cozidas e o feijão esteja macio. Durante o processo, adicione mais água, se necessário. 7. Prove e ajuste o sal e a pimenta a gosto. Se preferir uma feijoada mais espessa, pode deixar reduzir mais um pouco. 8. Quando o feijão estiver pronto, retire do fogo e acrescente o bacon frito e o cheiro-verde picado. 9. Sirva a feijoada com arroz branco, farofa, rodelas de laranja e, se desejar, torresmo e pimenta."
        },

        {
            image: "https://i0.wp.com/canaldareceita.com.br/wp-content/uploads/2025/01/BOLO-DE-CENOURA-FOFINHO-DE-LIQUIDIFICADOR.jpg?fit=1000%2C600&ssl=1",
            alt: "BoloDeCenoura",
            title: "Bolo De Cenoura",
            description: "✨ Delicie-se com nosso Bolo de Cenoura: fofinho, com sabor irresistível e uma cobertura de chocolate de dar água na boca.",
            ingredients: ["Para o Bolo: 3 cenouras médias", "1/2 xícara de óleo", "3 ovos", "2 xícaras de açúcar","2 xícaras de farinha de trigo","1 colher de sopa de fermento em pó","1 pitada de sal","Para a cobertura de chocolate (opcional):1/2 xícara de leite","2 colheres de sopa de manteiga","4 colheres de sopa de achocolatado em pó","1 xícara de açúcar"],
            preparation: "1. Preparando a Massa Bata os ingredientes no liquidificador: No liquidificador, coloque as cenouras picadas, o óleo e os ovos. Bata bem até que a mistura fique homogênea, com uma textura líquida e sem pedaços grandes de cenoura. Acrescente o açúcar: Adicione o açúcar e bata novamente até que a mistura esteja bem misturada. Adicione os ingredientes secos: Em seguida, adicione a farinha de trigo, o sal e o fermento em pó. Bata no liquidificador por alguns segundos apenas para incorporar os ingredientes. Não bata demais, para não perder a leveza da massa. Consistência da massa: A massa vai ficar um pouco líquida, o que é normal. Isso vai garantir que o bolo fique bem fofinho. 2. Assando o Bolo Preaqueça o forno: Antes de colocar o bolo no forno, preaqueça-o a 180°C por cerca de 10 minutos. Untando a forma: Unte uma forma de aproximadamente 22 cm de diâmetro com manteiga e farinha de trigo, ou se preferir, use papel manteiga para facilitar a remoção do bolo depois de assado. Asse o bolo: Despeje a massa do bolo na forma untada e leve ao forno preaquecido. Asse por cerca de 40 a 45 minutos ou até que, ao espetar um palito no centro do bolo, ele saia limpo. Dica do ponto certo: Fique de olho no bolo, pois o tempo de forno pode variar de acordo com o seu modelo de forno. Assim que ele estiver dourado por cima e um palito sair seco, o bolo estará pronto. 3. Preparando a Cobertura de Chocolate (Opcional) Misture os ingredientes da cobertura: Em uma panela, coloque o leite, a manteiga, o achocolatado em pó e o açúcar. Misture bem e leve ao fogo médio, mexendo sempre. Ferva até engrossar: Quando a mistura começar a ferver, continue mexendo por cerca de 5 minutos até que ela engrosse um pouco. A cobertura deve ficar cremosa, mas não muito espessa. Despeje sobre o bolo: Retire a panela do fogo e despeje a cobertura ainda quente sobre o bolo já assado. A cobertura vai escorrer por todo o bolo, deixando-o irresistível."  
        },

        {
            image: "https://jpimg.com.br/uploads/2023/03/3-receitas-de-lasanha-ao-molho-branco-para-o-almoco-de-domingo.jpg",
            alt: "Lasanha",
            title: "Lasanha",
            description: "Nossa lasanha é a combinação perfeita de sabor e conforto! 🍝✨ Feita com camadas generosas de massa fresca, molho suculento e queijos derretidos, é um clássico que conquista qualquer paladar. Ideal para qualquer ocasião especial! ❤️🧀",
            ingredients: [ "500g de massa de lasanha","500g de carne moída","1 cebola picada","2 dentes de alho picados","2 colheres de sopa de óleo","1 lata de molho de tomate","1 lata de creme de leite","200g de presunto fatiado","200g de queijo mussarela fatiado","Sal e pimenta a gosto","Queijo parmesão ralado (opcional, para cobertura)","Folhas de manjericão (opcional, para decorar)"],
            preparation: "Cozinhe a massa de lasanha conforme as instruções da embalagem e reserve. 2. Em uma panela grande, aqueça o óleo e refogue a cebola e o alho até que fiquem dourados. 3. Adicione a carne moída e cozinhe até que fique bem dourada. 4. Acrescente o molho de tomate e misture bem. Tempere com sal e pimenta a gosto e deixe cozinhar por cerca de 10 minutos em fogo baixo. 5. Adicione o creme de leite ao molho e misture até ficar homogêneo. 6. Preaqueça o forno a 180°C. 7. Em uma travessa, faça camadas de molho de carne, massa de lasanha, presunto, queijo mussarela e repita até acabar os ingredientes, finalizando com uma camada de molho de carne. 8. Polvilhe queijo parmesão ralado por cima (opcional) e leve ao forno por cerca de 30 minutos ou até que o queijo esteja dourado e borbulhante. 9. Retire do forno e deixe descansar por alguns minutos antes de cortar. 10. Decore com folhas de manjericão (opcional) e sirva."
          },
          {
            image: "https://static.itdg.com.br/images/1200-630/d67039c3ae791ed32e8d2912251c9495/312799-original-1-2-.jpg",
            alt: "TortaHolandesa",
            title: "Torta Holandesa",
            description: "Nossa Torta Holandesa é uma sobremesa sofisticada e irresistível! 🍫🍦 Feita com uma base crocante, creme suave e cobertura de chocolate, é a combinação perfeita de sabores para adoçar seus momentos especiais. ✨🍰",
            ingredients: ["200g de biscoito maizena", "100g de manteiga derretida", "500g de creme de leite fresco", "1 lata de leite condensado", "200g de chocolate meio amargo", "2 colheres de sopa de açúcar", "1 pacote de gelatina sem sabor", "1/2 xícara de água quente"],
            preparation: "Triture os biscoitos maizena no processador ou no liquidificador até virarem farelo. 2. Misture os biscoitos triturados com a manteiga derretida até formar uma massa homogênea. 3. Forre o fundo de uma forma de aro removível com a mistura de biscoito, pressionando bem para que fique compacta. 4. Leve a forma ao refrigerador enquanto prepara o creme. 5. Em uma panela, bata o creme de leite fresco com o leite condensado até obter um creme liso e cremoso. 6. Dissolva a gelatina sem sabor na água quente e adicione ao creme, misturando bem. 7. Despeje o creme sobre a base de biscoitos já gelada e leve novamente ao refrigerador por pelo menos 4 horas para firmar. 8. Derreta o chocolate meio amargo e acrescente o açúcar, mexendo até ficar liso. 9. Despeje o chocolate derretido sobre a torta já firme e leve de volta à geladeira por mais 1 hora. 10. Retire a torta da forma e sirva bem gelada."
          },
          {
              image: "https://i.ytimg.com/vi/DxwCpay8T4g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD2ZnqUqpxMoMJ-Zc836AksY55fbA",
              alt: "BombomDePrestigio",
              title: "Bombom De Prestigio",
              description: "Nosso bombom de Prestígio é a união perfeita de chocolate e coco! 🍫🥥 Com uma casquinha crocante de chocolate envolvendo um recheio cremoso de coco, é a sobremesa ideal para adoçar qualquer momento. ❤️✨",
              ingredients: ["1 lata de leite condensado", "100g de coco ralado (fresco ou seco, sem açúcar)", "1 colher de sopa de manteiga", "200g de chocolate meio amargo ou ao leite", "1 colher de chá de essência de baunilha (opcional)"],
              preparation: "Em uma panela, coloque o leite condensado, a manteiga e o coco ralado. Cozinhe em fogo baixo, mexendo sempre até desgrudar do fundo da panela, como um brigadeiro. 2. Retire do fogo e deixe esfriar um pouco. 3. Modele pequenas bolinhas com a mistura de coco e leite condensado e reserve. 4. Derreta o chocolate meio amargo ou ao leite em banho-maria ou no micro-ondas. 5. Com a ajuda de um garfo, mergulhe as bolinhas de coco no chocolate derretido, cobrindo-as completamente. 6. Coloque os bombons sobre papel manteiga ou em forminhas para bombom e leve à geladeira por pelo menos 1 hora para firmar. 7. Sirva os bombons bem gelados e aproveite essa deliciosa receita!"
          },
      
      {
              image: "https://amopaocaseiro.com.br/wp-content/uploads/2022/01/yt-054_enroladinho-de-salsicha_receita.jpg",
              alt: "Enroladinho",
              title: "Enroladinho",
              description: "Nosso enroladinho é perfeito para qualquer momento! 🥐✨ Feito com massa fofinha e recheio irresistível, é uma delícia que conquista desde a primeira mordida. Perfeito para um lanche ou festa! ❤️🍴",
              ingredients: ["500g de massa para pastel", "200g de presunto fatiado", "200g de queijo mussarela fatiado", "1 gema de ovo (para pincelar)", "Óleo para fritar"],
              preparation: "Abra a massa de pastel em uma superfície lisa e corte em quadrados ou retângulos (tamanho de sua preferência). 2. Coloque uma fatia de presunto e uma fatia de queijo em cada pedaço de massa. 3. Enrole a massa, fechando bem as laterais para que o recheio não saia. 4. Pincele cada enroladinho com a gema de ovo batida para dar brilho. 5. Aqueça o óleo em uma panela funda ou frigideira e frite os enroladinhos até que fiquem dourados e crocantes. 6. Retire da panela e coloque sobre papel toalha para retirar o excesso de óleo. 7. Sirva ainda quente, e aproveite!"
          },
      
          {
              image: "https://hips.hearstapps.com/hmg-prod/images/churros-index-661d4692d05e4.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
              alt: "Churros",
              title: "Churros",
              description: "Nossos churros são uma verdadeira delícia! ✨🥖 Feitos com massa fresquinha, fritos na hora e recheados com doce de leite ou chocolate, são perfeitos para adoçar qualquer momento. Um clássico que nunca sai de moda! ❤️🍫",
              ingredients: ["1 xícara de água", "1/2 xícara de óleo", "1 colher de sopa de açúcar", "1 pitada de sal", "1 xícara de farinha de trigo", "2 ovos", "Óleo para fritar", "Açúcar e canela a gosto (para polvilhar)", "1/2 xícara de doce de leite ou chocolate (opcional, para rechear)"],
              preparation: "Em uma panela, coloque a água, o óleo, o açúcar e o sal. Leve ao fogo médio até começar a ferver. 2. Quando ferver, adicione a farinha de trigo de uma vez e mexa bem até formar uma massa homogênea e desgrudar do fundo da panela. 3. Retire a massa do fogo e deixe esfriar por alguns minutos. 4. Acrescente os ovos, um de cada vez, mexendo bem até que a massa fique lisa e brilhante. 5. Coloque a massa em um saco de confeitar com bico star (estrela) para dar o formato característico do churro. 6. Aqueça o óleo em uma panela funda e, quando estiver bem quente, frite os churros até que fiquem dourados e crocantes. 7. Retire os churros e coloque-os sobre papel toalha para escorrer o excesso de óleo. 8. Polvilhe com açúcar e canela a gosto. 9. Se preferir rechear, faça um pequeno furo no churro e coloque doce de leite ou chocolate. Sirva quente e aproveite!"
          },
      
      
          {
              image: "https://recipesblob.oetker.com.br/assets/d044a4ef3cfe45998593f500c00942ef/1272x764/torta-de-limo.jpg",
              alt: "TortaLimao",
              title: "Torta Limao",
              description: "Nossa torta de limão é a combinação perfeita de acidez e doçura! 🍋✨ Feita com base crocante, creme suave de limão e finalizada com merengue dourado, é uma sobremesa deliciosa e refrescante para qualquer momento especial. ❤️🥧",
              ingredients: ["1 pacote de biscoito de maisena", "100g de manteiga derretida", "1 lata de leite condensado", "1 lata de creme de leite", "Suco de 3 limões", "Raspas de limão a gosto", "2 claras", "4 colheres de sopa de açúcar"],
              preparation: "Triture os biscoitos de maisena no processador ou liquidificador até virarem farelo. 2. Misture os biscoitos triturados com a manteiga derretida até formar uma massa homogênea. 3. Forre o fundo de uma forma de aro removível com essa mistura e pressione bem para compactar. Leve ao refrigerador enquanto prepara o recheio. 4. Em uma tigela, misture o leite condensado, o creme de leite e o suco de limão até ficar bem homogêneo. 5. Despeje o recheio sobre a base de biscoito e leve à geladeira por pelo menos 3 horas para firmar. 6. Para a cobertura, bata as claras em neve com o açúcar até formar picos firmes. 7. Coloque a cobertura de claras sobre a torta e, se desejar, decore com raspas de limão. 8. Retorne à geladeira por mais 1 hora antes de servir. Sirva gelada e aproveite!"
          },
          {
              image: "https://api.baraberto.com.br/wp-content/uploads/2023/06/front-view-natural-organic-fuit-juices-bottles-served-with-tubes-wooden-cutting-board-1-scaled.jpg",
              alt: "SodaItalian",
              title: "Soda Italiana",
              description: "Nossa Soda Italiana é refrescante e cheia de sabor! 🥤✨ Feita com uma combinação única de xarope, água com gás e muito gelo, é a escolha perfeita para um momento de frescor e leveza. ❤️🍋🍓",
              ingredients: ["200ml de água com gás", "1 colher de sopa de xarope de fruta (como morango, framboesa, limão ou outras frutas a gosto)", "Gelo a gosto", "Folhas de hortelã (opcional, para decorar)"],
              preparation: "Em um copo, coloque o gelo a gosto. 2. Adicione o xarope de fruta escolhido (morango, framboesa, limão, etc.). 3. Complete o copo com a água com gás. 4. Mexa delicadamente para misturar o xarope com a água com gás. 5. Decore com folhas de hortelã, se desejar. 6. Sirva imediatamente e aproveite a refrescante Soda Italiana!"
          },
      
          {
              image: "https://www.guacira.com.br/images/receitas/0368444001642518854.webp",
              alt: "MolhoManga",
              title: "Molho de Manga Para Saladas",
              description: "Nosso molho de manga é a combinação perfeita de frescor e sabor tropical! 🥗🥭 Feito com manga madura e temperos especiais, é ideal para dar um toque único às suas saladas. Uma explosão de sabores para transformar suas refeições! ✨🍋",
              ingredients: ["1 manga madura", "1/4 de xícara de azeite de oliva", "1 colher de sopa de vinagre de maçã", "1 colher de chá de mel ou açúcar (opcional)", "Suco de 1/2 limão", "Sal e pimenta-do-reino a gosto", "Folhas de hortelã ou manjericão (opcional, para decorar)"],
              preparation: "Descasque e corte a manga em pedaços pequenos. 2. Coloque a manga no liquidificador ou processador de alimentos e bata até obter um purê liso. 3. Adicione o azeite de oliva, o vinagre de maçã, o mel (se desejar) e o suco de limão. Bata novamente até misturar bem. 4. Tempere com sal e pimenta-do-reino a gosto. 5. Se desejar, decore com folhas de hortelã ou manjericão. 6. Sirva o molho sobre a salada fresca de sua preferência e aproveite!"
          },
      
          {
              image: "https://media.istockphoto.com/id/544468096/pt/foto/lemonade-with-lemon-mint-and-ice.jpg?s=612x612&w=0&k=20&c=pcR5R9-XK6X6KveiivtsG0M0cpVaQor57CaNHykX5z4=",
              alt: "Limonada",
              title: "Limonada",
              description: "Nossa limonada é refrescante e cheia de sabor natural! 🍋✨ Feita com limões frescos e o equilíbrio perfeito entre doçura e acidez, é a bebida ideal para trazer frescor ao seu dia. Simplesmente irresistível! 🥤💛",
              ingredients: ["1 limão grande", "500ml de água", "2 colheres de sopa de açúcar (ou a gosto)", "Gelo a gosto", "Folhas de hortelã (opcional, para decorar)"],
              preparation: "Lave bem o limão e corte-o em rodelas ou pedaços. 2. Coloque o limão em um liquidificador e adicione a água e o açúcar. 3. Bata bem até que o limão se desfaça completamente e o açúcar dissolva. 4. Coe a mistura para retirar as cascas e os pedaços de limão, se preferir uma bebida mais suave. 5. Sirva a limonada com gelo e, se desejar, decore com folhas de hortelã. 6. Aproveite a sua limonada refrescante!"
          },
          {
              image: "https://anamariabrogui.com.br/assets/uploads/receitas/fotos/usuario-1828-3bfc3f2745de83964570e3e778915e2c.jpg",
              alt: "SorveteNutella",
              title: "Sorvete de Nutella",
              description: "Nosso sorvete de Nutella é puro prazer em cada colherada! 🍦🍫 Feito com a cremosidade única da Nutella, é perfeito para se refrescar e adoçar os momentos especiais. Uma sobremesa irresistível para todos os amantes de chocolate! ✨❤️",
              ingredients: ["1 lata de leite condensado", "200g de Nutella", "500ml de creme de leite fresco", "1 colher de chá de essência de baunilha"],
              preparation: "Em uma tigela, bata o creme de leite até ficar bem firme, formando picos suaves. 2. Em outra tigela, misture o leite condensado com a Nutella até obter uma mistura homogênea. 3. Adicione a essência de baunilha e misture bem. 4. Incorpore o creme de leite batido à mistura de leite condensado e Nutella, mexendo delicadamente para não perder o volume. 5. Coloque a mistura em um recipiente adequado para congelar e leve ao congelador por pelo menos 4 horas ou até ficar bem firme. 6. Sirva o sorvete de Nutella bem gelado e aproveite!"
          },
          {
              image: "https://combionline.com/img/26013",
              alt: "CheesecakeMirtilo",
              title: "Cheesecake de Mirtilo",
              description: ["200g de biscoito de maisena", "100g de manteiga derretida", "500g de cream cheese", "1 lata de leite condensado", "1/2 xícara de creme de leite fresco", "2 colheres de sopa de açúcar", "Suco de 1 limão", "1 colher de sopa de gelatina sem sabor", "100g de mirtilo", "1/4 de xícara de água", "1/4 de xícara de açúcar para a calda de mirtilo"],
              ingredients: ["1kg de feijão preto", "500g de carne seca", "200g de bacon"],
              preparation: "Triture os biscoitos de maisena no processador ou liquidificador até virarem farelo. 2. Misture os biscoitos triturados com a manteiga derretida até formar uma massa homogênea. 3. Forre o fundo de uma forma de aro removível com essa mistura e pressione bem. Leve ao refrigerador enquanto prepara o recheio. 4. Em uma tigela, bata o cream cheese até ficar cremoso. Adicione o leite condensado, o creme de leite, o açúcar e o suco de limão, e bata até ficar bem homogêneo. 5. Dissolva a gelatina sem sabor na água conforme as instruções da embalagem e adicione à mistura de cream cheese. Misture bem. 6. Despeje a mistura sobre a base de biscoito e leve à geladeira por pelo menos 4 horas ou até firmar. 7. Para a calda de mirtilo, coloque os mirtilos, o açúcar e a água em uma panela. Cozinhe em fogo baixo até que os mirtilos liberem o suco e a calda engrosse. Deixe esfriar. 8. Após o cheesecake firmar, cubra com a calda de mirtilo e sirva gelado. 9. Aproveite sua deliciosa cheesecake de mirtilo!"
          },
          {
              image: "https://receitadaboa.com.br/wp-content/uploads/2024/08/chocolate-quente-cremoso.jpg",
              alt: "ChocolateQuente",
              title: "Chocolate Quente",
              description: "Nosso chocolate quente é puro aconchego em uma xícara! 🍫☕ Feito com chocolate de alta qualidade e leite cremoso, é perfeito para aquecer os seus dias e trazer aquele conforto especial. Irresistível em qualquer momento! ✨❤️",
              ingredients: ["2 xícaras de leite", "2 colheres de sopa de cacau em pó", "2 colheres de sopa de açúcar", "1/2 colher de chá de essência de baunilha", "1 pitada de sal", "100g de chocolate meio amargo ou ao leite picado", "Chantilly ou marshmallows (opcional, para servir)"],
              preparation: "Em uma panela, misture o leite, o cacau em pó, o açúcar, a essência de baunilha e a pitada de sal. 2. Leve ao fogo médio, mexendo constantemente até que o cacau e o açúcar estejam completamente dissolvidos e o leite esteja bem quente (não deixe ferver). 3. Adicione o chocolate picado e continue mexendo até que o chocolate esteja completamente derretido e o chocolate quente esteja bem cremoso. 4. Retire do fogo e sirva em canecas. 5. Se desejar, decore com chantilly ou marshmallows. 6. Aproveite o seu delicioso chocolate quente!"
          },
          {
              image: "https://sabores-new.s3.amazonaws.com/public/2024/11/bobo-de-camarao-rapido.jpg",
              alt: "BoboCamarao",
              title: "Bobo de Camarao",
              description: "Nosso bobó de camarão é uma explosão de sabores brasileiros! 🍤✨ Feito com camarões suculentos, mandioca cremosa e temperos especiais, é um prato que aquece o coração e encanta o paladar. Perfeito para momentos especiais! ❤️🍲",
              ingredients: ["500g de camarão limpo e descascado", "500g de mandioca (aipim) cozida e amassada", "2 colheres de sopa de azeite de dendê", "2 colheres de sopa de manteiga", "1 cebola picada", "2 dentes de alho picados", "1 pimentão verde picado", "2 tomates sem pele e picados", "1/2 xícara de leite de coco", "1/4 de xícara de água", "Sal e pimenta-do-reino a gosto", "Coentro picado a gosto", "Suco de 1 limão", "Azeite de oliva a gosto"],
              preparation: "Cozinhe a mandioca (aipim) em água até ficar bem macia. Depois, amasse a mandioca até formar um purê. Reserve. 2. Tempere os camarões com o suco de limão, sal e pimenta-do-reino. Reserve. 3. Em uma panela grande, aqueça o azeite de dendê e a manteiga. Adicione a cebola, o alho e o pimentão, refogando até que fiquem macios. 4. Acrescente os tomates e cozinhe por alguns minutos até que eles se desfaçam. 5. Adicione o purê de mandioca, o leite de coco e a água, mexendo bem até formar uma mistura homogênea. 6. Coloque os camarões temperados na panela e cozinhe por cerca de 5 a 7 minutos, até que eles fiquem rosados e cozidos. 7. Ajuste o sal e a pimenta a gosto e adicione o coentro picado. 8. Sirva quente, decorado com mais coentro, se desejar, e aproveite o seu delicioso Bobó de Camarão!"
          },
          {
              image: "https://i.ytimg.com/vi/57rMmZL6png/maxresdefault.jpg",
              alt: "Banoffee",
              title: "Banoffee",
              description: "Nossa torta Banoffee é simplesmente irresistível! 🍌✨ Feita com uma base crocante, camadas de banana fresca, doce de leite e chantilly, é a combinação perfeita de texturas e sabores. Ideal para adoçar qualquer momento! ❤️🥧",
              ingredients: ["1 pacote de biscoito de maisena", "100g de manteiga derretida", "3 bananas maduras", "1 lata de leite condensado", "200g de creme de leite fresco", "1 colher de chá de essência de baunilha", "Chocolate em pó ou cacau (opcional, para decorar)"],
              preparation: "Triture os biscoitos de maisena no processador ou liquidificador até virar farelo. 2. Misture os biscoitos triturados com a manteiga derretida até formar uma massa homogênea. 3. Forre o fundo de uma forma de aro removível com essa mistura e pressione bem. Leve à geladeira enquanto prepara o recheio. 4. Em uma panela, cozinhe o leite condensado por cerca de 40 minutos em fogo baixo para fazer um doce de leite (ou use doce de leite pronto). 5. Retire a base de biscoito da geladeira e espalhe o doce de leite sobre ela. 6. Corte as bananas em rodelas e coloque sobre o doce de leite. 7. Em uma tigela, bata o creme de leite fresco com a essência de baunilha até formar chantilly. 8. Espalhe o chantilly sobre as bananas e, se desejar, polvilhe com chocolate em pó ou cacau para decorar. 9. Leve à geladeira por pelo menos 2 horas antes de servir. 10. Sirva gelado e aproveite o seu delicioso Banoffee!"
          },
          {
              image: "https://paolacarosella.com.br/cms/wp-content/uploads/2024/01/97_Cookies-de-chocolate-scaled.jpg",
              alt: "Cookie",
              title: "Cookie",
              description: "Nossos cookies são irresistivelmente crocantes por fora e macios por dentro! 🍪✨ Feitos com ingredientes de alta qualidade e pedaços generosos de chocolate, são perfeitos para adoçar qualquer momento. Uma delícia em cada mordida! ❤️🍫",
              ingredients: ["200g de manteiga em temperatura ambiente", "1 xícara de açúcar", "1/2 xícara de açúcar mascavo", "2 ovos", "2 1/2 xícaras de farinha de trigo", "1 colher de chá de bicarbonato de sódio", "1 pitada de sal", "200g de chocolate meio amargo ou ao leite picado (pode usar gotas de chocolate)"],
              preparation: "Preaqueça o forno a 180°C e unte uma assadeira com manteiga ou forre com papel manteiga. 2. Em uma tigela grande, bata a manteiga com o açúcar e o açúcar mascavo até obter um creme claro e fofo. 3. Adicione os ovos, um de cada vez, batendo bem a cada adição. 4. Em outra tigela, misture a farinha de trigo, o bicarbonato de sódio e o sal. 5. Aos poucos, adicione a mistura seca à mistura de manteiga, mexendo até formar uma massa homogênea. 6. Incorpore o chocolate picado ou as gotas de chocolate à massa. 7. Modele pequenas bolinhas de massa e coloque-as na assadeira, deixando um espaço entre cada uma, pois os cookies irão se espalhar. 8. Asse por cerca de 10 a 12 minutos ou até que as bordas estejam douradas. 9. Retire do forno e deixe esfriar por alguns minutos na assadeira antes de transferir para uma grade para esfriar completamente. 10. Aproveite seus deliciosos cookies!"
          },
          {
              image: "https://www.estadao.com.br/resizer/v2/IA777XFIIFCHXIWSKP6DIF2SIA.jpg?quality=80&auth=745e7f71dfa9cd9ee1818ada9991adb3d063f6fca80af1a1e7ef24db51c78309&width=1075&height=527&smart=true",
              alt: "Croissant",
              title: "Croissant",
              description: "Nosso croissant é puro encanto em cada mordida! 🥐✨ Feito com massa folhada leve e amanteigada, é perfeito para acompanhar seu café ou tornar qualquer momento especial ainda mais delicioso. ❤️☕",
              ingredients: ["500g de farinha de trigo", "10g de sal", "80g de açúcar", "10g de fermento biológico seco", "300ml de água morna", "250g de manteiga gelada", "1 ovo (para pincelar)"],
              preparation: "Em uma tigela grande, misture a farinha de trigo, o sal e o açúcar. 2. Dissolva o fermento na água morna e adicione à mistura de farinha. Misture até formar uma massa. 3. Sove a massa por cerca de 10 minutos até que fique lisa e elástica. Cubra a massa com um pano e deixe descansar por 1 hora ou até dobrar de tamanho. 4. Enquanto a massa descansa, corte a manteiga em pedaços e coloque entre duas folhas de papel manteiga. Bata com um rolo de macarrão até formar um quadrado de aproximadamente 1cm de espessura. Leve à geladeira. 5. Após a massa descansar, abra-a em um retângulo grande sobre uma superfície enfarinhada. Coloque a manteiga no centro e dobre as extremidades da massa sobre ela, formando um pacote. 6. Abra a massa em um retângulo novamente e dobre as extremidades para dentro. Repita esse processo de dobrar e abrir a massa por 3 vezes, refrigerando entre cada etapa por 15 minutos. 7. Após o último descanso, corte a massa em triângulos e enrole cada triângulo a partir da base, formando um croissant. 8. Coloque os croissants em uma assadeira untada, deixando espaço entre eles. Pincele com o ovo batido. 9. Deixe os croissants descansarem por 30 minutos para crescerem. 10. Preaqueça o forno a 200°C e asse os croissants por 15-20 minutos ou até ficarem dourados e crocantes. 11. Retire do forno e deixe esfriar um pouco antes de servir. 12. Aproveite seus croissants fresquinhos!"
          },
          {
              image: "https://www.minhareceita.com.br/app/uploads/2024/07/mobile-pudim-de-liquidificador.jpg",
              alt: "Pudim",
              title: "Pudim",
              description: "Nosso pudim é simplesmente irresistível! 🍮✨ Feito com leite condensado e uma calda de caramelo dourada, ele é cremoso, leve e perfeito para adoçar qualquer ocasião. Uma sobremesa clássica que nunca decepciona! ❤️",
              ingredients: ["1 lata de leite condensado", "2 latas de leite (use a lata de leite condensado vazia para medir)", "3 ovos", "1 xícara de açúcar (para a calda)", "1/2 xícara de água (para a calda)"],
              preparation: "Comece pela calda: em uma panela, coloque o açúcar e a água. Leve ao fogo baixo, mexendo até o açúcar derreter completamente. 2. Aumente o fogo e deixe a calda ferver até que ela fique dourada. Cuidado para não queimar. 3. Despeje a calda quente em uma forma de pudim (com furo no meio), espalhando bem no fundo e nas laterais. Reserve. 4. No liquidificador, bata o leite condensado, o leite e os ovos até formar uma mistura homogênea. 5. Despeje a mistura do pudim na forma caramelizada. 6. Cubra a forma com papel alumínio e leve ao forno preaquecido a 180°C em banho-maria por cerca de 1 hora e 30 minutos. 7. Após esse tempo, retire o pudim do forno e deixe esfriar. Em seguida, leve à geladeira por pelo menos 4 horas ou até ficar bem firme. 8. Para desenformar, passe uma faca nas bordas da forma e vire o pudim em um prato. 9. Sirva gelado e aproveite seu delicioso pudim!"
          },
          {
              image: "https://vovopalmirinha.com.br/wp-content/uploads/2019/04/beijinho-de-coco.png",
              alt: "Beijinho",
              title: "Beijinho",
              description: "Nosso beijinho é pura delicadeza e sabor! 🥥✨ Feito com leite condensado, coco ralado e aquele toque especial, é a escolha perfeita para adoçar festas ou qualquer momento do seu dia. Uma tentação em forma de docinho! ❤️🍬",
              ingredients: ["1kg de feijão preto", "500g de carne seca", "200g de bacon"],
              preparation: "Em uma panela, adicione o leite condensado, a manteiga e o coco ralado. 2. Cozinhe em fogo baixo, mexendo sempre, até a mistura começar a se soltar do fundo da panela e formar um brigadeiro cremoso (cerca de 10 minutos). 3. Retire do fogo e deixe esfriar um pouco. 4. Modele pequenas bolinhas com a mão, do tamanho de uma noz. 5. Se desejar, passe as bolinhas no açúcar cristal para cobri-las. 6. Decore com um cravo-da-índia em cima de cada beijinho. 7. Sirva em forminhas de papel e aproveite!"
          },
          {
              image: "https://receitas.wap.ind.br/wp-content/uploads/2024/10/risoto-de-camarao-1080x640.jpg",
              alt: "RisotoCamarao",
              title: "Risoto de Camarao",
              description: "Nosso risoto de camarão é uma combinação perfeita de sofisticação e sabor! 🍤✨ Feito com camarões suculentos, arroz cremoso e um toque especial de temperos aromáticos, é o prato ideal para encantar qualquer paladar. Perfeito para ocasiões especiais! ❤️🍚",
              ingredients: ["300g de camarões limpos e descascados", "1 xícara de arroz arbóreo", "1/2 cebola picada", "2 dentes de alho picados", "1/2 xícara de vinho branco seco", "750ml de caldo de camarão ou caldo de legumes", "1 colher de sopa de manteiga", "2 colheres de sopa de azeite de oliva", "100g de queijo parmesão ralado", "1/4 de xícara de creme de leite", "Sal e pimenta-do-reino a gosto", "Salsinha picada a gosto", "Suco de 1/2 limão (opcional)"],
              preparation: "Em uma panela, aqueça o azeite de oliva e refogue a cebola e o alho até ficarem dourados. 2. Adicione os camarões e refogue por 2-3 minutos, até ficarem rosados. Tempere com sal e pimenta a gosto. Retire os camarões da panela e reserve. 3. Na mesma panela, adicione o arroz arbóreo e refogue por 1-2 minutos, mexendo para envolver bem os grãos de arroz. 4. Adicione o vinho branco e mexa até o álcool evaporar. 5. Comece a adicionar o caldo quente, uma concha de cada vez, mexendo constantemente. Só adicione mais caldo quando o líquido anterior tiver sido absorvido. 6. Continue esse processo até o arroz estar al dente e cremoso, o que deve levar cerca de 18-20 minutos. 7. Quando o arroz estiver pronto, adicione a manteiga, o queijo parmesão e o creme de leite. Misture bem até ficar cremoso. 8. Volte os camarões à panela, adicione o suco de limão (se estiver usando) e misture. 9. Ajuste o sal e a pimenta e finalize com salsinha picada. 10. Sirva imediatamente e aproveite seu delicioso risoto de camarão!"
          },
          {
              image: "https://static.itdg.com.br/images/622-auto/6e3470a4a9d32f4410163273b4abee22/mojito-de-melancia-sem-alcool.jpg",
              alt: "MojitoMelancia",
              title: "Mojito de Melancia",
              description: "Nosso mojito de melancia é a definição de frescor tropical! 🍉✨ Feito com suco de melancia, hortelã fresca, limão e um toque de rum, é a bebida perfeita para refrescar os dias quentes e trazer aquele sabor único para qualquer ocasião. ❤️🥂",
              ingredients: ["1/2 xícara de melancia picada", "10 folhas de hortelã", "1 colher de sopa de açúcar", "1/2 limão (suco)", "50ml de rum branco", "Água com gás (a gosto)", "Gelo"],
              preparation: "Em um copo, amasse a melancia com um socador até obter o suco da fruta. 2. Adicione as folhas de hortelã e o açúcar e amasse mais um pouco para liberar o sabor da hortelã. 3. Esprema o suco de meio limão no copo. 4. Adicione o rum branco e misture bem. 5. Complete o copo com gelo e água com gás a gosto. 6. Mexa novamente para incorporar os ingredientes. 7. Decore com uma rodela de limão e algumas folhas de hortelã. 8. Sirva imediatamente e aproveite seu Mojito de Melancia refrescante!"
          },
          {
              image: "https://i.ytimg.com/vi/Z5g07HdxSOc/maxresdefault.jpg",
              alt: "PavePacoca",
              title: "Pave de Paçoca",
              description: "Nosso pavê de paçoca é uma verdadeira tentação brasileira! ✨🥜 Feito com camadas cremosas e aquele sabor único da paçoca, é a sobremesa ideal para surpreender e conquistar paladares. Perfeito para adoçar qualquer ocasião especial! ❤️🍰",
              ingredients: ["1 pacote de biscoito champanhe", "500ml de creme de leite", "1 lata de leite condensado", "200ml de leite", "2 colheres de sopa de amido de milho", "1 xícara de paçoca esfarelada", "1 colher de chá de essência de baunilha", "Paçoca esfarelada para decorar"],
              preparation: "Em uma panela, misture o leite condensado, o leite e o amido de milho. Cozinhe em fogo médio, mexendo sempre, até obter um creme espesso. Retire do fogo e adicione a essência de baunilha. Deixe esfriar. 2. Em uma tigela, bata o creme de leite até obter um chantilly. 3. Misture o chantilly ao creme que foi preparado, delicadamente, até que fique homogêneo. 4. Em um refratário, coloque uma camada de biscoito champanhe embebido no leite. 5. Cubra com uma camada do creme e espalhe uma camada de paçoca esfarelada por cima. 6. Repita as camadas até terminar os ingredientes, sendo a última camada de creme. 7. Decore com paçoca esfarelada por cima. 8. Leve à geladeira por pelo menos 4 horas antes de servir. 9. Sirva gelado e aproveite seu delicioso pavê de paçoca!"
          },
          {
              image: "https://fricassedefrango.com.br/wp-content/uploads/2025/01/receita-de-frango-frito-kfc.jpg",
              alt: "Frango",
              title: "Frango Frito",
              description: "Nosso frango frito é crocante, suculento e cheio de sabor! 🍗✨ Empanado com uma mistura de temperos especiais e frito até atingir a perfeição dourada, é a escolha certa para quem adora aquele estilo irresistível e clássico. Uma verdadeira explosão de sabor! ❤️🍴",
              ingredients: ["1kg de coxas e sobrecoxas de frango", "2 xícaras de farinha de trigo", "1 colher de sopa de sal", "1 colher de sopa de pimenta-do-reino", "1 colher de sopa de alho em pó", "1 colher de sopa de cebola em pó", "1 colher de sopa de páprica doce", "1/2 colher de chá de pimenta caiena (opcional, para dar um toque picante)", "1 colher de chá de tomilho seco", "1 colher de chá de orégano seco", "1 colher de chá de manjericão seco", "1 colher de chá de curry em pó", "1/2 xícara de leite", "1 ovo", "Óleo para fritar"],
              preparation: "Em uma tigela, misture a farinha de trigo com o sal, pimenta-do-reino, alho em pó, cebola em pó, páprica, pimenta caiena, tomilho, orégano, manjericão e curry. Essa será a mistura seca. 2. Em outro recipiente, bata o leite com o ovo até ficar homogêneo. Esse será o banho de leite. 3. Passe cada pedaço de frango primeiro no banho de leite, cobrindo bem. Depois, empane na mistura seca de farinha, pressionando bem para que a farinha grude. 4. Em uma panela grande, aqueça o óleo em fogo médio-alto (o suficiente para cobrir os pedaços de frango). 5. Frite os pedaços de frango por cerca de 10-12 minutos, ou até que fiquem dourados e crocantes por fora e cozidos por dentro. Para garantir que o frango cozinhe bem por dentro, você pode usar um termômetro de cozinha e verificar se a temperatura interna atingiu 75°C. 6. Retire o frango do óleo e deixe escorrer em papel toalha. 7. Sirva imediatamente e aproveite seu frango frito"
          },
          {
              image: "https://simplelivingrecipes.com/wp-content/uploads/2019/06/Feijao-Tropeiro-1.jpeg",
              alt: "FeijaoTropeiro",
              title: "Feijão Tropeiro",
              description: "Nosso feijão tropeiro é uma verdadeira celebração da culinária mineira! 🫘✨ Feito com feijão, linguiça, bacon, farinha de mandioca e temperos especiais, é um prato que combina sabores autênticos e textura única. Perfeito para um almoço bem brasileiro! ❤️🍴",
              ingredients: ["500g de feijão carioquinha", "200g de bacon picado", "200g de linguiça calabresa cortada em rodelas", "2 colheres de sopa de óleo ou azeite", "1 cebola grande picada", "3 dentes de alho picados", "2 ovos", "1 xícara de farinha de mandioca torrada", "Salsinha a gosto", "Sal e pimenta-do-reino a gosto", "1 folha de louro", "Cheiro-verde a gosto", "Torresmo (opcional, para decorar)"],
              preparation: "Cozinhe o feijão carioquinha com a folha de louro até que fique macio, mas sem desmanchar. Reserve. 2. Em uma frigideira grande, frite o bacon até que fique bem dourado e crocante. Retire o bacon e reserve. 3. Na mesma frigideira, frite a linguiça calabresa até dourar. 4. Em outra panela, aqueça o óleo ou azeite e refogue a cebola e o alho até que fiquem dourados. 5. Adicione os ovos batidos e mexa até que eles cozinhem, fazendo uma mistura bem fofa. 6. Acrescente o feijão cozido, o bacon e a linguiça calabresa frita. Misture bem. 7. Aos poucos, adicione a farinha de mandioca, mexendo bem até incorporar. 8. Tempere com sal, pimenta-do-reino e cheiro-verde a gosto. 9. Deixe tudo dourar por alguns minutos, mexendo para não grudar. 10. Sirva quente, decorado com torresmo se desejar. Aproveite seu feijão tropeiro!"
          },
          {
              image: "https://s2-receitas.glbimg.com/jOvVw-5MaZswJgZvZ8ya1V7ZMXE=/0x0:800x533/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2018/c/r/mLrOqnRiemx034biSdHw/ratatouille.jpg",
              alt: "Ratatouille",
              title: "Ratatouille",
              description: "Nosso ratatouille é um prato clássico cheio de cores e sabores! 🍆🍅🥒 Feito com uma combinação de legumes frescos cuidadosamente assados, ervas aromáticas e temperos especiais, é uma opção leve, saudável e sofisticada. Perfeito para encantar qualquer refeição! ❤️✨",
              ingredients: ["2 abobrinhas médias cortadas em rodelas finas", "2 berinjelas médias cortadas em rodelas finas", "1 pimentão vermelho cortado em tiras", "1 pimentão amarelo cortado em tiras", "1 cebola grande cortada em rodelas", "4 tomates maduros cortados em rodelas", "2 dentes de alho picados", "Azeite de oliva a gosto", "Sal e pimenta-do-reino a gosto", "1 colher de chá de ervas de Provence (ou tomilho e manjericão)", "Folhas de manjericão fresco para decorar (opcional)"],
              preparation: "Preaqueça o forno a 180°C. 2. Em uma frigideira, aqueça um pouco de azeite de oliva e refogue o alho até dourar. Adicione a cebola e refogue até que fique transparente. 3. Em uma assadeira, espalhe uma camada fina da mistura de cebola e alho no fundo. 4. Organize as rodelas de abobrinha, berinjela, pimentão e tomate em camadas alternadas e sobrepondo ligeiramente as fatias (em formato de círculo ou espiral, conforme preferir). 5. Tempere com sal, pimenta-do-reino e as ervas de Provence. Regue com azeite de oliva por cima. 6. Cubra com papel alumínio e asse por cerca de 30 minutos. 7. Retire o papel alumínio e asse por mais 15-20 minutos, até que os vegetais estejam macios e dourados nas bordas. 8. Decore com folhas de manjericão fresco, se desejar. 9. Sirva quente ou morno como acompanhamento ou prato principal. Aproveite seu ratatouille!"
          },
          {
              image: "https://californiaavocado.com/wp-content/uploads/2020/07/Guacamole-Autentico-1.jpeg",
              alt: "Guacamole",
              title: "Guacamole",
              description: "Nosso guacamole é a essência da simplicidade e frescor! 🥑✨ Feito com abacates maduros, tomate, cebola, coentro, suco de limão e um toque de tempero, é perfeito para acompanhar nachos, tacos ou qualquer refeição. Um verdadeiro sabor mexicano! ❤️🌮",
              ingredients: ["3 abacates maduros", "1 tomate médio picado", "1/2 cebola roxa picada", "1 dente de alho picado", "1 pimenta dedo-de-moça sem sementes (opcional, a gosto)", "Suco de 1 limão", "Coriandro fresco picado a gosto", "Sal a gosto", "Pimenta-do-reino a gosto"],
              preparation: "Corte os abacates ao meio, retire o caroço e retire a polpa com uma colher. Coloque a polpa em uma tigela. 2. Amasse o abacate com um garfo até obter uma consistência cremosa, mas com alguns pedaços pequenos. 3. Adicione o tomate picado, a cebola roxa, o alho e a pimenta dedo-de-moça (se estiver usando). 4. Regue com o suco de limão e misture bem. 5. Tempere com sal e pimenta-do-reino a gosto. 6. Finalize com o coriandro fresco picado. 7. Sirva imediatamente com nachos, tacos ou como acompanhamento de pratos mexicanos. Aproveite sua guacamole!"
          },
      
          {
              image: "https://receitadaboa.com.br/wp-content/uploads/2024/09/iStock-2105745777.jpg",
              alt: "SorveteManga",
              title: "Sorvete de Manga",
              description: "Nosso sorvete de manga é o toque perfeito de frescor tropical! 🍦🥭 Feito com mangas maduras e selecionadas, é incrivelmente cremoso e refrescante. Ideal para dias quentes ou para adoçar qualquer momento especial. ❤️✨",
              ingredients: ["2 mangas maduras cortadas em pedaços", "1 lata de leite condensado", "200ml de creme de leite", "Suco de 1 limão", "1/2 xícara de água (opcional, se necessário para ajudar a bater)"],
              preparation: "Coloque a manga cortada em pedaços no liquidificador ou processador de alimentos. 2. Adicione o leite condensado, o creme de leite e o suco de limão. Bata até obter um creme homogêneo. 3. Se necessário, adicione um pouco de água para ajudar a bater os ingredientes, mas faça isso com cuidado para não deixar o creme muito líquido. 4. Transfira a mistura para um recipiente próprio para freezer e cubra com filme plástico ou tampa. 5. Leve ao congelador por pelo menos 6 horas ou até que o sorvete esteja bem firme. 6. Antes de servir, deixe o sorvete descansar por alguns minutos fora do congelador para amolecer um pouco. 7. Sirva e aproveite seu delicioso sorvete de manga!"
          },
          
          {
              image: "https://recipesblob.oetker.com.br/assets/786b185037aa4d6aae33f838ee5e7ef9/1272x764/milk-shake-de-chocolate.jpg",
              alt: "MilkshakeChocolate",
              title: "MilkshakeChocolate",
              description: "Nosso milkshake de chocolate é pura indulgência! 🍫🥤 Feito com sorvete cremoso de chocolate, leite gelado e finalizado com chantilly e uma calda irresistível, é perfeito para adoçar e refrescar qualquer momento. Uma verdadeira explosão de sabor! ❤️✨",
              ingredients: ["2 bolas de sorvete de chocolate", "1 xícara de leite", "1 colher de sopa de achocolatado em pó ou chocolate em pó", "Chantilly (opcional, para decorar)", "Calda de chocolate (opcional, para decorar)", "Gelo (opcional, para um milkshake mais gelado)"],
              preparation: "No liquidificador, coloque o sorvete de chocolate, o leite e o achocolatado em pó. 2. Bata até que a mistura fique bem cremosa e homogênea. 3. Se preferir um milkshake mais gelado, adicione gelo a gosto e bata novamente. 4. Transfira para um copo e, se desejar, decore com chantilly e calda de chocolate por cima. 5. Sirva imediatamente e aproveite o seu delicioso milkshake de chocolate!"
          },
      
          {
              image: "https://static.itdg.com.br/images/1200-630/8231acb174ba2e6a4b4a61145e48eea7/249008-shutterstock-1907121220.jpg",
              alt: "MousseMaracuja",
              title: "Mousse de Maracuja",
              description: "Nossa mousse de maracujá é a combinação perfeita de suavidade e sabor tropical! 🍮🥭 Feita com a acidez única do maracujá e uma textura incrivelmente leve e cremosa, é a sobremesa ideal para encantar qualquer momento. Refrescante e irresistível! ❤️✨",
              ingredients: ["1 lata de leite condensado", "1 lata de creme de leite", "1/2 xícara de suco de maracujá concentrado (ou a polpa de 2 maracujás)", "1 envelope de gelatina em pó sem sabor", "1/4 de xícara de água"],
              preparation: "Dissolva a gelatina em pó na água conforme as instruções da embalagem e depois leve ao micro-ondas por 15 segundos ou até ficar líquida. 2. No liquidificador, coloque o leite condensado, o creme de leite, o suco de maracujá e a gelatina dissolvida. 3. Bata tudo por cerca de 3 a 4 minutos, até obter uma mistura cremosa. 4. Transfira a mistura para taças ou um recipiente único e leve à geladeira por pelo menos 4 horas, ou até firmar. 5. Decore com a polpa de maracujá ou calda de maracujá por cima antes de servir, se desejar. 6. Sirva bem gelado e aproveite a sua mousse de maracujá!"
          },
      
          {
              image: "https://www.seriouseats.com/thmb/RQ4cI-QrOgvPNkSQyXNsoS6MtA4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20241212-SEA-Tanghulu-MelatiCitrawireja-Hero2-06-81c06d38bf2f48e8911911cc99a4300d.jpg",
              alt: "Tanghulu",
              title: "Tanghulu",
              description: "Nosso tanghulu é a combinação perfeita entre crocância e doçura! 🍡✨ Feito com frutas frescas envoltas em uma camada brilhante e crocante de caramelo, é uma sobremesa tradicional que encanta os olhos e o paladar. Uma verdadeira delícia para qualquer momento! ❤️🍓",
              ingredients: ["10 morangos frescos", "10 espetos de madeira", "200g de açúcar", "100ml de água", "1 colher de sopa de glucose de milho (opcional, para maior crocância)"],
              preparation: "Lave bem os morangos e retire as folhas. Seque-os completamente com um pano ou toalha. 2. Espete cada morango em um espeto de madeira. 3. Em uma panela, adicione o açúcar, a água e a glucose de milho (se estiver usando). 4. Leve a mistura ao fogo médio e deixe ferver até formar um xarope, o que deve levar cerca de 10 a 15 minutos. Teste o ponto colocando uma gota da calda em um copo de água fria; ela deve se solidificar rapidamente. 5. Retire a calda do fogo e, com cuidado, mergulhe os morangos na calda quente, cobrindo-os completamente. 6. Coloque os morangos mergulhados sobre uma superfície de silicone ou papel manteiga para esfriar e endurecer. 7. Deixe os Tanghulu esfriarem completamente e sirva. Aproveite o doce crocante e saboroso!"
          }
          
        ];      

    // Criação dinâmica dos cards
    cardsData.forEach(card => {
        const col = document.createElement("div");
        col.className = "col";

        col.innerHTML = `
            <div class="card h-100">
                <img src="${card.image}" class="card-img-top" alt="${card.alt}">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.description}</p>
                    <div class="card-details d-none">
                        <h6>Ingredientes:</h6>
                        <ul>
                            ${card.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
                        </ul>
                        <h6>Modo de Preparo:</h6>
                        <p>${card.preparation}</p>
                    </div>
                </div>
            </div>
        `;

        col.querySelector(".card").addEventListener("click", function () {
            const cardTitle = col.querySelector(".card-title").outerHTML; // Obtém o título
            const cardImage = col.querySelector(".card-img-top").outerHTML; // Obtém a imagem
            const cardDetails = col.querySelector(".card-details").innerHTML; // Obtém os detalhes do card

            expandedCard.innerHTML = `
            ${cardTitle}
            ${cardImage}
            <div class="card-details">
                <div class="ingredients">
                    <h6>Ingredientes:</h6>
                    <ul>${cardDetails.match(/<ul>.*<\/ul>/s)[0]}</ul>
                </div>
                <div class="preparation d-none">
                    <h6>Modo de Preparo:</h6>
                    <p>${cardDetails.match(/<p>.*<\/p>/s)[0]}</p>
                </div>
            </div>
            <div class="btn-toolbar justify-content-between mt-3" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-secondary" onclick="showIngredients()" style ="cursor: url('chef.svg') 16 16, auto;">Ingredientes</button>
                    <button type="button" class="btn btn-outline-secondary" onclick="showPreparation()" style ="cursor: url('chef.svg') 16 16, auto;">Modo de Preparo</button>
                </div>
            </div>
        `;        

            expandedCardContainer.classList.remove("d-none"); // Exibe o card expandido
            document.body.style.overflow = "hidden"; // Bloqueia o fundo
        });

        row.appendChild(col); // Adiciona o card à linha principal
    });

    window.showIngredients = function () {
        const ingredients = expandedCard.querySelector(".ingredients");
        const preparation = expandedCard.querySelector(".preparation");
        ingredients.classList.remove("d-none"); // Mostra a seção de ingredientes
        preparation.classList.add("d-none"); // Esconde o modo de preparo
    };
    
    window.showPreparation = function () {
        const ingredients = expandedCard.querySelector(".ingredients");
        const preparation = expandedCard.querySelector(".preparation");
        ingredients.classList.add("d-none"); // Esconde a seção de ingredientes
        preparation.classList.remove("d-none"); // Mostra o modo de preparo
    };
    // Fecha o card expandido
    closeButton.addEventListener("click", function () {
        expandedCardContainer.classList.add("d-none"); // Oculta o card expandido
        document.body.style.overflow = "auto"; // Restaura o scroll do fundo
    });
});

    