/* eslint-disable max-len */
import React from 'react';
import { Paragraph, Content } from './styles';
import aboutImage from '../../assets/contact.png';

const Contact: React.FC = () => (

    <Content>
        <Paragraph >
            <div>
            <img src={aboutImage} alt="about" />
            </div>
        </Paragraph>
        <Paragraph >
            <div>
                <h2>Gerencie seu time com o futuro da tecnologia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio laboriosam exercitationem ipsum sequi dignissimos, veritatis nihil consequuntur recusandae ullam, eum qui, eaque voluptatem totam neque laudantium repellat ipsa? Impedit!</p>
                <button><a href="https://www.linkedin.com/in/matheus-da-cruz-motta-22a4a114b/" rel="noreferrer" target="_blank">Solicite uma demonstração</a></button>
            </div>

        </Paragraph>
    </Content>
);

export default Contact;
