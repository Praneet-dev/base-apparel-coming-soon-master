import styled from 'styled-components';
import Form from './Form'

const Content = styled.div`
    background-image: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
`;

const H1 = styled.h1`

`;

const Span = styled.span`
    display: block;
    color: ${props => props.theme.color.desaturatedRed};
    letter-spacing: 9px;
    line-height: 1.1;
    font-weight: 300;
    text-align: center;    
`;
    
const P = styled.p`
    letter-spacing: 9px;
    line-height: 1.1;
    text-align: center;
    color: ${props => props.theme.color.darkGrayishRed};
`;
    
const Text = styled.p`
    max-width: 80%;
    margin: 0 auto;
    text-align: center;
    color: ${props => props.theme.color.desaturatedRed};
    line-height: 1.4;
`;

const Input = styled.input`
    // border-radius: 2em;
    border-color: ${props => props.theme.color.desaturatedRed};
    // box-shadow: 0 0 3px #CC0000;
`;

const Dummy = styled.div`
    height: ${props => props.height};
`;

export default () => {
    return (
        <Content>
            <Dummy height='3em' />
            <H1>
                <Span>WE'RE</Span>
                <P>COMING</P>
                <P>SOON</P>
            </H1>
            <Dummy height='1em' />
            <Text>
                Hello fellow shoppers! We're currently building out new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.
            </Text>
            <Dummy height='2em' />
            <Form />
        </Content>
    )
}