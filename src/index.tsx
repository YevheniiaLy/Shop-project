import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Title from './Title'
import { Content } from './Content'

const App = () => {
    return (
        <>
            <Title title="App" />
            <Content
                text1={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At laudantium possimus quas excepturi culpa eveniet commodi, nemo praesentium eius esse maxime facilis, exercitationem dolorem nisi inventore accusamus illo impedit sint?'
                }
                text2={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At laudantium possimus quas excepturi culpa eveniet commodi, nemo praesentium eius esse maxime facilis, exercitationem dolorem nisi inventore accusamus illo impedit sint?'
                }
            />
            <Title title="React" num={3} />
            <Content
                text1={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At laudantium possimus quas excepturi culpa eveniet commodi, nemo praesentium eius esse maxime facilis, exercitationem dolorem nisi inventore accusamus illo impedit sint?'
                }
                text2={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. At laudantium possimus quas excepturi culpa eveniet commodi, nemo praesentium eius esse maxime facilis, exercitationem dolorem nisi inventore accusamus illo impedit sint?'
                }
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
