import React from 'react'
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const title = 'List Organizer' 

function App() {
  const [Items, setItem] = React.useState([]);
  const [Value, setValue] = React.useState("");
  const [ItemIndex, setItemIndex] = React.useState(undefined);
  const [ButtonText, setButtonText] = React.useState("Add");

  const handleValue = (event) => {
    setValue(event.target.value);
  }

  const handleAddItem = () => {
    if (Value.trim() !== ""){
      setItem([
        ...Items,
        {
          value: Value,
          status: false,
        }
      ]);
      setValue("");
    }
  }

  const handleSaveItem = () =>{
    if (Value.trim() !== ""){
      const newItem = [...Items];
      newItem[ItemIndex].value = Value;
      setItem(newItem);
      setButtonText("Add");
      setValue("");
    }
  }

   const handleRemoveItem = (index) => {
    const newItems = [...Items];
    newItems.splice(index, 1);
    setItem(newItems);
    setValue("")
  }

  const handleEditItem = (index) => {
    setValue(Items[index].value);
    setButtonText("Save");
    setItemIndex(index);
  }

  const handleCheckItem = (index) => {
    const newItems = [...Items];
    newItems[index].status = !newItems[index].status;
    setItem(newItems);
  }

  return (
    <>
      <div className='w-screen bg-[#343541] sm:h-full md:h-screen'>
        <div class="flex justify-between border-gray-200 bg-[#343541] border-b-[1px]">
          <nav>
            <button className="text-white p-5 lg:hidden" data-collapse-toggle="navbar-default" type="button" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div class="hidden w-full lg:block">
              <ul class="flex text-white p-5 space-x-10">
                <li>
                  <a href="#" class="" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" class="">About</a>
                </li>
                <li>
                  <a href="#" class="">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <p className='sm:text-white sm:p-5 sm:text-center'>New Chat</p>
          <p className='sm:text-white sm:p-5'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
            </svg>
          </p>  
        </div>
        <div className='rounded-lg ml-1 mr-1 mt-1 h-14 sm:bg-gray-900'>
          <div className='flex text-white p-1'>
            <button className='w-2/4 bg-gray-700 text-white h-12 rounded-lg'>
              <div className='flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mr-1 text-green-400 mt-0.5">
                  <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clip-rule="evenodd" />
                </svg>
                GPT-3.5
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 ml-1 text-gray-400 mt-0.5">
                  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
                </svg>
              </div>
            </button>
            <button className='w-2/4 text-gray-400'>
              <div className='flex justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-400 mr-1 mt-0.5">
                  <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
                </svg>
                GPT-4
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-gray-400 ml-1 mt-0.5">
                  <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clip-rule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className='text-white mt-10 text-5xl sm:text-center'>
           <p>ChatGPT</p>
        </div>
        <div className='text-white sm:block md:flex sm:text-center md:justify-center'>
          <div className='p-5'>
            <div className='flex justify-center pb-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
              <p>Examples</p>
            </div>
            <div className='w-full space-y-2'>
              <p className='bg-gray-600 h-12 rounded opacity-75 md:h-16 sm:flex sm:justify-center sm:pt-3 md:pt-2 md:pl-2 md:pr-2 lg:pt-2'>
                 "Explain quantum computing in simple terms"
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1 md:hidden">
                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>
              </p>  
              <p className='bg-gray-600 h-12 rounded opacity-75 md:h-16 sm:flex sm:justify-center sm:pt-3 md:pt-2 md:pl-2 md:pr-2 lg:pt-2'>
                  "Got any creative ideas for a 10 year old's birthday?"
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1 md:hidden">
                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>
              </p>  
              <p className='bg-gray-600 h-12 rounded opacity-75 md:h-16 sm:flex sm:justify-center sm:pt-3 md:pt-2 md:pl-2 md:pr-2 lg:pt-2'>
                <div className='flex justify-center'>
                  "How do I make an HTTP request in javascript"
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1 md:hidden">
                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>
                </div>
              </p>  
            </div>
          </div>
          <div className='p-5'>
            <div className='flex justify-center pb-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
              <p>Capabilities</p>
            </div>
             <div className='w-full space-y-2'>
              <p className='bg-gray-600 h-12 rounded opacity-75 md:h-16 sm:flex sm:justify-center sm:pt-3 md:pt-2 md:pl-2 md:pr-2 lg:pt-2'>
                <div className='flex justify-center'>
                  "Explain quantum computing in simple terms"
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1 md:hidden">
                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>
                </div>
              </p>  
              <p className='bg-gray-600 h-12 rounded opacity-75 md:h-16 sm:flex sm:justify-center sm:pt-3 md:pt-2 md:pl-2 md:pr-2 lg:pt-2'>
                <div className='flex justify-center'>
                  "Got any creative ideas for a 10 year old's birthday?"
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1 md:hidden">
                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>
                </div>  
              </p>  
              <p className='bg-gray-600 h-12 rounded opacity-75 md:h-16 sm:flex sm:justify-center sm:pt-3 md:pt-2 md:pl-2 md:pr-2 lg:pt-2'>
                <div className='flex justify-center'>
                  "How do I make an HTTP request in javascript"
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1 md:hidden">
                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>
                </div>
              </p>  
            </div>
          </div>
          <div className='p-5'>
            <div className='flex justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <p>Limitations</p>
            </div>
             <div className='w-full space-y-2 pt-2'>
              <p className='bg-gray-600 h-12 rounded opacity-75 md:h-16 sm:flex sm:justify-center sm:pt-3 md:pt-2 md:pl-2 md:pr-2 lg:pt-2'>
                <div className='flex justify-center'>
                  "Explain quantum computing in simple terms"
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1 md:hidden">
                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>
                </div>
              </p>  
              <p className='bg-gray-600 h-12 rounded opacity-75 md:h-16 sm:flex sm:justify-center sm:pt-3 md:pt-2 md:pl-2 md:pr-2 lg:pt-2'>
                <div className='flex justify-center'>
                  "Got any creative ideas for a 10 year old's birthday?"
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1 md:hidden">
                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>
                </div>  
              </p>  
              <p className='bg-gray-600 h-12 rounded opacity-75 md:h-16 sm:flex sm:justify-center sm:pt-3 md:pt-2 md:pl-2 md:pr-2 lg:pt-2'>
                <div className='flex justify-center'>
                  "How do I make an HTTP request in javascript"
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 ml-1 md:hidden">
                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>
                </div>
              </p>  
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen bg-[#343541] sm:h-screen'>
        <div className='p-5 relative'>
          <input className="w-full h-12 pl-2 rounded bg-gray-600 opacity-75" type="search" placeholder='Send a message'/>
          <div className='absolute inset-y-0 right-0 flex items-center pr-8'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-500">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </div>
        </div>
        <div className='pl-5 text-center'>
          <p className='text-white opacity-50'>Free Research Preview chatGPT may produce inaccurate information about people, places, or facts 
            <span className='underline'> chatGPT July 20 Version</span>
          </p>
        </div>
      </div>
      {/* <div className="main">
        <div className="card">
          <h1>{title}</h1>
          <div className="todos">
            <Form Value={Value}
                  handleValue={handleValue}
                  handleAddItem={handleAddItem}
                  buttonText={ButtonText}
                  handleSaveItem={handleSaveItem}
            />
            <TodoList Items={Items}
                      handleRemoveItem={handleRemoveItem}
                      handleEditItem={handleEditItem}
                      handleCheckItem={handleCheckItem}
            />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
