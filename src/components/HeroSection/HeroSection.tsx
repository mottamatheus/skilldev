import React from 'react';
import { Paragraph, Content } from './styles';

const HeroSection: React.FC = () => (

    <Content>
        <Paragraph >
            <div>
                <h1>Seus projetos em</h1>
                <h1>equipe metrificados</h1>
                <p>A <span> SkillDev</span> gera KPIs únicas para avaliação
                de performance de seus times de forma coesa.</p>
                <button>Solicite uma demonstração</button>
            </div>
        </Paragraph>
    </Content>
);

export default HeroSection;
