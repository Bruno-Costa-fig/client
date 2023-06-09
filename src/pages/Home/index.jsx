import ContainerWrapper from "../../components/ContainerWrapper";
import TeacherCard from "../../components/TeacherCard";
import useTheacherList from "../../hooks/useTeacherList";
import ModalAgendarAula from "../../components/ModalAgendarAula"
import Toast from "../../components/Toast"
import { useRef, useState } from "react";
import moment from "moment";
import { apiService } from "../../services/api";

function Home() {
  const { teachers, error } = useTheacherList()
  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const refteacherId = useRef(0)

  const handleShowModal = (teacherId) => {
    refteacherId.current = teacherId
    setShowModal(true)
  }

  const submitModal = async (dados) => {
    const classItem = {
      teacherId: refteacherId.current,
      data: moment(dados.data).format("YYYY-MM-DD"),
      hora: dados.hora
    }

    try {
      const response = await apiService.post("/classes", classItem)

      console.log(response)

    } catch (error) {
      console.log(error)
    }

    setShowToast(true)
    setShowModal(false)
  }

  return (
    <>
      <Toast show={showToast} setShowToast={setShowToast} message={"Aula agendada com sucesso!"} />
      <ContainerWrapper>
        <ModalAgendarAula showModal={showModal} setShowModal={setShowModal} submitModal={submitModal} />
        {!!error ? (
          <>
            <h3 className="whitespace-nowrap">Nenhum dado encontrado...</h3>
          </>
        ) : (
          <>
            {teachers.map(teacher => (
              <TeacherCard key={teacher.id} variant={1} teacher={teacher} handleShowModal={handleShowModal} />
            ))}
          </>
        )}
      </ContainerWrapper>
    </>
  );
}

export default Home;