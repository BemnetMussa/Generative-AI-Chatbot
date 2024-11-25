import React, { useState, FormEvent } from 'react';

function App() {
  const [question, setQuestion] = useState('');

  function submitQuestion(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent form from refreshing the page
    console.log(question);
    setQuestion(''); // Clear input after submission
  }

  return (
    <div className="App">
      {/* Sidebar */}
      <div className="flex">
        <div className="bg-primaryColor h-screen max-w-72 p-3 grid grid-rows-[auto,1fr,auto]">
          <div>
            <div className="flex justify-between items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <h1 className="font-bold pb-4 mt-4">GenAI Chatbot</h1>
            <hr />
            <p className="font-bold pt-3 text-black text-opacity-25 pb-4">
              Chat history
            </p>
            <div>
              <p className="p-3">Hey GenAI</p>
              <p className="p-3">Explain cosmic theory</p>
              <p className="p-3">Explain photons</p>
            </div>
          </div>
          <div className="mt-auto p-2">
            <hr />
            <div className="flex items-center justify-between mt-4">
              <h2 className="font-bold">Log out</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Independent Form */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-72 md:w-96 lg:w-1/3 bg-secondaryColor p-2 rounded-3xl shadow-lg">
        <form onSubmit={submitQuestion}>
          <div className="flex justify-between items-center gap-2">
            <input
              id="questionInput"
              type="text"
              placeholder="Type your question..."
              value={question}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuestion(e.target.value)}
              className="w-full h-4 px-4  text-slate-50 bg-secondaryColor rounded-md  border-none outline-none"
            />
            <button type="submit" className=" bg-blue-500  p-2 m-auto rounded-full text-white hover:bg-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;