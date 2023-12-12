import { useState } from "react";
import { Inputs } from "../../components/pages/ReactHooks/useState/inputs";
import { UseEffectComponent } from "../../components/pages/ReactHooks/useEffect";

export default function Hooks() {
  const [counter, setCounter] = useState(0);
  const [amount, setAmount] = useState(0);
  function handleIncrease() {
    setCounter((prev) => prev + 1);
  }

  function handleDecrease() {
    setCounter((prev) => prev - 1);
  }

  function handleReset() {
    setCounter(0);
  }

  function handleAmount() {
    setCounter(counter + Number(amount));
  }

  function handleIncreaseTen() {
    setCounter((prev) => prev + 10);
  }

  function handleDecreaseTen() {
    setCounter((prev) => prev - 10);
  }

  return (
    <>
      <div>
        <h2>useState</h2>
        <div className=" felx gap-2">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            className=" px-2 py-2 border bg-sky-800 rounded text-white"
            onClick={handleAmount}>
            Enviar
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <button onClick={handleDecrease} className="text-xl">
            -
          </button>
          <p className="text-xl">{counter}</p>
          <button onClick={handleIncrease} className="text-xl">
            +
          </button>
        </div>
        <button onClick={handleReset}>Reset</button>
      <div className="flex gap-4 items-center">
        <button onClick={handleDecreaseTen} className="text-xl">
          - 10
        </button>
        <button onClick={handleIncreaseTen} className="text-xl">
          + 10
        </button>
      </div>
      </div>
      {/* <Inputs/> */}
      <UseEffectComponent/>
    </>
  );
}