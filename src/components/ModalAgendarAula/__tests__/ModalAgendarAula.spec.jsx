import { fireEvent, render, screen } from "@testing-library/react"
import ModalAgendarAula from "../index"

let state = null
let mockSubmitModal = 

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  handleSubmit: () => jest.fn((value) => console.log(value))
}));

describe("<ModalAgendarAula />", () => {
  test("should render the title", () => {
    render(<ModalAgendarAula showModal={true} setShowModal={jest.fn()} submitModal={jest.fn()}/>)

    expect(screen.getByTestId("modal-agendar")).toBeInTheDocument()
    expect(screen.getByRole("heading", {name: "Agendar aula"})).toBeInTheDocument()
  })
  test("should render the form inputs", () => {
    render(<ModalAgendarAula showModal={true} setShowModal={jest.fn()} submitModal={jest.fn()}/>)

    expect(screen.getByPlaceholderText("Digite a data")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Escolha a hora")).toBeInTheDocument()
  })
  test("should close the modal when click the button 'fechar'", async () => {
    let state = true
    let mockSetShowModal = jest.fn((value) => state = value)
    render(<ModalAgendarAula showModal={state} setShowModal={mockSetShowModal} submitModal={jest.fn()}/>)

    const button = screen.getByRole("button", {name: "Fechar"})

    fireEvent.click(button)

    expect(mockSetShowModal).toHaveBeenCalled()
    expect(state).toBeFalsy()
    
    // await sleep(3000);
    
    // expect(screen.queryByTestId("modal-agendar")).toBeInTheDocument()
  })
  test("should call the 'agendar aula' function on click", () => {
    

    // let state = null
    // let mockSubmitModal = jest.fn((dados) => state = dados)
    render(<ModalAgendarAula showModal={true} 
      setShowModal={jest.fn()} 
      submitModal={mockSubmitModal}/>)

    const button = screen.getByRole("button", {name: "Agendar"})
    fireEvent.click(button)

    // screen.debug()

    expect(mockSubmitModal).toHaveBeenCalled()
  })
})