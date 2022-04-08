import {
  Title,
  Container,
  MainText,
  TextLink,
} from './HomePage.styled';

function HomePage() {
  return (
    <Container>
      <Title>Phonebook</Title>
      <MainText>Welcome to the Phonebook!</MainText>
      <MainText>
        Here you can create and keep your contacts. To do that please
        <TextLink to="/login">log in</TextLink>
        to your account or
        <TextLink to="/register">create</TextLink>
        one.
      </MainText>
    </Container>
  );
}
export default HomePage;
