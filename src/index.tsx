import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Title from './Title'

const Content = () => {
    return (
        <React.Fragment>
            <p className="red">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                laudantium possimus quas excepturi culpa eveniet commodi, nemo
                praesentium eius esse maxime facilis, exercitationem dolorem
                nisi inventore accusamus illo impedit sint?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                laudantium possimus quas excepturi culpa eveniet commodi, nemo
                praesentium eius esse maxime facilis, exercitationem dolorem
                nisi inventore accusamus illo impedit sint?
            </p>
        </React.Fragment>
    )
}
const App = () => {
    return (
        <>
            <Title title="App" /> <Content />
            <Title title="React" num={3} /> <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
