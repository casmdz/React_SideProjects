import './index.css';
// import '/src/index.css'

import Message from "./Message"
import PageAlert from "./components/Alert";
import PageButton from "./components/Button";
import ListGroup from "./components/ListGroup"
// import FunFactDialogue from './components/FunFactDialogue';


function App() {
  let items = ["New York", "San Francisco", "Tokyo", "Chicago", "Seattle"];
  let headerText = 'List of Cities';
  //   items = [];

  // if i want to write a separate event handler 
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  //React Event Object
  //Event handlers have access to the React event that triggered the function.
  const handleButtonClick = () => {
    alert("I was clicked");
    console.log('Button was clicked');
  }

  return (
    <div>

      <PageAlert>
        outside tags... <span>inside tags</span>
      </PageAlert>

      <br />
      <Message />
      <ListGroup items={items} heading={headerText} onSelectItem={handleSelectItem} />

      <PageButton onPress={handleButtonClick} />

      {/* <FunFactDialogue 
        open={true}
      /> */}

    </div>
  )
}

export default App
