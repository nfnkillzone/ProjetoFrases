import { useState } from 'react'
import './App.css'
import LogoImg from '../src/assets/LogoFrases.png'


function App() {
  const [textoFrase, setTextoFrase] = useState('')
  const [categoriaSeleciona, setCategoriaSelecionada] = useState(0)

  const allFrases = [{
    id: 1,
    nome: 'Motivação',
    frases: ["“Às vezes, a vida vai te acertar um tijolo na cabeça.Não perca a fé.” – Steve Jobs, Apple.",

      "Tente uma, duas, três vezes e se possível tente a quarta, a quinta e quantas vezes for necessário. Só não desista nas primeiras tentativas, a persistência é amiga da conquista. Se você quer chegar aonde a maioria não chega, faça o que a maioria não faz. – Bill Gates, Microsoft.",

      "Quando você acredita em algo, acredite até o fim. Não dê margem para nenhum tipo de dúvida. – Walt Disney.",

      "A vida não é sobre ter, é sobre dar e ser. – Kevin Kruse.",

      "O entusiasmo é a maior força da alma.Conserva - o e nunca te faltará poder para conseguires o que desejas. – Napoleon Hill.",

      "No meio da confusão, encontre a simplicidade.A partir da discórdia, encontre a harmonia.No meio da dificuldade reside a oportunidade. – Albert Einstein.",

      '“Uma ideia é um feito de associação.” – Robert Frost.',

      '“A sua vida é 10 % do que acontece contigo e 90 % de como você reage a isso.” – Charles Swindoll.',

      '“Nós nos tornamos aquilo que pensamos.” – Earl Nightingale.',

      '“Perdi mais de 9 mil tiros livres em minha carreira.Perdi quase 300 jogos.Por 26 vezes, eu tive a bola do jogo e perdi.Eu falhei algumas vezes em minha vida, é por isso que eu consegui.” – Michael Jordan.',

      ' “Solucionar grandes problemas é mais fácil do que solucionar pequenos problemas.” – Sergey Brin, Google.',

      '“Muitas empresas não têm sucesso após um tempo.O que elas fundamentalmente fazem errado ? Negligenciam o futuro.” – Larry Page, Google.',

      '80 % dos seus resultados vêm de 20 % das suas ações.” – Vilfredo Pareto.',

      '“Sua tarefa é descobrir o seu trabalho e, então, com todo o coração, dedicar - se a ele.” – Buda.',

      '“Eu atribuo o meu sucesso a isso: eu nunca dei ou tomei qualquer desculpa.” – Florence Nightingale.',

      '“Daqui a 20 anos você estará mais decepcionado pelas coisas que você não fez, do que pelas que fez.Então, jogue fora suas amarras, navegue para longe do porto seguro, pegue os ventos em suas velas.Explore, sonha, descubra.” – Mark Twain.',

      ' “Quando eu tinha cinco anos, minha mãe me disse que a felicidade era a chave para a vida.Quando eu fui para a escola, eles me perguntaram o que eu queria ser quando crescesse.Eu escrevi ‘feliz’. Eles me disseram que eu não entendi a tarefa, e eu disse a eles que eles não entendiam a vida.” – John Lennon.',

      '“Um líder é um vendedor de esperança.” – Napoleão Bonaparte.',

      '“Não são os anos de sua vida que contam, é a vida em seus anos.” – Abraham Lincoln.',

      '"Liderança é fazer as pessoas trabalharem para você quando não são obrigadas." –  Fred Smith, FedEx.',

      '“A maioria dos nossos clientes faz a sua própria bebida.Tornamos esse processo algo divertido.” – Howard Schultz, StarBucks.',

      ' “Não temos um departamento de marketing, mas um departamento de clientes.Não temos um departamento de pessoal, temos um departamento de pessoas.” – Herb Kelleher, Southwest Airlines.',

      ' “Todo mundo nasce empreendedor.Alguns têm a chance de libertar esse potencial.Outros nunca vão ter a chance ou nunca souberam que tinham essa capacidade.” – Muhammad Yunus, Grameen Bank.',

      '“Seja inteligente, mas nunca mostre demais.” – Louis B.Mayer, MGM.',

      '"Pesquisa: a distância entre uma ideia e sua realização." – David Sarnoff, criador da NBC.',

      '“Tem que existir este pioneiro, o indivíduo que tem a coragem, a ambição de superar os obstáculos que sempre se desenvolvem quando se tenta fazer algo de valor, especialmente quando é novo e diferente.” – Alfred Sloan Jr., General Motors.',

      '“O importante, na minha opinião, não é colocar a culpa em alguém, mas averiguar o que causou o erro.” – Akio Morita, Sony.',

      '“A tomada de riscos é a pedra angular dos impérios.” – Estée Mentzer, Cosméticos Estée.',

      '“A função da maior parte da publicidade não é persuadir pessoas a experimentar o seu produto, mas persuadi - las a usá - lo mais frequentemente que as outras marcas que conhecem.” – David Ogilvy, Ogilvy & Mather.',

      '“Você gostaria que eu lhe desse uma fórmula para o sucesso ? É muito simples, de verdade.Dobre sua taxa de falhas.Você está pensando em fracasso como o inimigo do sucesso, mas isso não é tudo.Você pode ser desencorajado pelas falhas ou você pode aprender com elas.Então vá em frente e cometa erros.Faça tudo o que puder.Porque, lembre - se: é onde você vai encontrar o sucesso.” – Thomas Watson Jr., IBM.',

      '“Na engenharia, eu vejo o fracasso de um ano como uma oportunidade de tentar novamente no ano seguinte.O fracasso não é algo a ser evitado, você quer que ele aconteça bem rápido para que você possa progredir rapidamente.” – Gordon Moore, Intel.',

      '“Qualidade é a nossa melhor garantia da fidelidade do cliente, a nossa mais forte defesa contra a concorrência estrangeira e o único caminho para o crescimento e para os lucros.” – Jack Welch, General Electric.',

      '“Se você quer construir um negócio, construa primeiro as pessoas.” – Brownie Wise, Tupperware.',

      '“Dois importantes fatos, nesta vida, saltam aos olhos; primeiro, que cada um de nós sofre inevitavelmente derrotas temporárias, de formas diferentes, nas ocasiões mais diversas.Segundo, que cada adversidade traz consigo a semente de um benefício equivalente.Ainda não encontrei homem algum bem - sucedido na vida que não houvesse antes sofrido derrotas temporárias.Sempre que um homem supera os reveses, torna - se mental e espiritualmente mais forte... É assim que aprendemos o que devemos com a grande lição da adversidade.” – Andrew Carnegie, Companhia de Aço Carnegie.',

      '“Vá até onde a sua vista alcançar e, ao chegar lá, você conseguirá enxergar mais longe.” – J.P.Morgan, J.P.Morgan & Company.',

      '“Eu acredito que cada direito implica em uma responsabilidade, cada oportunidade em uma obrigação; e cada posse, um tributo.” – John D.Rockefeller, Indústrias Rockefeller.',

      '“Os negócios, mais do que outra ocupação, são uma constante com o futuro; é um cálculo contínuo, um exercício instintivo de previdência.” – Henry R.Luce, Fortu.',

      '“Metade do dinheiro que gasto em publicidade é desperdiçado, e o pior é que não sei que metade é essa.” –  William Lever, Fundador da Unilever',

      '“Antes que diga que não consegue fazer alguma coisa, experimente.” – Sakichi Toyoda, Fundador da Toyota.',

      '"Precisamos de uma nova mentalidade para tornar o capitalismo uma força aceitável no mundo. Se as empresas se importarem apenas em lucrar e acumular bônus, ferrando pessoas e o mundo no processo, então não se sustentarão por muito tempo, e nem vão merecer. Mas se elas começarem a ser uma força para o bem, eu realmente acho que poderíamos superar a maioria dos problemas do mundo. Seria uma maneira tão satisfatória de fazer as coisas que as pessoas se divertiriam muito." – Richard Branson, Virgin Records.',

      '“Fiquei impressionado com a urgência do fazer.Saber não é suficiente; devemos aplicar.Estar disposto não é o suficiente; devemos fazer.” – Leonardo Da Vinci.',

      '"Independentemente do que você faça, seja diferente. Este foi o conselho que minha mãe me deu e eu não consigo pensar em uma dica melhor para um empreendedor. Se você for diferente, você se destacará." – Anita Roddick, The Body Shop.',

      '"Eu acho que as metas nunca devem ser fáceis, elas devem forçá-lo a trabalhar, mesmo que sejam desconfortáveis ​​no momento." – Michael Phelps.',

      '“Ao procurar pessoas para contratar, você busca três qualidades: integridade, inteligência e energia.Se elas não têm a primeira, as outras duas matarão você.” – Warren Buffet, Investidor.',

    ]
  }, {
    id: 2,
    nome: "Bom dia",
    frases: [
      'Bom dia! Que a sua capacidade de se encantar com a vida jamais adormeça.',

      'Cultivar com carinho as pessoas que gostamos faz crescer flores em nossos corações. Bom dia!',

      'Concentre-se em Deus e abrace esse novo dia com fé, coragem e gratidão. O que for pra dar certo, vai dar! Bom dia.',

      'Amanhã a gente tenta, hoje a gente vive. Bom dia!',

      'Bom dia, que Deus nos mantenha firmes perante as adversidades desse novo dia que se inicia.',

      'Fé para o dia de hoje, o resto Deus acrescenta. Bom dia!',

      'Bom dia, a cada manhã Deus tem algo novo para entregar nas suas mãos. Receba!.',

      'Que o nosso dia seja de paz e que todo o bem que fizermos, todo amor que doarmos se transforme em bênçãos para nós. Bom dia!',

      'Obrigado, meu Deus, pelo privilégio da vida e pela alegria de um novo amanhecer. Bom dia!',

      'Bom dia! Que as nossas vidas sejam abençoadas com muito amor, saúde, felicidade e paz.',

      'Para esse novo dia, jogue fora a dor, o rancor, as mágoas e tudo o que faz mal ao coração. Sinta a alegria que é ter uma vida mais leve e cheia de amor. Bom dia!',

      'Decida ser feliz, assim as outras decisões ficarão mais fáceis. Tenha um ótimo dia.',

      'O universo pediu para te avisar que hoje começa uma fase maravilhosa da sua vida. Bom dia!',

      'Um novo dia que se inicia é uma nova oportunidade de vida que Deus nos dá. Seja grato por isso. Bom dia! ',

      'Desejo apenas coisas boas para o dia de hoje. Que saibamos superar todos os obstáculos com muita sabedoria e paciência. Bom dia!',

      'Bom dia, foque no amor, na luz e na gratidão. É isso o que eu desejo para o dia de hoje e todos aqueles que virão. ',

      'Bom dia, o sol já raiou e com ele veio todas as boas energias para te acompanhar nesse dia.',

      'Hoje, seja luz para quem precisa de um caminho. Lugar seguro para quem precisa de um abraço. E sabedoria para quem precisa de uma palavra amiga. Bom dia!',

      'A alegria é a coisa mais séria da vida, pois é o imã da felicidade. Se você for positivo, coisas boas e boas pessoas serão atraídas. Tenha um lindo dia!',

      'A vida sempre te oferece uma nova chance. Isso se chama amanhecer. Bom dia!',

      'Bom dia, foque o seu pensamento em tudo o que há de bom e veja o seu dia ser iluminado.',

      'Hoje é um novo dia, acorde com a felicidade e viva com alegria! Bom dia.',

      'Bom dia, vamos começar o dia com o coração agradecido e confiar que o dia será maravilhoso.',

      'Bom dia! Porque tudo o que vem de Deus é leve, simples e cheio de paz.',

      'Bom dia! Levanta, olhe no espelho e veja a pessoa maravilhosa que você se tornou. Repense cada sonho que você pretende realizar e vai!',

      'Bom dia! Que hoje não te falte felicidade e vontade para lutar e ser feliz.',

      'Toda a força que você precisa para enfrentar esse dia está dentro de você. Confie, entregue e vai. Bom dia! ',

      'Bom dia! Viva seu dia da melhor forma, cumpra com dedicação e empenho todas as obrigações. Supere-se, descubra ainda mais motivos para se alegrar.',

      'Esqueça os problemas de ontem. Hoje é um novo dia, foque no presente e em tudo o que você quer conquistar. Tenha um lindo dia! ',

      'Nunca é tarde para começar do zero. O seu passado ficou para trás e o amanhecer é um mar de possibilidades que se abre à sua frente. Tenha um dia maravilhoso!',

      'Passei aqui para te desejar um dia incrível e cheio da presença de Deus. Coloque todos os seus problemas nas Suas mãos e deixe que Ele guie o seu caminho!',

      'Quem semeia o bem só colhe sorrisos. Tenha um bom dia!',

      'Com chuva ou sol, quem faz o dia bonito é você! Bom dia.',

      'Bom dia! As lágrimas que você derrubou ontem secaram com o sol desse lindo amanhecer. Mais um dia começa e com ele inúmeras oportunidades de ser feliz.',

      'Que a gente saiba agradecer o pouco para que possamos merecer muito. Bom dia!',

      'Cada novo dia é uma jornada que devemos trilhar. Que a sua seja de paz, realizações e muito amor. Bom dia! ',

      'Amanheceu! Gratidão, Senhor, pela manhã que se inicia, pela vida que nos concede e por tudo de bom que preparastes para nós no dia de hoje. Bom dia!',

    ]
  }
  ]

  function handleSwitchCategory(index: number){
setCategoriaSelecionada(index);
  }

function gerarFrase(){
  const numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSeleciona].frases.length)

  setTextoFrase(allFrases[categoriaSeleciona].frases[numeroAleatorio])
}

  return (
    <div className='container'>
      <img className='logo'
        src={LogoImg} alt="LogoFrases" />
      <h2 className='title'>CATEGORIAS</h2>
      <section className='category-area'>
        {allFrases.map ((item, index) => (
          <button 
          key={
            item.id
          }
          className='category-button'
          style={{ 
            borderWidth: item.nome === allFrases[categoriaSeleciona].nome ? 2 : 0,
            borderColor: "#62ff00"
           }}

           onClick={ () => handleSwitchCategory(index) }
          >{item.nome}</button>
          
        ) )}
        
      </section>

      <button className='button-frase'
      onClick={gerarFrase}
      >Gerar Frases</button>]

      {textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}

    </div>
  )
}


export default App