import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
`;

const StyledText = styled.p`
  width: 50%;
`;
export default function Home() {
  return (
    <Container>
      <h1>Welcome to Foodie Spot</h1>
      <Image src="../../public/BUPicture.png" alt="BU Campus" />
      <StyledText>
        Find delicious meal plans and restaurants around you! This website is
        built for Boston University students to discover meals to eat. Visit the
        Meal Plan page to discover some example meals that you can make at home.
        If you are looking for a meal outside, check out the Restaurants page.
        We have included restaurants all along Commonwealth Avenue, Boston
        University campus, and Allston. Hope you enjoy!
      </StyledText>
    </Container>
  );
}
