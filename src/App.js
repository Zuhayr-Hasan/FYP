import { ChatEngine } from 'react-chat-engine'
import './App.css'
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'

const projectID = '4bb26629-66f1-43e4-8de9-496483bd0059'

const App = () => {
 if (!localStorage.getItem('username')) return <LoginForm />

 return (
   <ChatEngine
     height='100vh'
     projectID={projectID}
     userName={localStorage.getItem('username')}
     userSecret={localStorage.getItem('password')}
     renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
     onNewMessage={() =>
       new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()
     }
   />
 )
}

export default App;