import styled from 'styled-components';

// import circleBackground from '../../assets/Circle.svg';
// import heroImage from '../../assets/hero_section.png';

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #1A1A1A;
`;

export const Title = styled.h2`
    font-size: 45px;
    text-align: center;
    margin-top: 45px;
    margin-bottom: 65px;
`;

export const Card = styled.div`

            display: flex;
            text-align: center;
            align-items: center;
            width: 33%;
            background-color: #f3f0fa;
            height:550px;
            padding: 45px 25px;
            margin-right: 25px;
            border-radius: 15px;
            transition: all 0.2s ease;

            &:last-of-type {
                margin-right: 0px;
            }

            &:hover {

                background: #ede9fe;
                transform: translateY(-7px) translateX(-3px);
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    }

            h3 {
                font-size: 25px;
                align-items: center;
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
