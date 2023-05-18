import React from 'react'
import ReactDOM from 'react-dom/client'
// React element
//const title = React.createElement('h1', { id: 'title' }, 'Hello React')
//JSX
/* const app = (
    <div>
        <h1 id="test"> Hello app</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            laudantium possimus quas excepturi culpa eveniet commodi, nemo
            praesentium eius esse maxime facilis, exercitationem dolorem nisi
            inventore accusamus illo impedit sint?
        </p>
    </div>
) */
const App = () => {
    return (
        <div>
            <h1>Hello App component</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                laudantium possimus quas excepturi culpa eveniet commodi, nemo
                praesentium eius esse maxime facilis, exercitationem dolorem
                nisi inventore accusamus illo impedit sint?
            </p>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
