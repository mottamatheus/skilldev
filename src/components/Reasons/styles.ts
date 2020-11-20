import styled from 'styled-components';

// import circleBackground from '../../assets/Circle.svg';
// import heroImage from '../../assets/hero_section.png';

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #1A1A1A;
    background-size: 710px;
    height: 70vh;
`;

export const Title = styled.h2`
    font-size: 45px;
    text-align: center;
    margin-top: 45px;
    margin-bottom: 35px;
`;

export const Card = styled.div`

            display: flex;
            text-align: center;
            align-items: center;
            width: 300px;
            background-color: #efebff;
            height: 550px;
            padding: 25px;
            margin-right: 25px;
            border-radius: 15px;
            transition: all 0.2s ease;

            &:last-of-type {
                margin-right: 0px;
            }

            &:hover {

                background: #d7ceff;
                transform: translateY(-7px) translateX(-3px);
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    }

            h3 {
                font-size: 25px;
            }

            p {
                margin-top: 35px;
                font-size: 18px;
                color: #707070;
                padding: 20px;
            }

            img {
                max-width: 140px;
                margin-bottom: 25px;
            }
            `;
