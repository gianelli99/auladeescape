import { useRef, useState } from 'react'

export const Question = ({ questionData, onCorrectAnswer }) => {
  const { question, answer, periodicTableWords } = questionData
  const [wrongAnswer, setWrongAnswer] = useState(false)
  const inputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (answer === inputRef.current?.value) {
      onCorrectAnswer()
    } else {
      setWrongAnswer(true)
    }
  }
  // useEffect(() => {
  //   inputRef.current?.focus()
  // }, [])

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto px-2"
    >
      <label
        htmlFor="question"
        className="block mb-2 text-sm font-medium text-gray-900 whitespace-pre-wrap"
      >
        {question}
      </label>
      {periodicTableWords
        ? periodicTableWords.map((word, wordIdx) => (
            <div key={wordIdx} className="flex gap-2 mb-2" translate="no">
              {word?.map((letter, letterIdx) => (
                <div
                  key={letterIdx}
                  style={{ backgroundColor: letter.color || 'grey' }}
                  className="w-12 h-12 border border-black flex items-center justify-center text-lg font-bold"
                >
                  {letter.symbol}
                </div>
              ))}
            </div>
          ))
        : null}
      <input
        ref={inputRef}
        type="number"
        name="question"
        id="question"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
      />
      {wrongAnswer ? (
        <p className="text-red-700">Oops, intenta de nuevo</p>
      ) : null}
      <button
        type="submit"
        className="text-white bg-pizza hover:bg-pizza-600 focus:ring-4 focus:outline-none focus:ring-pizza-200 font-medium rounded-lg text-sm px-5 py-2.5 my-2.5 text-center inline-flex items-center"
      >
        Avanzar
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </form>
  )
}
