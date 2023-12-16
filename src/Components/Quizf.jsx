import React, { useState } from "react";
import '../Estilos/Quizf.css'
 
function Quizf (){
    let [numQuestions, setNumQuestions] = useState(0);
    const [results, setResults] = useState(0);
    const questions = [
        {
            question:"Qual o seu principal objetivo ao investir seu dinheiro?",
            answer: [
                'Preservar meu patrimônio assumindo um menor risco',
                'Uma combinação entre preservação do patrimônio e sua valorização ',
                'Maximizar o potencial de ganho assumindo um maior risco'
            ]
        },
        {
            question:"Por quanto tempo pretende deixar seu dinheiro investido",
            answer: [
                'Até 1 ano',
                '1 a 5 anos ',
                'Mais de 5 anos '
            ]
        },{
            question:"Qual é a sua necessidade em relação ao dinheiro que está investindo?",
            answer: [
                'Preciso deste dinheiro como complemento de renda',
                'Eventualmente posso precisar utilizar uma parte dele',
                'Não tenho necessidade imediata deste dinheiro'
            ]
        },
        {
            question:"Qual percentual da sua renda você investe regularmente?",
            answer: [
                'Até 10% ',
                'De 10% a 20% ',
                'Acima de 20% '
            ]
        },
        {
            question:"Por conta de oscilações do mercado, considere que seus investimentos percam 10% do valor aplicado. Neste caso, o que você faria?",
            answer: [
                'Tiraria todo o dinheiro',
                'Manteria o dinheiro',
                'Colocaria mais dinheiro'
            ]
        },{
            question:"Como você descreveria sua expectativa de renda futura para os próximos 5 anos?",
            answer: [
                'Minha renda deve diminuir devido à aposentadoria, mudança de emprego, diminuição de faturamento, etc ',
                'Minha renda deve se manter estável',
                'Minha renda deve aumentar devido a uma promoção, novo emprego, aumento de faturamento, etc'
            ]
        }


    ];
    const retorno = [
        'Conservador',
        'Moderado',
        'Agressivo'
    ];

    const retorno2 = [
        'É aquele que tem forte repulsa ao risco e prefere aplicações seguras. Ou seja, não está disposto a perder mesmo diante da forte possibilidade de altos ganhos. Assim, esse investidor opta por retornos certos.Para isso, aplica seus recursos na renda fixa, como títulos do Tesouro Direito, CDBs pré-fixados, LCs, LCIs/LCAs.',
        'É um meio termo entre os extremos. Trata-se do investidor que opta por arriscar mais que o conservador em busca de mais rentabilidade. Porém, ele ainda não está disposto a assumir grandes riscos que resultem em uma perda significativa na carteira.Logo, observa-se a mistura de seus recursos tanto na renda fixa como na variável',
        'A pessoa de perfil agressivo ou arrojado está em busca de rendimentos maiores e disposta a correr riscos para que isso aconteça. Conta-se, portanto, com a imprevisibilidade e as perdas em curto prazo para que se tenha altos ganhos em um tempo maior.Nesse caso, o investidor preferirá a renda variável, podendo aplicar em ações, fundos de ações, compra e venda do câmbio, fundos imobiliários etc.'
    ]

    function handleClickRight(){
        if(numQuestions < 6){
            setNumQuestions(numQuestions + 1);
        }
    }

    function coletaIndex(index){
        if(index === 0){
            setResults(results + 1);
        }
        else if (index === 1){
            setResults(results + 2);
        }
        else{
            setResults(results + 3);
        }
    }

    return(
        <section className="corpoQui">
           
            <div className="questoes" key={numQuestions}>
                <div className="questao">
                    {
                        numQuestions !== 6 ?(
                            <>
                            <div className="pergunta">{questions[numQuestions].question}</div>
                            <div className="resposta">
                                {
                                    questions[numQuestions].answer.map((answer, index) => (
                                        <span onClick={() => {handleClickRight(); coletaIndex(index);}} key={index}>{answer}</span>
                                    ))
                                }
                                </div>
                                </>
                        ) : (
                            <div className="resposta">
                                <div className="resultado">
                                    <p className="resuti">Com os resultados, voce seria  
                                    {
                                    (results <= 9 && retorno[0]) ||
                                    (results > 9 && results <= 15 && retorno[1]) ||
                                    (results > 15 && retorno[2]) 

                                        }
                                        </p>
                                    <p className="resutex">{
                                        (results <= 9 && retorno2[0]) ||
                                        (results > 9 && results <= 15 && retorno2[1]) ||
                                        (results > 15 && retorno2[2])
                                    }</p>
                                        </div>
                                        </div>
                        )
                    }
                    
                </div>
            </div>
        </section>
    )

}

export default Quizf