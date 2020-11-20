import React from 'react';
import { Paragraph, Content } from './styles';

const HeroSection: React.FC = () => (

    <Content>
        <Paragraph >
            <div>
                <h1>O poder do</h1>
                <h1>trabalho em equipe</h1>
                <p>A Soft Skill <span>mais importante</span> que uma
                pessoa desenvolvedora precisa ter!</p>
                <button>Me conta mais</button>
            </div>
        </Paragraph>
    </Content>
);

export default HeroSection;
