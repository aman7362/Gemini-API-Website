import React, { useState } from 'react';
import "./App.css";
import axios from 'axios';
import { styled, Typography, } from '@mui/material'

const typography = styled(Typography)`

`


function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("loading..");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDgSJvfEh2GOGXozcgcMHyto8VERw3O5eI",
      method: "post",
      data: {
        contents: [
          { parts: [{ text: question }] },
        ],
      },
    });

    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]);

  }


  return (
    <>
      <h1>GEUMIPEI</h1>
      <textarea
        className='border rounded w-full'
        placeholder='Write Here......'
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        cols="30"
        rows="10">
      </textarea>
      <br />
      <br />
      <button onClick={generateAnswer} >Generate Answer</button>
      <br />

      <typography><pre>{answer}</pre></typography>
    </>

  );
};


export default App;