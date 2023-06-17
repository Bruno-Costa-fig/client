import { render, screen } from "@testing-library/react"
import AulasAgendadas from "../index"
import useClassesList from "../../../hooks/useClassesList"

jest.mock("../../../hooks/useClassesList")

const mockUseClassesList = useClassesList

describe("<AulasAgendadas />", () => {
  test("should render the classes cards", () => {

    const dados = [
      {
        id: 1,
        teacherId: 1,
        teacher: {
          id: 1,
          name: "Bruno Costa",
          languagens: [
            "Inglês",
            "Português"
          ]
        },
        data: "2023-06-07",
        hora: "13:30"
      },
      {
        teacherId: 2,
        teacher: {
          id: 2,
          name: "Emanuela P.",
          languagens: [
            "Inglês",
            "Português"
          ]
        },
        data: "2023-06-09",
        hora: "08:00",
        id: 2
      },
    ]

    mockUseClassesList.mockReturnValue({
      classes: dados,
      error: null
    })

    render(<AulasAgendadas />)

    expect(screen.getByRole("option", {name: "Bruno Costa"})).toBeInTheDocument()
    expect(screen.getByRole("option", {name: "Emanuela P."})).toBeInTheDocument()
  })
})