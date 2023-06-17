import React, { useState } from "react";
import InputGroup from "../InputGroup"
import TimePicker from "../TimePicker"
import { useForm } from "react-hook-form";
import moment from "moment";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

export default function ModalAgendarAula({ showModal, setShowModal, submitModal }) {

  const classSchema = yup.object({
    hora: yup.string().required("Hora é obrigatório"),
    data: yup.date().required("A data é obrigatória")
  })

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(classSchema), defaultValues: {
      data: moment(new Date).add(1, "days").format("YYYY-MM-DD"),
      hora: "08:00"
    }
  })

  return (
    <>
      {showModal ? (
        <>
          <div data-testid="modal-agendar"
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="bg-primary flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl text-white font-semibold">
                    Agendar aula
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleSubmit(submitModal)}>
                    <InputGroup role="textbox" type="date" {...register("data")} name="data" placeholder="Digite a data" helperText={errors?.data?.message} labelText={"Data"} />
                    <TimePicker {...register("hora")} name="hora" placeholder="Escolha a hora" helperText={errors?.hora?.message} labelText={"Hora"} />
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Fechar
                      </button>
                      <button
                        role="button"
                        className="bg-primary text-white active:bg-primary-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                        onClick={handleSubmit(submitModal)}
                      >
                        Agendar
                      </button>

                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}