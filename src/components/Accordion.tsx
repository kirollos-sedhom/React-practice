import React from "react";
type ApiResponse = {
  response_code: number;
  results: QuestionResult[];
};

type QuestionResult = {
  category: string;
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  // You might want to add more specific types for 'multiple' vs. 'boolean'
  // questions if you handle them differently.
};
function Accordion() {
  const [token, setToken] = React.useState<string | null>(null);
  const [data, setData] = React.useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean | null>(null);
  const [isGettingToken, setIsGettingToken] = React.useState<boolean | null>(
    false
  );
  const [error, setError] = React.useState("");
  const [selectionMode, setSelectionMode] = React.useState<string>("single");
  const [selectedItem, setSelectedItem] = React.useState<number | null>(null);
  const [selectedItemsList, setSelectedItemsList] = React.useState<number[]>(
    []
  );

  console.log("token is", token);
  async function getToken() {
    setIsGettingToken(true);
    try {
      const url = "https://opentdb.com/api_token.php?command=request";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      const json = await response.json();
      setToken(json.token);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        throw error;
      }
    } finally {
      setIsGettingToken(false);
    }
  }
  async function getData() {
    if (!token || isGettingToken) {
      return;
    }

    try {
      const url = `https://opentdb.com/api.php?amount=3&type=boolean&token=${token}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
      const json = await response.json();
      setData(json);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        throw error;
      }
    } finally {
      setIsLoading(false);
    }
  }
  React.useEffect(() => {
    setIsLoading(true);
    getToken();
  }, []);

  React.useEffect(() => {
    if (token) {
      getData();
    }
  }, [token]);

  return data ? (
    <div className="accordion_page  h-screen flex flex-col justify-center">
      <div className="choice flex gap-2 justify-center">
        <button
          onClick={() => setSelectionMode("single")}
          className={`${
            selectionMode === "single" ? "bg-blue-600" : "bg-blue-400"
          } text-white p-2 rounded-sm font-medium cursor-pointer`}
        >
          single select
        </button>
        <button
          onClick={() => setSelectionMode("multi")}
          className={`${
            selectionMode === "multi" ? "bg-blue-600" : "bg-blue-400"
          } text-white p-2 rounded-sm font-medium cursor-pointer`}
        >
          multi select
        </button>
      </div>
      {data.results.map((result, index) => {
        return (
          <AccordionItem
            key={index}
            id={index}
            question={result.question}
            answer={result.correct_answer}
            selectedItem={selectedItem}
            handleOpenQuestion={handleOpenQuestion}
            selectedItemsList={selectedItemsList}
            selectionMode={selectionMode}
          />
        );
      })}
    </div>
  ) : (
    <div className="h-screen flex items-center justify-center">
      loading ... please wait
    </div>
  );

  function handleOpenQuestion(id: number) {
    if (selectionMode === "single") {
      if (id === selectedItem) {
        setSelectedItem(null);
      } else {
        setSelectedItem(id);
      }
    } else {
      if (selectedItemsList.includes(id)) {
        const newItems = selectedItemsList.filter((item) => item != id);
        setSelectedItemsList(newItems);
      } else {
        const newItems = [...selectedItemsList, id];
        setSelectedItemsList(newItems);
      }
    }
  }
}

function AccordionItem(props: {
  question: string;
  answer: string;
  id: number;
  selectedItem: number | null;
  selectedItemsList: number[];
  selectionMode: string;
  handleOpenQuestion: (id: number) => void;
}) {
  const decodedQuestion = decodeHtmlEntities(props.question);
  const decodedAnswer = decodeHtmlEntities(props.answer);
  let answerStyle = "";
  if (props.selectionMode === "multi") {
    if (props.selectedItemsList.includes(props.id)) {
      answerStyle = "bg-yellow-200 p-2";
    } else {
      answerStyle = "hidden";
    }
  } else if (props.selectionMode === "single") {
    if (props.selectedItem === props.id) {
      answerStyle = "bg-yellow-200 p-2";
    } else {
      answerStyle = "hidden";
    }
  }
  return (
    <div className="container bg-blue-300 my-2 mx-auto p-2 w-3/4 select-none ">
      <div
        className="question flex items-center justify-between"
        onClick={() => props.handleOpenQuestion(props.id)}
      >
        <p>{decodedQuestion}</p> <p className="text-3xl mx-2">+</p>
      </div>

      <div className={answerStyle}>{decodedAnswer}</div>
    </div>
  );

  function decodeHtmlEntities(text: string): string {
    const textarea = document.createElement("textarea");
    textarea.innerHTML = text;
    return textarea.value;
  }
}

export default Accordion;
