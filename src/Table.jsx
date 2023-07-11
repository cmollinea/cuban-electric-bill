import React from "react";
import tabledata from "./mocks/tabledata.json";

function Table({ consumption, bill }) {
  return (
    <div className="xl:w-[80%] 2xl:w-[50%] mb-28">
      <table className="text-orange-600 w-full text-center table-fixed">
        <caption className="text-3xl text-slate-50 font-semibold mb-6 w-full text-center">
          Tarifa Residencial
          <hr className="border-orange-600 mt-4 lg:hidden " />
        </caption>
        <thead className=" ">
          <tr className="">
            <th>
              Rango <br />
              (kWh)
            </th>
            <th>
              Precio <br /> (CUP)
            </th>
          </tr>
        </thead>
        <tbody className="">
          {tabledata.map((data, index) => (
            <tr key={index}>
              <td className="font-semibold">{data.range}</td>
              <td className="font-semibold">{data.cost}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className="text-2xl font-bold">
          <tr>
            <td className="h-10">
              Consumo <br />
            </td>
            <td>{consumption} kWh</td>
          </tr>
          <tr>
            <td className="h-10">
              {" "}
              Importe <br />
            </td>
            <td>{bill} CUP</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
