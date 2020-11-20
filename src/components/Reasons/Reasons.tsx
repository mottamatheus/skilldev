/* eslint-disable max-len */
import React from 'react';
import { Card, Content, Title } from './styles';
import ideaIcon from '../../assets/idea.svg';
import partnerIcon from '../../assets/partnership.svg';
import diversityIcon from '../../assets/unity.svg';
import codingIcon from '../../assets/programming.svg';

const Reasons: React.FC = () => (

    <>
    <Title>Benefícios de colaborar</Title>
    <Content>
        <Card>
            <div>
                <img src={ideaIcon} alt="ícone de ideia" />
                <h3>Criatividade e Inovação</h3>
                <p>Um time colaborativo estimula a exposição de ideias diferentes e dá espaço pra criatividade.
                Esse compartilhamento de ideias é essencial para encontrar soluções inovadoras em conjunto.</p>
            </div>
        </Card>
        <Card>
            <div>
                <img src={partnerIcon} alt="ícone de parceria" />
                <h3>Competências Complementares</h3>
                <p>Cada pessoa desenvolvedora tem uma área ou tecnologia de afinidade.
                Em um time de devs, essas hard skills se complementam criando um ambiente de constante aprendizado.</p>
            </div>
        </Card>
        <Card>
            <div>
                <img src={diversityIcon} alt="ícone de diversidade" />
                <h3>Vivências Diversas</h3>
                <p>Saber trabalhar em equipe é abraçar a diversidade.
                Ter empatia e o respeito aos diferentes contextos individuais nos torna devs e seres humanos melhores.</p>
            </div>
        </Card>
        <Card>
            <div>
                <img src={codingIcon} alt="ícone de programação" />
                <h3>Código Melhor</h3>
                <p>Se esforçar para escrever código que seja compreensível por outros devs inevitalmente gera um código melhor.
                    A revisão e o feedback entre membros do time também ajuda nisso.</p>
            </div>
        </Card>
    </Content>
    </>
);

export default Reasons;
