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

const HeadingSmall = ({children, ...props}) =>
      <Heading size={6} {...props}>{children}</Heading>;

const HeadingMediumLeft = ({children, ...props}) =>
      <Heading size={4} textAlign="left" {...props}>{children}</Heading>;

const HeadingMedium = ({children, ...props}) =>
      <Heading size={4} {...props}>{children}</Heading>;

const HeadingLarge = ({children, ...props}) =>
      <Heading size={1} fit caps lineHeight={1} {...props}>{children}</Heading>;

const CodeSmall = ({children, ...props}) =>
      <Code style={{fontSize: "2rem"}} {...props}>{children}</Code>;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            React workshop
          </Heading>
        </Slide>
        <Slide textAlign="right" transition={["fade"]} bgColor="tertiary">
          <HeadingMedium>Hvordan følge dagens workshop</HeadingMedium>
          <br/>
          <HeadingSmallLeft>Uten oppsett:</HeadingSmallLeft>
          <TextSmallLeft><Link href="https://codesandbox.io">https://codesandbox.io</Link></TextSmallLeft>
          <br/>
          <HeadingSmallLeft>Kjøre lokalt:</HeadingSmallLeft>
          <TextSmallLeft>Installer <CodeSmall>nodejs</CodeSmall>. Fås på: <Link href="https://nodejs.org">https://nodejs.org</Link></TextSmallLeft>
          <br/>
          <TextSmallLeft>Så kjør i en terminal:</TextSmallLeft>
          <CodePane margin="20px auto" style={{fontSize: "1.2rem"}} lang="javascript" source={require('raw-loader!../assets/nodejs-install.example')}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Notes>
            <ol>
              <li>har delt opp konseptene og oppgavene</li>
              <li>presentasjonen er lagd i React</li>
            </ol>
          </Notes>
          <Heading size={6} textColor="primary" caps>Agenda</Heading>
          <List>
            <ListItem>Hva er React</ListItem>
            <ListItem>Første oppgave</ListItem>
            <ListItem>Flere React konsepter</ListItem>
            <ListItem>Oppgaverunde</ListItem>
            <ListItem>Hva skal vi lage i dag</ListItem>
            <ListItem>Og React konsepter</ListItem>
            <ListItem>Og mer oppgaver</ListItem>
            <ListItem>osv...</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="quaternary">
          <HeadingLarge>Hva er React</HeadingLarge>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="quaternary">
          <BlockQuote>
            <Quote>A JavaScript library for building user interfaces</Quote>
            <Cite>reactjs.org</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>bibliotek man kan fritt strukturere og refaktorere som man ønsker</li>
              <li>kan man html eller xml er man nesten i mål</li>
              <li>se nærmere på snart</li>
              <li>typescript eget språk, kompilerer til js</li>
              <li>ingen konvensjoner, ikke noe å kjempe mot</li>
            </ol>
          </Notes>
          <HeadingLarge caps={false}>Overordnet</HeadingLarge>
<List>
            <ListItem>Fleksibelt</ListItem>
            <ListItem>Ingen spesiell syntax (nesten)</ListItem>
            <ListItem>Komponentbasert</ListItem>
            <ListItem>Kan skrives i JavaScript/TypeScript/Flow ++</ListItem>
            <ListItem>Ikke et rammeverk</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>en komponent</li>
              <li>fra litt tekst til en hel side/applikasjon</li>
              <li>komponerer sammen små til store, skal se på hvordan</li>
              <li></li>
              <li>unidirectional flow, enkapsulert, vet ikke hvordan barn og foreldre ser ut</li>
            </ol>
          </Notes>
          <HeadingLarge caps={false}>Komponentbasert</HeadingLarge>
          <br/>
          <HeadingSmall>JavaScript og JSX</HeadingSmall>
          <HeadingSmall>Kan være små og store</HeadingSmall>
          <HeadingSmall>Deklarativt, bygger et hierarki</HeadingSmall>
          <HeadingSmall>Barn og foreldre</HeadingSmall>
          <HeadingSmall>Data flyter nedover</HeadingSmall>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="primary">
          <HeadingLarge>Hello world</HeadingLarge>
          en komponent her, så se på JSX 
        </Slide>
      </Deck>
    );
  }
}
