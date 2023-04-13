import styled from 'styled-components';

//main
const ImageWrapper = styled.div`
  max-width: 450;
  max-height: 532;
  background-color: rgba(79, 70, 229, 0.2);
  border-radius: ${({ theme }) => theme.radius};
  position: relative;

  & .image {
    border-radius: 10px;
    object-fit: cover;
    position: relative;
    top: 40px;
    left: 40px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 50px;

  & h1 {
    line-height: 1.15;
    font-size: 4rem;
  }

  & h1 span {
    color: #4f46e5;
  }

  & p {
    line-height: 1.5;
    font-size: 1.5rem;
    width: 42rem;
    color: ${({ theme }) => theme.colors.description};
  }
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: start;
  height: 100vh;
  min-height: 100vh;
  max-width: 1320px;
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;

  //   & .text-wrapper {
  //     display: flex;
  //     flex-direction: column;
  //     align-items: start;
  //     gap: 50px;
  //   }
`;

const Title = styled.h1`
  line-height: 1.15;
  font-size: 4rem;

  & span {
    color: #4f46e5;
  }
`;

const Description = styled.p`
  //   line-height: 1.5;
  //   font-size: 1.5rem;
  //   width: 42rem;
  //   color: ${({ theme }) => theme.colors.description};
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 5rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 25px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius};

  & h3 {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.text};
  }

  & p {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.description};
    width: 15rem;
  }
`;

const CardTitle = styled.h3`
  //   font-size: 20px;
  //   color: ${({ theme }) => theme.colors.text};
`;

const CardDescription = styled.h3`
  //   font-size: 16px;
  //   font-weight: 400;
  //   color: ${({ theme }) => theme.colors.description};
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  padding: 16px 60px;
  font-size: 20px;
  border: none;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const OtlinedButton = styled.button`
  background: ${({ theme }) => theme.colors.contrastText};
  color: ${({ theme }) => theme.colors.primary};
  padding: 12px 24px;
  font-size: 20px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${({ theme }) => theme.colors.light};
  }
`;

//Login

const LoginLayout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  backgroundcolor: #fafafb;

  & .split-1 {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .split-2 {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f3f3ff;
    gap: 72px;
  }
`;

const Form = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  //   justify-items: stretch;
  //   align-items: stretch;

  & .form-title {
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 142%;
    color: #111827;
    margin-bottom: 1rem;
  }

  & .error {
    color: red;
    margin-bottom: 0.5rem;
  }

  & .logo {
    margin-bottom: 4rem;
  }
`;

interface InputWrapperProps {
  readonly icon?: boolean;
}

const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;

  & input {
    outline: none;
    border: 1px solid #e5e7eb;
    margin: 8px 0;

    background-color: #fff;

    padding: 1rem;
    padding-right: ${(props) => (props.icon ? '3rem' : '1rem')};
    font-size: 1rem;
    line-height: 1.25rem;
    width: 300px;
    border-radius: 0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0; 0, 0, 0.05);
  }

  & span {
    display: grid;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    place-content: center;
    cursor: pointer;
  }
`;

const Input = styled.input`
  outline: none;
  border: 1px solid #e5e7eb;
  margin: 8px 0;
  background-color: #fff;
  padding: 1rem;
  padding-right: 3rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  width: 300px;
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;

const Remember = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  & input {
    margin-right: 0.5rem;
  }

  & div {
    display: inline-block;
  }

  & .link {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
    color: #4f46e5;
  }
`;

const Gallery = styled.div`
  display: flex;
  width: 46vw;
  height: 50vh;
  justify-content: center;
  align-items: center;

  & .image-block {
    position: relative;
    width: 30vw;
    height: 33vh;
  }

  & .image-block .image-1 {
    position: relative;
    box-shadow: 0px 4px 32px #e8e7ff;
    border-radius: 8px;
    left: -135;
    top: -110;
  }

  & .image-block .image-2 {
    position: relative;
    box-shadow: 0px 4px 32px #e8e7ff;
    border-radius: 8px;
    left: 135;
    top: 110;
  }

  //   display: flex;
  //   width: 900px;
  //   height: 574px;
  //   justify-content: center;
  //   align-items: center;

  //   & .image-block {
  //     position: relative;
  //     width: 629px;
  //     height: 354px;
  //   }
`;

const DescriptionLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & .title {
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    lineheight: 2rem;
    color: #111827;
    margin-bottom: 12px;
  }

  & .description {
    text-align: center;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
  }
`;

// Charts
const ChartHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;

  & h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 120%;
  }

  & p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    padding-right: 100px;
  }
`;

const ChartDescription = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;

  & p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    width: 30rem;
  }
`;

const Chart = styled.div`
  width: 100%;
  border: 1px solid #e4e4e7;
  border-radius: ${({ theme }) => theme.radius};
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  & .chart {
    max-width: 600;
    max-height: 350;
  }
`;

const ChartWrapper = styled.div`
  width: 100%;
  gap: 30px;
  display: flex;
  justify-content: space-between;

  padding-bottom: 6rem;
`;

const Calls = styled.div`
  display: flex;
  //   justify-content: space-between;
  padding-left: 5ch;
  gap: 2rem;

  & .call {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.text};
  }

  & .circle-1 {
    width: 8px;
    height: 8px;
    margin-right: 0.5rem;
    border-radius: ${({ theme }) => theme.radius};
    background: #eaa43a;
  }

  & .circle-2 {
    width: 8px;
    height: 8px;
    margin-right: 0.5rem;
    border-radius: ${({ theme }) => theme.radius};
    background: #4f46e5;
  }
`;

const ChartTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Dots = styled.div`
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  & .dot {
    border: 2px solid #636366;
    width: 2;
    border-radius: 100%;
  }
`;

const Chips = styled.div`
  display: flex;
  //   flex-direction: column;
  gap: 1rem;
  //   justify-content: space-between;

  & .chip {
    background: #e8e7ff;
    border-radius: 33px;
    padding: 4px 8px;

    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 1rem;
    color: #4f46e5;
  }
`;

//AppBar
const AppBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
`;

const LinkList = styled.ul`
  width: 100%;
  display: flex;
  gap: 4rem;
  padding-left: 10rem;
  list-style-type: none;

  & li {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.description};
  }

  & li :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export {
  Container,
  Title,
  Description,
  Button,
  Card,
  CardTitle,
  CardDescription,
  OtlinedButton,
  Input,
  InputWrapper,
  Form,
  LoginLayout,
  Gallery,
  DescriptionLogin,
  Remember,
  AppBar,
  CardContainer,
  Main,
  LinkList,
  ImageWrapper,
  TextWrapper,
  Chart,
  ChartTop,
  ChartHeader,
  ChartDescription,
  Dots,
  Chips,
  Calls,
  ChartWrapper,
};
