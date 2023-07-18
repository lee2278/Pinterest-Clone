import { useHistory } from 'react-router-dom'
import './NotFoundPage.css'

export default function NotFoundPage() {
    const history = useHistory()

    const sendHome = () => {
        history.push('/')
    }

    return (
        <div className='center-everything'>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist</p>
            <div className='not-found-img-container'>
            <img id='not-found-img'src='https://i.pinimg.com/564x/ab/1e/f2/ab1ef2f5085a5b7f36f06d600359563f.jpg'/>
            </div>
            <button id='go-back-home-btn' onClick={sendHome}>Click here to go back to Home</button>
        </div>
    )
}
