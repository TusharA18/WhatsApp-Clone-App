import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Left></Left>
        <Right></Right>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(232, 234, 237);
  overflow: hidden;
`;

const Header = styled.div`
  height: 100px;
  background: rgb(0, 168, 132);
`;

const Content = styled.div`
  background-color: white;
  height: 95vh;
  width: 95vw;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
`;

const Left = styled.div`
  display: flex;
  flex: 0.35;
`;

const Right = styled.div`
  display: flex;
  flex: 0.65;
`;

export default HomePage;
