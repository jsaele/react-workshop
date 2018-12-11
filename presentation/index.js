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
  Link,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

import todoImg from '../assets/todos.png';

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
      <Code textSize="2rem" {...props}>{children}</Code>;

const StupidListItem = () => (
  <ListItem textSize="2.2rem">
    <CodeSmall>{'<div>'}</CodeSmall>'en skal ha 2 barn, 2 <CodeSmall>{'<input>'}</CodeSmall> tag'er.
    Første skal være <CodeSmall>type="checkbox"</CodeSmall>, den andre <CodeSmall>type="text"</CodeSmall>
    </ListItem>
);

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
          <HeadingMedium><Link href="https://codesandbox.io" target="_blank">https://codesandbox.io</Link></HeadingMedium>
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
            <ListItem>V i MVC</ListItem>
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
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>eksempel på komponent</li>
              <li>klasser har render fn</li>
              <li>javascript rundt, jsx inni. ingen '' rundt html'en</li>
            </ol>
          </Notes>
          <CodePane margin="20px auto" style={{fontSize: "2rem"}} lang="javascript" source={require('raw-loader!../assets/react-helloworld.example')}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>utvidelse, skrive jsx, blir til javascript</li>
              <li>hvordan ser det ut?</li>
            </ol>
          </Notes>
          <HeadingMedium size={1}>JSX</HeadingMedium>
          <List>
            <ListItem>Utvidelse av js syntax</ListItem>
            <ListItem>Ikke en string av html</ListItem>
            <ListItem>Heller ikke html</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <CodePane margin="20px auto" style={{fontSize: "1.4rem"}} lang="javascript" source={require('raw-loader!../assets/jsx.example')} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <HeadingLarge>Flere måter å lage en komponent</HeadingLarge>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="secondary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>to hovedkategorier</li>
              <li>funksjonelle og klasse</li>
              <li>klasse for lokal state</li>
              <li>funksjonell når man ikke trenger lokalt state</li>
              <li>javascript syntaks tillater flere måter, es5 6 etc</li>
            </ol>
          </Notes>
          <CodePane margin="20px auto" style={{fontSize: "1.6rem"}} lang="javascript" source={require('raw-loader!../assets/react-components.example')} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <HeadingLarge caps={false}>Oppgaverunde</HeadingLarge>
          <br />
          <List ordered textSize="1rem" textAlign="left">
            <ListItem textSize="2.2rem">Lag noen React komponenter. Prøv både klasse- og funksjonskomponenter</ListItem>
            <br />
            <ListItem textSize="2.2rem">Prøv å lage en React komponent som bruker litt forskjellige HTML tag'er'</ListItem>
            <br />
            <ListItem textSize="2.2rem">Bonus: Ta i bruk èn av komponenten deres i en annen.</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <HeadingLarge>React Component State</HeadingLarge>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>En gammel/vanlig. Konstruktør måten</li>
              <li>Ny, mindre vanlig. JavaScript class fields</li>
              <li>Brukes til lokal tilstand</li>
              <li>Funksjonskomponenter kan ikke ha lokal state</li>
            </ol>
          </Notes>
          <HeadingLarge>2 måter å sette State</HeadingLarge>
          <CodePane margin="20px auto" style={{fontSize: "1.4rem"}} lang="javascript" source={require('raw-loader!../assets/react-state1.example')} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>alt man spesifiserer etter komponentnanvn er props</li>
              <li>React eier props. Ødelegger React sin state ved å endre</li>
            </ol>
          </Notes>
          <HeadingLarge size={2} textColor="tertiary" caps>Props</HeadingLarge>
          <br/>
          <br/>
          <HeadingMedium size={4} textColor="primary" >For å sende inn data til en komponent</HeadingMedium>
          <HeadingMedium size={4} textColor="primary" >Immutable, ikke lov å endre</HeadingMedium>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <CodePane margin="20px auto" style={{fontSize: "1.6rem"}} lang="javascript" source={require('raw-loader!../assets/react-props.example')} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <HeadingLarge>PropTypes</HeadingLarge>
          <HeadingSmall textColor="primary">Måte å beskrive data en komponent benytter</HeadingSmall>
          <br/>
          <HeadingSmall textColor="primary">Forskjellige typer props</HeadingSmall>
          <br/>
          <HeadingSmall textColor="primary">Required/Optional</HeadingSmall>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Er egen pakke</li>
              <li>Gir error i console når mangler</li>
              <li>Funksjoner er objekter i praksis. Kan sette properties på de</li>
            </ol>
          </Notes>
          <CodePane margin="20px auto" style={{fontSize: "1.5rem"}} lang="javascript" source={require('raw-loader!../assets/react-proptypes.example')} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Ta en oppsummeringsrunde</li>
            </ol>
          </Notes>
          <HeadingLarge caps={false}>Oppgaverunde</HeadingLarge>
          <br />
          <List ordered textSize="1rem" textAlign="left">
            <ListItem textSize="2.2rem">Lag en komponent med initiell state</ListItem>
            <br />
            <ListItem textSize="2.2rem">La komponenten få inn noe via props</ListItem>
            <br />
            <ListItem textSize="2.2rem">Bruk komponeten og test å sende inn forskjellige verdier</ListItem>
            <br />
            <ListItem textSize="2.2rem">Lag PropTypes for komponten. Bonus: Åpne console'n og se at man får error log når prop ikke er tilstede</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <HeadingLarge>La oss lage noe</HeadingLarge>
          <br/>
          <HeadingMedium size={5} textColor="primary">Hva med en liste med todos? Det er vel ganske originalt?</HeadingMedium>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <HeadingLarge>Todo app</HeadingLarge>
          <HeadingSmall textColor="primary">Features</HeadingSmall>
          <br />
          <List ordered textSize="1rem" textAlign="center">
            <ListItem textSize="2.2rem">List todos</ListItem>
            <br />
            <ListItem textSize="2.2rem">Add todos</ListItem>
            <br />
            <ListItem textSize="2.2rem">Complete todos</ListItem>
            <br />
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <HeadingMedium textColor="tertiary">Resultat</HeadingMedium>
          <Image src={todoImg}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <HeadingMedium textColor="tertiary">Initiell app</HeadingMedium>
          <CodePane margin="20px auto" style={{fontSize: "1.8rem"}} lang="javascript" source={require('raw-loader!../assets/todo-initial.example')} />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <HeadingMedium textColor="secondary">Oppgaverunde</HeadingMedium>
          <br/>
          <HeadingSmall textColor="secondary">2 komponenter: TodoList og Todo</HeadingSmall>
          <List ordered textSize="1rem" textAlign="center">
            <ListItem textSize="2.2rem">Lag en TodoList komponent. Denne skal returnere en <CodeSmall>{'<ul></ul>'}</CodeSmall></ListItem>
            <br />
            <ListItem textSize="2.2rem">Lag en Todo komponent. Denne skal returnere en <CodeSmall>{'<li>My todo</li>'}</CodeSmall></ListItem>
            <br />
            <ListItem textSize="2.2rem">Ta i bruk Todo komponenten i TodoList komponenten</ListItem>
            <br />
            <ListItem textSize="2.2rem">Ta i bruk TodoList komponenten i App komponenten, under <CodeSmall>{'<h1></h1>'}</CodeSmall> tag'en'</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <HeadingMedium textColor="secondary">Oppgaverunde!</HeadingMedium>
          <br/>
          <List ordered textSize="1rem" textAlign="center">
            <ListItem textSize="2.2rem">Refaktorer <CodeSmall>{'<Todo />'}</CodeSmall> til å returnere en <CodeSmall>{'<div>'}</CodeSmall> inne i <CodeSmall>{'<li>'}</CodeSmall> tag'en. Husk å lukke tag'ene.</ListItem>
            <br />
            <StupidListItem />
            <br />
            <ListItem textSize="2.2rem">Tekstfeltet skal returnere 'My todo'. Hint: value attributt</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <HeadingLarge textColor="secondary">En todo vi ikke kan endre</HeadingLarge>
          <br/>
          <HeadingMedium>Hva nå? More refactoring!</HeadingMedium>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <HeadingLarge textColor="secondary">Tilpasninger for å gjøre endringer</HeadingLarge>
          <br/>
          <HeadingMedium>Bruke konsepter vi har lært tidligere</HeadingMedium>
          <HeadingMedium></HeadingMedium>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <HeadingMedium textColor="secondary">Oppgaverunde!!</HeadingMedium>
          <br/>
          <TextSmall>State og props</TextSmall>
          <List ordered textSize="1rem" textAlign="center">
            <ListItem textSize="2.2rem"><CodeSmall>{'<TodoList />'}</CodeSmall> må gjøres om til klassekomponent hvis den ikke er det</ListItem>
            <br />
            <ListItem textSize="2.2rem">Lag initiell state via class fields. Skal være et objekt med en property <CodeSmall>todo</CodeSmall></ListItem>
            <br />
            <ListItem textSize="2.2rem"><CodeSmall>todo</CodeSmall> skal være et slikt objekt:<br/> <CodeSmall>{"{ id: 1, title: 'My todo', complete: false }"}</CodeSmall></ListItem>
            <br />
            <ListItem textSize="2.2rem"><CodeSmall>{'<Todo />'}</CodeSmall> sine props skal bestå av en <CodeSmall>todo</CodeSmall>. Bytt ut hardkodet todo tittel med verdi fra <CodeSmall>props</CodeSmall></ListItem>
            <br />
            <ListItem textSize="2.2rem"><CodeSmall>{'<input type="checkbox" />'}</CodeSmall> må få en <CodeSmall>{'checked'}</CodeSmall> attributt. Verdien til attributten skal være <CodeSmall>{'complete'} property'en fra todo</CodeSmall></ListItem>
          </List>
          <br />
          <TextSmall textSize="1.7rem">Hint: husk {'{ }'} for å sende inn JavaScript verdier på props</TextSmall>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Når man klikker og skriver</li>
              <li>Hvordan mappes det til React</li>
            </ol>
          </Notes>
          <HeadingLarge textColor="secondary">Events</HeadingLarge>
          <HeadingMedium>HTML "trigger" mange events</HeadingMedium>
          <CodeSmall>click, change, focus, blur etc..</CodeSmall>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Hvordan ser det ut i kode?</li>
            </ol>
          </Notes>
          <CodePane margin="20px auto" style={{fontSize: "2rem"}} lang="javascript" source={require('raw-loader!../assets/react-events.example')} />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Et barn som tar inn props</li>
              <li>En parent med lokalt state tar i bruk komponenten</li>
              <li>Sender inn sine endringsfunksjoner som props</li>
              <li>.bind(this) ikke i scope, må bare bruke</li>
              <li>setState, React fn for å oppdatere React state</li>
              <li>e: Event. target er DOM node. value er verdien fra elementet</li>
            </ol>
          </Notes>
          <CodePane margin="20px auto" style={{fontSize: "1.4rem"}} lang="javascript" source={require('raw-loader!../assets/react-events2.example')} />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <HeadingMedium>Oppsummert</HeadingMedium>
          <List ordered textSize="1rem" textAlign="center">
            <ListItem textSize="2.2rem">Klassekomponent med lokalt state</ListItem>
            <br />
            <ListItem textSize="2.2rem">Tar i bruk en stateless funksjonell komponent</ListItem>
            <br />
            <ListItem textSize="2.2rem"><CodeSmall>setState</CodeSmall> for å oppdatere React state</ListItem>
            <br />
            <ListItem textSize="2.2rem">Må ha <CodeSmall>.bind(this)</CodeSmall> på komponent func for å beholde kontekst</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <HeadingMedium textColor="secondary">Oppgaverunde!!!</HeadingMedium>
          <br/>
          <List ordered textSize="1rem" textAlign="center">
            <ListItem textSize="2.2rem">Lag en <CodeSmall>{'handleUpdateTitle'}</CodeSmall> funksjon i <CodeSmall>{'<TodoList />'}</CodeSmall> må gjøres om til klassekomponent hvis den ikke er det</ListItem>
            <br />
            <ListItem textSize="2.2rem">Oppdater <CodeSmall>todo</CodeSmall> på state via <CodeSmall>setState</CodeSmall>. <CodeSmall>title</CodeSmall> skal settes til verdien av <CodeSmall>e.target.value</CodeSmall></ListItem>
            <br/>
            <ListItem textSize="2.2rem"><CodeSmall>{'<Todo />'}</CodeSmall> må utvide sine props til å ta inn en funksjon på  <CodeSmall>updateTitle</CodeSmall></ListItem>
            <br/>
            <ListItem textSize="2.2rem">Send inn <CodeSmall>handleUpdateTitle</CodeSmall> til <CodeSmall>{'<Todo />'}</CodeSmall> komponenten.</ListItem>
            <br/>
            <ListItem textSize="2.2rem">Legg til <CodeSmall>onChange</CodeSmall> som attributt på tekstfeltet og bruk funksjonen der.</ListItem>
          </List>
          <TextSmall textSize="1.7rem">Hint: Husk <CodeSmall textSize="1.7rem">.bind(this)</CodeSmall></TextSmall>
          <TextSmall textSize="1.7rem">Hint2: Todo er et objekt på state. For å oppdatere: <br/><CodeSmall textSize="1.7rem">{'{ todo: { feltNavnHer: verdiHer } }'}</CodeSmall></TextSmall>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <HeadingMedium>Samme for checkbox</HeadingMedium>
          <CodePane margin="20px auto" style={{fontSize: "1.2rem"}} lang="javascript" source={require('raw-loader!../assets/onclick.example')} />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Vis feilen hvor vi skriver over objektet</li>
            </ol>
          </Notes>
          <HeadingMedium>Da har vi en todo vi kan endre på</HeadingMedium>
          <br/>
          <HeadingMedium>Og riktig nok inkorrekt</HeadingMedium>          
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Vis feilen hvor vi skriver over objektet</li>
            </ol>
          </Notes>
          <HeadingLarge textColor="secondary">Next up: Liste av todos</HeadingLarge>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary" textColor="secondary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Endre initiell state</li>
              <li>Gjør mapping i render</li>
              <li>Så se key warning i console</li>
            </ol>
          </Notes>
          <List ordered textSize="1rem" textAlign="center">
            <ListItem textSize="2.2rem">Initiell state må bli til en liste. Gjerne med en default todo</ListItem>
            <br />
            <ListItem textSize="2.2rem">Må endre i <CodeSmall>{'<TodoList />'}</CodeSmall> render for å mappe listen av todos til en liste av <CodeSmall>{'<Todo />'}</CodeSmall></ListItem>
          </List>
          <HeadingMedium>Live code!</HeadingMedium>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Hva er DOM.</li>
              <li>Modell av html elementene. Vis i console elements</li>
              <li>Før virtual dom. Oppdatere lister tregt</li>
              <li>Måtte rendre ut hele listen på nytt</li>
              <li>React bruker key til å se og oppdatere kun endringer</li>
              <li>VDOM bygger opp dom i minne og differ</li>
            </ol>
          </Notes>
          <HeadingLarge>Virtual DOM</HeadingLarge>
          <List ordered textSize="1rem" textAlign="center">
            <br/>
            <ListItem textColor="primary">Store endringer i DOM tregt</ListItem>
            <br/>
            <ListItem textColor="primary">Tar alle komponenente og bygger opp DOM i minne</ListItem>
            <br/>
            <ListItem textColor="primary">Differ etter hver oppdatering</ListItem>
            <br/>
            <ListItem textColor="primary">Mye bedre performance</ListItem>
            <br/>
            <ListItem textColor="primary">Hvordan fikse problemet vårt?</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Live code key fix.</li>
            </ol>
          </Notes>
          <CodePane margin="20px auto" style={{fontSize: "2rem"}} lang="javascript" source={require('raw-loader!../assets/react-key.example')} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <HeadingLarge>Add todos</HeadingLarge>
          <CodePane margin="20px auto" style={{fontSize: "1.8rem"}} lang="javascript" source={require('raw-loader!../assets/react-button.example')} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Notes>
            <h4>Notes</h4>
            <ol>
              <li>Forklar js syntaks.</li>
            </ol>
          </Notes>
          <HeadingLarge>Oppgaverunde!!!!</HeadingLarge>
          <List ordered textSize="1rem" textAlign="center">
            <br/>
            <ListItem textColor="primary">I <CodeSmall textColor="primary" bgColor="grey">{'<TodoList />'}</CodeSmall>, legg inn <CodeSmall textColor="primary" bgColor="grey">button</CodeSmall> fra forrige slide under <CodeSmall textColor="primary" bgColor="grey">{'</ul>'}</CodeSmall></ListItem>
            <br/>
        <ListItem textColor="primary">Man kan kun returnere ett element fra en React komponent, så legg <CodeSmall textColor="primary" bgColor="grey">{'<div></div>'}</CodeSmall> tagger rundt listen og knappen</ListItem>
            <br/>
            <ListItem textColor="primary">Lag en tom <CodeSmall textColor="primary" bgColor="grey">addTodo</CodeSmall> funksjon oppe ved de andre funksjonene for klassen. Vi fyller inn sammen etterpå</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <HeadingLarge>Det nærmer seg</HeadingLarge>
        <HeadingMedium textColor="primary">Gjenstående:</HeadingMedium>
        <List ordered textSize="1rem" textAlign="center">
            <br/>
            <ListItem textColor="primary">Update title må få inn todo id</ListItem>
            <br/>
        <ListItem textColor="primary">Toggle complete må få inn todo id</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <Notes>
            <h4>Notes</h4>
            <ol>
        <li>map todos i update title, ta inn id og value</li>
        <li>map todos i toggle complete, ta inn id</li>
        <li>husk complete class name på li hvis todo complete</li>
            </ol>
          </Notes>
        <HeadingLarge>Live code</HeadingLarge>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
        <HeadingLarge>Ferdig!</HeadingLarge>
        <HeadingMedium textColor="primary">Hva er klokka?</HeadingMedium>
      </Slide>
      </Deck>
    );
  }
}
