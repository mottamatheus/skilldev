import styled from 'styled-components';
import circleBackground from '../../assets/Circle.svg';
import heroImage from '../../assets/hero_section.png';

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #1A1A1A;
    background: url(${heroImage}) no-repeat 95%, url(${circleBackground}) no-repeat 95%;
    background-size: 710px;
    height: 100vh;
`;

export const Paragraph = styled.div`

            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 600px;

            h1 {
                font-size: 55px;
            }

            p {
                margin-top: 25px;
                font-size: 23px;
                color: #707070;
                border-left: 2px solid #0F0928;
                padding-left: 15px;

                span {
                    display: inline-block;
                    position: relative;

                }

                span:before {
                    content: " ";
                    display: block;
                    height: 92%;
                    width: 105%;
                    margin-left: -5px;
                    margin-right: -3px;
                    position: absolute;
                    background: #ffd40099;
                    transform: rotate(1deg);
                    top: 4px;
                    left: 1px;
                    z-index: -1;
                    border-radius: 20% 25% 20% 24%;
                    animation: highlight 1s ease;



                }

                @keyframes highlight {
                    0% {
                    opacity: 0;
                    width: 0;
                    transform: translateX(-5px) rotate(1deg);
                    }
                    100% {
                    opacity: 1;
                    width: 1;
                    transform: translateX(0) rotate(1deg);
                    }



}
            }

            button {
                    font-size: 18px;
                    margin-top: 40px;
                    border-radius: 5px;
                    border: 0;
                    color: #fff;
                    text-transform: uppercase;
                    padding: 15px 20px;
                    background: #473E6E;
                    transition: all 0.2s ease;


                    &:hover {
                        background: #777097;
                        transform: translateY(-2px);
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    }

                    &:active {
                        transform: translateY(-1px);
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                    }
                }
    `;
