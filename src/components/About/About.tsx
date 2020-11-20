/* eslint-disable max-len */
import React from 'react';
import { Paragraph, Content } from './styles';
import aboutImage from '../../assets/about_image.png';

const About: React.FC = () => (

    <Content>
        <Paragraph >
            <div>
                <img src={aboutImage} alt="about" />
            </div>
        </Paragraph>
        <Paragraph >
            <div>
                <h2>O que é</h2>
                <h2>trabalhar em equipe?</h2>
                <p>Saber trabalhar em equipe é uma <a href="https://www.brighthr.com/articles/culture-and-performance/teamwork/the-importance-of-teamwork-in-the-workplace/">habilidade essencial</a> para qualquer pessoa desenvolvedora.</p>
                <p>Requer humildade, boa comunicação, auto-conhecimento e comprometimento com os outros membros do time.</p>
                <p>Cada dev tem sua função no projeto e deve estar disposto a cumpri-la, sabendo que sua  colaboração é importante para o resultado final!</p>
            </div>

        </Paragraph>
    </Content>
);

export default About;
