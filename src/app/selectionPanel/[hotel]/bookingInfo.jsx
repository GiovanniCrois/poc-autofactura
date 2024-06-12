"use client";

import { getBooking } from "@/app/actions/actions";
import { useFormStatus } from "react-dom";
import { useState } from "react";

export default function bookingInfo() {
  const { pending } = useFormStatus();
  const [isBooked, setBooked] = useState("hidden");
  let totalFactura = 0;
  const [bookingData, setBookingData] = useState([]);
  async function upDateData(formData) {
    setBookingData(await getBooking(formData).then(console.log(bookingData)));
  }

  return (
    <>
      <div className="w-1/2 mx-auto my-8 p-4 bg-[#F6DCAC] rounded-md border-x-4 border-t-4 border-[#01204E]">
        <h2 className="text-[#01204E] text-md ">
          Para continuar, por favor, introduzca el id de su hospedaje
        </h2>
        <form
          action={(formData) => {
            upDateData(formData);
            setBooked(
              "w-1/2 mx-auto my-8 p-4 bg-[#F6DCAC] rounded-md border-x-4 border-b-4 border-[#01204E]"
            );
          }}
          className="flex w-full my-4 p-2 justify-around"
        >
          <input
            className="rounded-md text-[#01204E] w-1/3 p-2"
            name="id"
            type="text"
            placeholder="id de hospedaje"
          ></input>
          <button
            className="rounded-md bg-[#01204E] text-[#F6DCAC] border-2 border-[#01204E] p-2 hover:border-2 hover:border-[#01204E] hover:bg-[#F6DCAC] hover:text-[#01204E]"
            type="submit"
          >
            {pending ? "Buscando..." : "Buscar"}
          </button>
        </form>
      </div>
      <div className={isBooked}>
        {bookingData.map(function (folio) {
          totalFactura += Number(folio.total);
          return (
            <div>
              {folio.accomodations.map((accomodation) => {
                return (
                  <>
                    <div className="p-4 shadow-xl">
                      <h2 className="text-[#01204E] text-md text-left font-bold">
                        Datos de la estancia
                      </h2>
                      <div className="grid-cols-2 gap-2 p-2 text-[#01204E] text-md">
                        <div className="flex justify-between">
                          <p>Fecha de Check In:</p>
                          <p>{accomodation.checkin_date}</p>
                        </div>
                        <div className="flex justify-between">
                          <p>Fecha de Check Out:</p>
                          <p>{accomodation.checkout_date} </p>
                        </div>
                        <div className="flex justify-between">
                          <p>Subtotal:</p>
                          <p>{Number(accomodation.net_amount).toFixed(2)}</p>
                        </div>
                        {accomodation.taxes.included.map((tax) => {
                          return (
                            <>
                              <div className="flex justify-between">
                                <p>{tax.tax}</p>
                                <p>{Number(tax.amount).toFixed(2)}</p>
                              </div>
                            </>
                          );
                        })}
                        <div className="flex justify-between">
                          <p>Total por servicio:</p>
                          <p>{Number(accomodation.price).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

              {folio.extras.map((extra) => {
                return (
                  <>
                    <div className="p-2 shadow-xl">
                      <h2 className="text-[#01204E] text-md text-left font-bold">
                        Extras:
                      </h2>
                      <div className="p-2 text-[#01204E] text-md">
                        <div className="flex justify-between">
                          <p>Descripción:</p>
                          <p>{extra.title}</p>
                        </div>
                        <div className="flex justify-between">
                          <p>Cantidad:</p>
                          <p>{extra.quantity}</p>
                        </div>
                        <div className="flex justify-between">
                          <p>Subtotal:</p>
                          <p>
                            {Number(extra.net_amount * extra.quantity).toFixed(
                              2
                            )}
                          </p>
                        </div>
                        {extra.taxes.included.map((tax) => {
                          return (
                            <>
                              <div className="flex justify-between">
                                <p>{tax.tax}</p>
                                <p>{Number(tax.amount).toFixed(2)}</p>
                              </div>
                            </>
                          );
                        })}
                        <div className="flex justify-between">
                          <p>Total por extra:</p>
                          <p>
                            {Number(extra.price * extra.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          );
        })}
        <div className="p-2 my-2">
          <h2 className="text-[#01204E] text-md text-right font-bold">
            Total Factura:{" "}
            {Number(totalFactura.toFixed(2)).toLocaleString("es-MX")}
          </h2>
        </div>
        <h2 className="text-[#01204E] text-md text-left font-bold">
          Datos Fiscales
        </h2>
        <div className=" p-2 text-[#01204E] text-md">
          <input
            className="p-2 my-4 rounded-sm"
            type="text"
            name="rfc"
            placeholder="RFC"
          ></input>
          <input
            className="p-2 my-4 rounded-sm"
            type="text"
            name="social"
            placeholder="Razón Social"
          ></input>
          <input
            className="p-2 my-4 rounded-sm"
            type="text"
            name="cp"
            placeholder="Código Postal"
          ></input>
          <input
            className="p-2 my-4 rounded-sm"
            type="text"
            name="mail"
            placeholder="Correo electrónico"
          ></input>
          <select
            className="block p-2 my-4 rounded-sm"
            id="payMethod"
            defaultValue={"Método de Pago"}
          >
            <option disabled>Método de Pago</option>
            <option>Contado</option>
            <option>Crédito</option>
          </select>
          <select
            className="block 
            p-2 my-4 rounded-sm"
            defaultValue={"Uso de CFDI"}
          >
            <option disabled>Uso de CFDI</option>
          </select>
        </div>
      </div>
    </>
  );
}
