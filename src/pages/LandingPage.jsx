import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <>
            <div style={{ backgroundColor: 'black', width: '100%', height: '100vh' }}>
               <div>
                    <div className="row d-flex p-5">
                        <div className="col-6">
                            <img className='mt-5' width={'100%'} height={'100%'} src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg" alt="" />
                        </div>
                        <div className="col-6 mt-5">
                            <div className='mt-4'>
                            <h1 className='text-light'>The Tasty Palette</h1>
                            <p className='text-light '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, unde optio necessitatibus asperiores cumque provident modi expedita repellat quasi eius fugiat dicta aliquam quidem nemo odit. Aperiam, placeat dolor. Eveniet.</p>
                            </div>
                            <div className=' mt-5'>
                          <Link to={'/home'}><button  className='btn btn-outline bg-success text-light rounded'>Get Started</button>
                            </Link>  
                            </div>
                        </div>
                        </div>
                
                </div>
            </div>
        </>
    )
}

export default LandingPage
