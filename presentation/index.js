// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  Markdown,
  Code,
  CodePane,
  Link
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const TextSmall = ({children, ...props}) =>
      <Text textSize="2rem" {...props}>{children}</Text>;

const TextSmallLeft = ({children, ...props}) =>
      <Text textAlign="left" textSize="2rem" lineHeight={1.5} {...props}>{children}</Text>;

const HeadingSmallLeft = ({children, ...props}) =>
      <Heading size={6} textAlign="left" {...props}>{children}</Heading>;

const HeadingMediumLeft = ({children, ...props}) =>
      <Heading size={4} textAlign="left" {...props}>{children}</Heading>;

const HeadingMedium = ({children, ...props}) =>
      <Heading size={4} {...props}>{children}</Heading>;

const CodeSmall = ({children, ...props}) =>
      <Code style={{fontSize: "2rem"}} {...props}>{children}</Code>;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            React workshop
          </Heading>
        </Slide>
        <Slide textAlign="right" transition={["fade"]} bgColor="tertiary">
          <Notes>
            <h4>Slide notes</h4>
            <ol>
              <li>First note</li>
              <li>Second note</li>
            </ol>
          </Notes>
          <HeadingMedium>Hvordan følge dagens workshop</HeadingMedium>
          <br/>
          <HeadingSmallLeft>Uten oppsett:</HeadingSmallLeft>
          <TextSmallLeft><Link href="https://codesandbox.io">https://codesandbox.io</Link></TextSmallLeft>
          <br/>
          <HeadingSmallLeft>Kjøre lokalt:</HeadingSmallLeft>
          <TextSmallLeft>Installer <CodeSmall>nodejs</CodeSmall> og <CodeSmall>npm</CodeSmall>. Fås på: <Link href="https://nodejs.org">https://nodejs.org</Link></TextSmallLeft>
          <TextSmallLeft>Så kjør i en terminal:</TextSmallLeft>
          <CodePane margin="20px auto" style={{fontSize: "1.2rem"}} lang="javascript" source={require('raw-loader!../assets/nodejs-install.example')}/>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Agenda</Heading>
          <List>
            <ListItem>Hva er React</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
