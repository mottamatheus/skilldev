/* eslint-disable max-len */
import React from 'react';
import { Paragraph, Content } from './styles';
import contactImage from '../../assets/myself.png';

const Contact: React.FC = () => (

    <Content>
        <Paragraph >
            <div>
                <img src={contactImage} alt="about" />
            </div>
        </Paragraph>
        <Paragraph >
            <div>
                <h2>E esse rapaz</h2>
                <h2>que não tem equipe?</h2>
                <p>Os benefícios de trabalhar em equipe ficaram evidentes, mas sem um time pra codar junto fica difícil. :/</p>
                <p>Outras soft skills são: criatividade, flexibilidade, resiliência e autodidatismo. Sabe quem tem elas e muito mais?</p>
                <p>Eu mesmo, Matheus Motta.</p>
                <button><a href="https://www.linkedin.com/in/matheus-da-cruz-motta-22a4a114b/" rel="noreferrer" target="_blank">Bora codar junto!</a></button>
            </div>

        </Paragraph>
    </Content>
);

export default Contact;
