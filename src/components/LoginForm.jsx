import { useState } from 'react'
import axios from 'axios'

const projectID = '4bb26629-66f1-43e4-8de9-496483bd0059'

const Modal = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const authObject = {
      'Project-ID': projectID,
      'User-Name': username,
      'User-Secret': password,
    }

    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      })

      localStorage.setItem('username', username)
      localStorage.setItem('password', password)

      window.location.reload()
      setError('')
    } catch (err) {
      setError('Oops, incorrect credentials.')
    }
  }

  return (
    <div className='wrapper'>
      <div className='form'>
        <img 
          src='https://i.postimg.cc/d09x4678/Image-8.png' 
          alt='logo'
          class='logo-img' 
        />
        <h1 className='title'>Welcome to Saturn</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input'
            placeholder='Username'
            required
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input'
            placeholder='Password'
            required
          />
          <div align='center'>
            <button type='submit' className='button'>
              <span>Let's go</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>
  )
}

export default Modal