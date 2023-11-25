import React from 'react'
import Add from '../components/Add'

function Home() {
    return (
        <>
        <div className='bg-wheat' style={{backgroundColor:'wheat' ,height:'100vh'}}>
        <div className='container mt-5'  style={{ backgroundColor: 'black', width: '100%', height: '60vh' }}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6 mt-5 text-center">
                    <img width={'250px'} height={'300px'} src="https://m.media-amazon.com/images/I/71nIiJO1uQL._AC_UF1000,1000_QL80_.jpg" alt="" />
                </div>
                <div className="col-md-6 " >

                    <p className='text-warning fs-5 fw-bolder'>“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”</p>
                    <div className='  shadow rounded p-4 d-flex justify-content-center align-items-center  text-center mt-1' style={{ backgroundColor: 'wheat' }}>
                        <h4 style={{ color: 'black', fontWeight: 'bold' }}>Upload New Recipe</h4>
                        <Add />

                    </div>

                </div>


             
            </div>
            </div>
            </div>

            <div className='container'>
            </div>

        </>
    )
}

export default Home
