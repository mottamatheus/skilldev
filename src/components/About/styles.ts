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
                transition: all 0.2s ease;
                color: #1A1A1A;


                &:hover {
                    color: #ffd409;
                }

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
                margin-right: 55px;
            }

                `;
