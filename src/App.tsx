import {Routes, Route} from 'react-router-dom';
import './globals.css';

const App = () => {
  return (
    <main className='flex h-screen'>
        <Routes>
            {/*public routes*/}
            <Route path = '/sign-in' element={SigninForm />}/>
            {/*private routes*/}
            <Route index element={<Home/>}/>
        </Routes>
        <h1 className='text-3x1 font-bold underline'>Hello ComicDrop!</h1>
    </main>
  )
}

export default App