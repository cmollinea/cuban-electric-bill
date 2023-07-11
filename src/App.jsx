import { useState, useEffect } from "react";
import { MdHelpOutline, MdCalculate, MdError } from "react-icons/md";
import { useForm } from "react-hook-form";
import { calculate } from "./services/calculate.js";
import Table from "./Table.jsx";
import Modal from "./Modal.jsx";

function App() {
  const form = useForm();
  const { register, formState, handleSubmit } = form;

  const [consumption, setConsumption] = useState(0);
  const [bill, setBill] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { errors } = formState;
  const onSubmit = (data) => {
    setConsumption(data.second - data.first);
    console.log(data.second - data.first);
  };
  useEffect(() => setBill(calculate(consumption)), [consumption]);

  return (
    <div className="min-h-screen font-semibold w-full">
      <header className=" h-40 xl:h-80 shadow-md shadow-black  bg-orange-600">
        <p className="text-slate-50 h-16 flex items-center justify-center font-semibold text-2xl xl:text-5xl text-center">
          Calculadora de Consumo Electrico
        </p>
      </header>
      <div className="absolute 2xl:mx-60 w-full top-10 xl:top-24 ">
        <main className="grid xl:grid-cols-2 lg:px-40 gap-10 relative place-content-center min-h-screen">
          <div>
            <form
              className="w-full lg:w-[80%] 3xl:[w-50%] 2xl:w-[50%] text-slate-50 flex gap-2 flex-col bg-gray-400 rounded-lg shadow-md shadow-black/30 p-6 mt-14"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label
                className="text-xs opacity-50 text-gray-950"
                htmlFor="first"
              >
                1ra Lectura
              </label>
              <div className="relative grid items-center">
                {" "}
                <input
                  className="bg-slate-950/50 placeholder:text-slate-50/40 p-2 rounded-lg outline-none border-2 border-transparent focus:border-orange-600 transition-all ease-in"
                  id="first"
                  {...register("first", {
                    required: {
                      value: true,
                      message: "Necesito esta informacion!",
                    },
                    valueAsNumber: true,
                    validate: {
                      aNumber: (value) =>
                        parseInt(value) >= 0 ||
                        "Esto no parece una lectura correcta.",
                    },
                  })}
                  type="text"
                  placeholder="#######"
                />
                <span className="absolute right-4 text-slate-50/40">Kw/h</span>
              </div>
              {errors.first ? (
                <p className="text-red-600 text-xs opacity-60 flex items-center gap-1">
                  <MdError />
                  {errors.first?.message}
                </p>
              ) : null}

              <label
                className="text-xs opacity-50 text-gray-950"
                htmlFor="second"
              >
                2da Lectura
              </label>
              <div className="relative grid items-center">
                {" "}
                <input
                  className="bg-slate-950/50 placeholder:text-slate-50/40 p-2 rounded-lg outline-none border-2 border-transparent focus:border-orange-600 transition-all ease-in"
                  id="second"
                  type="text"
                  {...register("second", {
                    required: {
                      value: true,
                      message: "Necesito esta informacion!",
                    },
                    valueAsNumber: true,
                    validate: {
                      aNumber: (value) =>
                        parseInt(value) >= 0 ||
                        "Esto no parece una lectura correcta.",
                    },
                  })}
                  placeholder="#######"
                />
                <span className="absolute right-4 text-slate-50/40">Kw/h</span>
              </div>
              {errors.second ? (
                <p className="text-red-600 text-xs opacity-60 flex items-center gap-1">
                  <MdError />
                  {errors.second?.message}
                </p>
              ) : null}
              <button className="w-full mt-4 flex items-center justify-center p-2 bg-gray-900/50 shadow-md shadow-black active:translate-y-0.5 hover:bg-orange-600 transition-colors ease-in rounded-lg">
                <MdCalculate className="text-xl mr-2" /> Calcular
              </button>
            </form>
            <p className="text-base mt-10 flex items-center justify-center lg:justify-start text-slate-100">
              Total a pagar:
              <span className="text-4xl ml-4 text-orange-600">${bill} CUP</span>
            </p>
          </div>
          <Table consumption={consumption} bill={bill} />
        </main>
      </div>
      <button
        onClick={() => setModalIsOpen(true)}
        className="text-5xl text-orange-600 bg-black/50 rounded-full opacity-30 hover:opacity-100 fixed right-6 bottom-8 transition-all ease-in cursor-pointer"
      >
        <MdHelpOutline />
      </button>
      {modalIsOpen ? <Modal setModalIsOpen={setModalIsOpen} /> : null}
    </div>
  );
}

export default App;
