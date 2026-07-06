import { useState } from 'react';
import AutoComplete from "../src/components/AutoComplete"
import './App.css'
import RenderNode from './components/NestedDomTree';

function App() {
  const uiTree = {
  type: "div",
  props: {
    className: "box",
  },
  children: [
    {
      type: "h1",
      props: {
        children: "Welcome",
      },
    },
    {
      type: "button",
      props: {
        onClick: () => alert("Clicked"),
        children: "Click Me",
      },
    },
    {
      type: "div",
      props: {
        className: "nested",
      },
      children: [
        {
          type: "p",
          props: {
            children: "Nested Paragraph",
          },
        },
      ],
    },
  ],
};

  return (
    <div className="ml-2">
    <AutoComplete/>
    <RenderNode node={uiTree}/>
    </div>
  );
}

export default App;
