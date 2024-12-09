// Home component by Ayan Patel
// This is the main page that the user lands on when they first open the site

import BUPhoto from "../images/BUPhoto.png";
import styled from "styled-components";

// styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledText = styled.p`
  max-width: 50%;
`;

const Image = styled.img`
  width: 50%;
  max-width: 50vw;
  height: auto;
  margin: 1rem 0;
`;

// Exporting the home component with a welcome title, an image of BU campus, and a description of
// how to use the site
export default function Home() {
  return (
    <Container>
      <h1>Welcome to Foodie Spot</h1>
      <Image src={BUPhoto} alt="BU Campus" />
      <StyledText>
        Find delicious meal plans and restaurants around you! This website is
        made for Boston University Students to discover new meals to eat. Check
        the Meal Plan page for new recipes to make that you may not have know
        about. If you would like to eat out instead, check out the Restaurant
        page where you will see restaurants on and around Boston University
        campus. Hope you find something to eat!
      </StyledText>
    </Container>
  );
}
