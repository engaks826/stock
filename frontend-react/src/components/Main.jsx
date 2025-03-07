import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction App</h1>
                <p className='text-light lead'>Lorem ipsum odor amet, consectetuer adipiscing elit. Pretium mattis volutpat ligula viverra suscipit porta. Tempor augue sagittis litora suscipit purus tristique conubia mollis placerat. Eleifend curae fusce elit pulvinar porta. Justo suscipit rutrum rhoncus lobortis volutpat praesent orci. Ex dis auctor dolor blandit litora libero dolor volutpat. Maecenas mollis vivamus finibus sit dis. Adipiscing rhoncus proin sapien cursus commodo venenatis consectetur. Risus malesuada malesuada faucibus magnis magna nulla senectus vulputate.</p>
                <Button text='Login'class='btn-outline-info'/>
            </div>
        </div>
    </>
  )
}

export default Main