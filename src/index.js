import App from "./App";
import {createRoot} from 'react-dom/client'
import axios from 'axios'
axios.defaults.baseURL = 'https://docppointment.pythonanywhere.com/'

createRoot(document.getElementById('root')).render(<App/>)