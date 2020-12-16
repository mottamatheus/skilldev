/* eslint-disable max-len */
import React from 'react';
import { Card, Content, Title } from './styles';
import ideaIcon from '../../assets/idea.svg';
import partnerIcon from '../../assets/partnership.svg';
import diversityIcon from '../../assets/unity.svg';
import codingIcon from '../../assets/programming.svg';

const Reasons: React.FC = () => (

    <>
    <Title>O que oferecemos?</Title>
    <Content>
        <Card>
            <div>
                <img src={ideaIcon} alt="ícone de ideia" />
                <h3>Funcionalidade 1</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nisi quibusdam autem porro, repellat voluptatem eum eos aut explicabo expedita ad ut, voluptatum animi quisquam atque provident ipsa inventore officiis.</p>
            </div>
        </Card>
        <Card>
            <div>
                <img src={partnerIcon} alt="ícone de parceria" />
                <h3>Funcionalidade 2</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nisi quibusdam autem porro, repellat voluptatem eum eos aut explicabo expedita ad ut, voluptatum animi quisquam atque provident ipsa inventore officiis.</p>
            </div>
        </Card>
        <Card>
            <div>
                <img src={diversityIcon} alt="ícone de diversidade" />
                <h3>Funcionalidade 3</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nisi quibusdam autem porro, repellat voluptatem eum eos aut explicabo expedita ad ut, voluptatum animi quisquam atque provident ipsa inventore officiis.</p>
            </div>
        </Card>
        <Card>
            <div>
                <img src={codingIcon} alt="ícone de programação" />
                <h3>Funcionalidade 4</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur nisi quibusdam autem porro, repellat voluptatem eum eos aut explicabo expedita ad ut, voluptatum animi quisquam atque provident ipsa inventore officiis.</p>

            </div>
        </Card>
    </Content>
    </>
);

export default Reasons;
