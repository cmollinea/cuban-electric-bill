import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function FaqItem({ children }) {
  const [faqOpen, setFaqOpen] = useState(false);
  return (
    <div
      className={`relative transition-all duration-200 w-[80%] overflow-y-hidden ${
        faqOpen ? "max-sm:h-36 h-28" : "h-8"
      } text-xl`}
    >
      {children}
      {faqOpen ? (
        <FaChevronUp
          onClick={() => setFaqOpen((prev) => !prev)}
          className="absolute text-orange-600 text-xs cursor-pointer top-3 right-6"
        />
      ) : (
        <FaChevronDown
          onClick={() => setFaqOpen((prev) => !prev)}
          className="absolute text-orange-600 text-xs cursor-pointer top-3 right-6"
        />
      )}
    </div>
  );
}

export default FaqItem;
