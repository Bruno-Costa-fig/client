import { render, screen } from "@testing-library/react"
import App from "./App"
import { BrowserRouter } from "react-router-dom"

/**
 * Estes testes fazem parte da verificação de testes para o exercício
 * 6 e 7 da semana 9 do módulo 3
 */
describe("<App />", () => {
  test("should render the <Header />", () => {
    render(<App />, {wrapper: BrowserRouter})

    expect(screen.getByLabelText("Logo da empresa")).toBeInTheDocument()
    expect(screen.getByTitle("Link para a página de aulas agendadas")).toBeInTheDocument()
  })
  test("should render the <Footer />", () => {
    render(<App />, {wrapper: BrowserRouter})

    expect(screen.getByTitle("Link para o LinkedIn")).toBeInTheDocument()
    expect(screen.getByTitle("Link para o Instagram")).toBeInTheDocument()
  })
})