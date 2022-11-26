import jsonServerProvider from 'ra-data-json-server'
import { FC } from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const App: FC = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name={'posts'} list={ListGuesser} />
    <Resource name={'comments'} list={ListGuesser} />
  </Admin>
)

export default App
