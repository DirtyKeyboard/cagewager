import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { set } from '../redux/userSlice'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'

function App() {
  const [form, setForm] = React.useState({username: '', password: ''})
  const { user } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const r = await axios.post('/api/login', {username: form.username, password: form.password})
      dispatch(set(r.data.user))
    }
    catch (err) {
      toast.error('Invalid username or password.', {position: 'bottom-right'})
    }
  }
  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }
  return (
    <>
      <ToastContainer />
      {user ? user.token : 
      <form className='flex flex-col gap-2 m-4 items-center justify-center' onSubmit={handleSubmit}>
        <h1>Username</h1>
        <input name='username' value={form.username} onChange={handleChange} type='text' className='border border-black rounded-full w-64'/>
        <h1>Password</h1>
        <input name='password' value={form.password} onChange={handleChange} type='password' className='border border-black rounded-full w-64'/>
        <button type='submit' className='bg-blue-600 text-white font-bold p-4 rounded-2xl hover:bg-blue-400 transition-all'>Submit</button>
      </form>
      }
    </>
  )
}

export default App
