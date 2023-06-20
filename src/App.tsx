import { Select } from "./components/Select"

const options = [
  {label: 'First',value: 1},{label: 'Second',value: 2},{label: 'Third',value: 3}
]


function App() {

  return (
    <div>
      <Select options={options}/>
    </div>
  )
}

export default App
