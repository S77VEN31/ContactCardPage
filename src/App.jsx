// React
import React from 'react'
import ReactDOM from 'react-dom'
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
// Styles
import './App.css'

const App = () => {
  return (
    <div className='app-main-container '>
      <main className='app-main-content'>
        <div className='contact-header'>
          <div className='info-container'>
            <img
              className='contact-profile-picture'
              src='https://th.bing.com/th/id/OIP.w4xdC_D4ZatjQpDeBBbaFQAAAA?pid=ImgDet&rs=1'
            />
            <div className='texts-container'>
              <span style={{ color: 'white', textAlign: 'center' }}>
                Title
              </span>
              <span style={{ color: 'white', textAlign: 'center' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt cumque odio earum laudantium obcaecati ab harum ipsa unde! Voluptas aut fugiat in officia commodi corrupti praesentium nostrum repellat exercitationem.
              </span>
            </div>
          </div>

          <div className='buttons-container'>
            <button style={{
              height: 100,
              flex: 1,
              border: 'none',
              backgroundColor: 'red',
              paddingLeft: 40
            }}
            >
              <span style={{
                color: 'white',
                textAlign: 'center'
              }}
              >
                Call
              </span>
              <FontAwesomeIcon icon={faPhone} fade />

            </button>
            <button style={{
              height: 100,
              flex: 1,
              border: 'none',
              backgroundColor: 'red'
            }}
            >
              <span style={{
                color: 'white',
                textAlign: 'center'
              }}
              >
                Email
              </span>
            </button>

            <button style={{
              height: 100,
              flex: 1,
              border: 'none',
              backgroundColor: 'red',
              paddingRight: 40
            }}
            >
              <span style={{
                color: 'white',
                textAlign: 'center'
              }}
              >Directions
              </span>
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: 'white',
            flex: 1
          }}
          className='example'
        />
      </main>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
