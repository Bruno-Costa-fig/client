import { BsPersonCircle } from "react-icons/bs"
import { MdOutlineWatchLater } from "react-icons/md"
import { IoCalendarNumber } from "react-icons/io5";
import moment from "moment/moment";

function TeacherCard({ teacher, handleShowModal = null, variant = 1, hora = "", data = "" }) {
  return (
    <div className="hover:scale-95 transition-transform ease-in-out t w-full sm:h-36 p-2 mb-5 lg:mb-0 lg:p-5 bg-gray-200 rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row justify-between items-center content-center sm:basis-1/2">
      <div className="mx-2 lg:mx-5 flex items-center justify-between">
        <BsPersonCircle className="text-6xl me-3 mt-2 text-primary" />
        <div className="flex flex-col">
          <h4>{teacher.name}</h4>
          <span>{!!teacher.languagens && teacher.languagens.join(" | ")}</span>
      </div>
      </div>
      {variant == 1 ? (
        <button onClick={() => handleShowModal(teacher.id)} className="p-2 my-3 text-sm text-primary rounded-2xl border-2 border-primary hover:border-dark-green hover:text-dark-green">Agendar aula</button>
      ) : (
        <div className="flex text-dark-green flex-col items-center mt-2">
          <div className="flex items-center">
            <IoCalendarNumber className="text-2xl me-3" />
            {!!data && <h5>{moment(data).format("DD/MM")}</h5>}
          </div>
          <div className="flex items-center">
            <MdOutlineWatchLater className="text-2xl me-3" />
            {!!hora && <h5>{hora}</h5>}
          </div>
        </div>
      )}
    </div>
  );
}

export default TeacherCard;