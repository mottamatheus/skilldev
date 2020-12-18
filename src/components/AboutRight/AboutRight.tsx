/* eslint-disable max-len */
import React from 'react';
import { Paragraph, Content } from './styles';
import aboutImage from '../../assets/hero.png';

const AboutRight: React.FC = () => (

    <Content>
        <Paragraph >
            <div>
                <h2>Integração de times remotos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quam exercitationem quia, enim nam autem neque cum praesentium modi labore consequatur nemo ratione magni voluptatum, accusantium maxime rem possimus! Ipsam error maiores ad ullam maxime.</p>
            </div>
        </Paragraph>
        <Paragraph >
            <div>
                <img src={aboutImage} alt="about" />
            </div>
        </Paragraph>
    </Content>
);

export default AboutRight;
