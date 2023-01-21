import React from "react";
import { Button, Container, Item, ItemButton, Text, Title, Wrapper } from "./style";

const ContactUs = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Start learning today!</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </Text>
        <Item>
            <Button>Get started</Button>
            <ItemButton>Contact us</ItemButton>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default ContactUs;
