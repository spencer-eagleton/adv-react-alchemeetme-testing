import App from './App'

const { render, screen } = require("@testing-library/react")

test('Should render the header', async () => {
    render(<App />)

    const headerImg = screen.getByAltText(/alchemy/i)
    expect(headerImg).toBeInTheDocument()

    const profileName = await screen.findByText(/vonta/i)
    expect(profileName).toBeInTheDocument()




})
