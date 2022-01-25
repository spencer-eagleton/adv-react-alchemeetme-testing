import { render, screen } from "@testing-library/react"
import Home from './Home'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', async () => {
  render(<Home user={user} />)
   const { color } = user
  const header = await screen.findByAltText('header')
  expect(header).toBeInTheDocument()

  const profileName =  screen.getByRole('heading', { name: /Vonta/i })
  expect(profileName).toBeInTheDocument()

  const motto = screen.getByText(/res non verba/i)
  expect(motto).toBeInTheDocument()

  const userColor = screen.getByText(color)
  expect(userColor).toBeInTheDocument()

  const userInterests = screen.getByRole('heading', {
    name: /interests/i
  })
  expect(userInterests).toBeInTheDocument()

  const userFaves = screen.getByRole('list')
  expect(userFaves.children.length).toEqual(6)

})
