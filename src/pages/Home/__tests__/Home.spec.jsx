import { render, screen } from "@testing-library/react"
import Home from "../index"
import useTheacherList from "../../../hooks/useTeacherList"

jest.mock("../../../hooks/useTeacherList")

const mockUseTeacherList = useTheacherList

describe("<Home />", () => {
  test("should render the teachers cards", () => {

    const dados = [
      {
        id: 1,
        name: "Bruno Costa",
        languagens: [
          "Inglês",
          "Português"
        ]
      },
      {
        id: 2,
        name: "Emanuela P.",
        languagens: [
          "Inglês",
          "Português"
        ]
      }
    ]

    mockUseTeacherList.mockReturnValue({
      teachers: dados,
      error: null
    })

    render(<Home />)

    expect(screen.getByRole("option", {name: "Bruno Costa"})).toBeInTheDocument()
    expect(screen.getByRole("option", {name: "Emanuela P."})).toBeInTheDocument()
  })
})