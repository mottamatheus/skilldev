/* eslint-disable max-len */
import React from 'react';
import { Card, Content, Title } from './styles';
import ideaIcon from '../../assets/security.svg';
import partnerIcon from '../../assets/system.svg';
import diversityIcon from '../../assets/management.svg';

const Reasons: React.FC = () => (

    <>
    <Title>O que oferecemos?</Title>
    <Content>
        <Card>
            <div>
                <img src={ideaIcon} alt="ícone de ideia" />
                <h3>Segurança para seus dados</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nisi quibusdam autem porro, repellat voluptatem eum eos aut explicabo expedita ad ut, voluptatum animi quisquam atque provident ipsa inventore officiis.</p>
            </div>
        </Card>
        <Card>
            <div>
                <img src={partnerIcon} alt="ícone de parceria" />
                <h3>Integração contínua</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nisi quibusdam autem porro, repellat voluptatem eum eos aut explicabo expedita ad ut, voluptatum animi quisquam atque provident ipsa inventore officiis.</p>
            </div>
        </Card>
        <Card>
            <div>
                <img src={diversityIcon} alt="ícone de diversidade" />
                <h3>Processos organizados</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nisi quibusdam autem porro, repellat voluptatem eum eos aut explicabo expedita ad ut, voluptatum animi quisquam atque provident ipsa inventore officiis.</p>
            </div>
        </Card>
    </Content>
    </>
);

export default Reasons;
