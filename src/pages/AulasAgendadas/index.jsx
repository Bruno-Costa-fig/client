import ContainerWrapper from "../../components/ContainerWrapper";
import TeacherCard from "../../components/TeacherCard";
import useClassesList from "../../hooks/useClassesList";

function AulasAgendadas() {
  const {classes, error} = useClassesList()

  return (
    <ContainerWrapper>
      {!!error ? (
        <>
          <h3 className="whitespace-nowrap">Nenhum dado encontrado...</h3>
        </>
      ) : (
        <>
          {classes.map(classe => (
            <TeacherCard key={classe.id} variant={2} teacher={classe.teacher} hora={classe.hora} data={classe.data} />
          ))}
        </>
      )}
    </ContainerWrapper>
  );
}

export default AulasAgendadas;