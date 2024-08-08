'use client'
import { useState, useRef, useEffect } from "react";

const FAQ = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
]

const FaqBox = ({que, ans}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current;
      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="p-5 bg-orange4 rounded shadow-sm text-orange-200 flex flex-col gap-5 w-[500px]">
      <div onClick={handleClick} className="cursor-pointer flex items-center justify-between">
        <span>Q - {que}</span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </div>
      <div 
        style={{ height: `${height}px` }}
        className={`overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div ref={contentRef} className="bg-orange-300 p-4">
          <span className="text-orange-800">A - {ans}</span>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24 w-full bg-orange-100">
      <span className="text-orange-700 text-2xl leading-5 font-semibold">Frequently Asked Questions</span>
      <div className="flex gap-5 flex-col">
        {FAQ.map((item, index) => (
          <FaqBox key={index} que={item.question} ans={item.answer}/>
        ))}
      </div>
    </main>
  );
}