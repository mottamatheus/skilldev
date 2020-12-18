import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    margin: 0 auto;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    display: flex;
    width: 1200px;
    max-width: 1200px;


    span {
        font-size: 37px;
        font-weight: 700;
        color: #473E6E;
    }

    ul {
        list-style: none;
        display: flex;
        font-size: 24px;
        align-items: center;

        li {
            margin-right: 50px;
            transition: color 0.2s ease;
            cursor: pointer;

            &:hover {
                color: #473E6E;
            }

            &:last-child {
                background-color: #473E6E;
                color: #fff;
                padding: 10px 15px;
                border-radius: 5px;
                transition: all 0.2s ease;

                &:hover {
                    background-color: #6b6085;
                    transform: translateY(-1px) translateX(-1px);
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            }
            }


        }
    }
`;

export default Container;
