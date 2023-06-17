import { fireEvent, render, screen } from "@testing-library/react"
import TeacherCard from "../index"

const professor = {
  id: 1,
  name: "Bruno Costa",
  languagens: [
    "Inglês",
    "Português"
  ]
}

/**
 * Testes relacionados ao exercício 04 da semana 09 do módulo 3
 */

describe("<TeacherCard />", () => {
  test("should render the teacher name", () => {
    const mockHandleShowModal = jest.fn()
    render(<TeacherCard teacher={professor} variant={1} handleShowModal={mockHandleShowModal} />)

    expect(screen.getByRole("option", {name: /Bruno Costa/i})).toBeInTheDocument()
  })
  test("should render the teacher languages", () => {
    const mockHandleShowModal = jest.fn()
    render(<TeacherCard teacher={professor} variant={1} handleShowModal={mockHandleShowModal} />)

    expect(screen.getByLabelText("linguagens")).toBeInTheDocument()
    expect(screen.getByText("Inglês | Português")).toBeInTheDocument()
  })
  test("should render the button 'Agendar aula' on variation 1", () => {
    const mockHandleShowModal = jest.fn()
    render(<TeacherCard teacher={professor} variant={1} handleShowModal={mockHandleShowModal} />)
  
    expect(screen.getByRole("button", {name: "Agendar aula"})).toBeInTheDocument()
  })
  test("should render the data and time on variation 2", () => {
    const mockHandleShowModal = jest.fn()
    render(<TeacherCard teacher={professor} data="2023-06-07" hora="13:30" variant={2} handleShowModal={mockHandleShowModal} />)

    expect(screen.getByLabelText("hora-aula")).toBeInTheDocument()
    // expect(screen.getByLabelText("data-aula")).toBeInTheDocument()
    expect(screen.getByText("07/06")).toBeInTheDocument()
    expect(screen.getByText("13:30")).toBeInTheDocument()
  })
  test("should call the function to open the modal", () => {
    let teacherId = 0
    const mockHandleShowModal = jest.fn((id) => teacherId = id)
    render(<TeacherCard teacher={professor} variant={1} handleShowModal={mockHandleShowModal} />)

    const button = screen.getByRole("button", {name: "Agendar aula"})
    fireEvent.click(button)

    expect(mockHandleShowModal).toHaveBeenCalled()
    expect(teacherId).toBe(1)
  })
})