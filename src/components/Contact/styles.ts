import styled from 'styled-components';

// import circleBackground from '../../assets/Circle.svg';
// import heroImage from '../../assets/hero_section.png';

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: right;
    color: #1A1A1A;
    background-size: 710px;
    height: 80vh;
`;

export const Paragraph = styled.div`

            display: flex;
            text-align: center;
            align-items: center;
            max-width: 700px;

            a {
                text-decoration: none;
                color: #fff;

            }


            h2 {
                font-size: 45px;

                & + h2 {

                margin-bottom: 55px;
                }
            }

            p {
                margin-top: 35px;
                font-size: 22px;
                color: #707070;

            }

            img {
                max-width: 600px;
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
