import { FaWindowClose } from "react-icons/fa";
import FaqItem from "./FaqItem";
function Modal({ setModalIsOpen }) {
  return (
    <div className="fixed overflow-scroll modal opacity-0 flex flex-col pt-32 items-center gap-4 max-sm:inset-0 sm:right-20 sm:left-20 sm:bottom-20 sm:rounded-lg sm:top-10 2xl:inset-40 text-slate-50 bg-black/70 backdrop-blur-lg z-50">
      <h1 className="absolute text-5xl text-orange-600 top-10">FaQ</h1>
      <FaqItem>
        <span className="text-orange-600 font-semibold">Que es esto?</span>{" "}
        <br /> <hr className="mt-0.5 border-orange-600"></hr>
        <span className="text-sm lg:text-lg font-base">
          Calculadora minimalista para conocer la factura electrica del mes.
        </span>
      </FaqItem>
      <FaqItem>
        <span className="text-orange-600 font-semibold">Como Funciona?</span>{" "}
        <br /> <hr className="mt-0.5 border-orange-600"></hr>
        <span className="text-sm lg:text-lg font-base">
          Simplemente tome la lectura del metro dos veces al mes (al inicio y al
          final) e introduzca los datos.
        </span>
      </FaqItem>
      <FaqItem>
        <span className="text-orange-600 font-semibold">Quien soy?</span> <br />{" "}
        <hr className="mt-0.5 border-orange-600"></hr>
        <span className="text-sm lg:text-lg font-base">
          {" "}
          Mi nombre es Carlos Yoan soy ingeniero electrico pero me apasiona la
          programacion puedes contactarme a traves de este{" "}
          <a
            className="font-bold text-orange-600 underline"
            href="https://t.me/Mouse_Potat0"
          >
            link.
          </a>{" "}
        </span>
      </FaqItem>
      <FaWindowClose
        onClick={() => setModalIsOpen(false)}
        className="absolute text-2xl cursor-pointer  text-orange-200 hover:text-orange-600 transition-colors top-4 right-4"
      />
    </div>
  );
}

export default Modal;
