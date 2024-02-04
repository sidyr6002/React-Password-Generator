import './App.css'
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator'

function App() {
  return (
    <>
        <div className='flex flex-col h-svh justify-center items-center gap-3'>
			<h1 className='text-3xl font-bold'>Password Generator</h1>
			<PasswordGenerator />
		</div>
    </>
  )
}

export default App