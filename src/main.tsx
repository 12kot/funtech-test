import { createRoot } from 'react-dom/client'

import App from 'app/provider'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/mousewheel'

import 'shared/styles/globals.scss'
import 'shared/styles/variables.scss'

createRoot(document.getElementById('root')!).render(<App />)
