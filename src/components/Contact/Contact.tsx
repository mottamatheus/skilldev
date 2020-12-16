/* eslint-disable max-len */
import React from 'react';
import { Paragraph, Content } from './styles';
import aboutImage from '../../assets/about_image.png';

const Contact: React.FC = () => (

    <Content>
        <Paragraph >
            <div>
            <img src={aboutImage} alt="about" />
            </div>
        </Paragraph>
        <Paragraph >
            <div>
                <h2>Quer mudar sua forma de trabalhar?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dicta dolores voluptatem maxime. Aperiam repellat nemo earum magnam numquam placeat!</p>
                <button><a href="https://www.linkedin.com/in/matheus-da-cruz-motta-22a4a114b/" rel="noreferrer" target="_blank">Solicite uma demonstração</a></button>
            </div>

        </Paragraph>
    </Content>
);

export default Contact;
