import React from 'react';

import Container from './styles';

const Navbar: React.FC = () => (
    <Container>
        <span>SkillDev</span>
        <ul>
            <li>Sobre</li>
            <li>Funcionalidades</li>
            <li>Contato</li>
            <li>Login</li>
        </ul>
    </Container>
);

export default Navbar;
