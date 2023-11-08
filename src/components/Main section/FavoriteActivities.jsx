import React from 'react'

function FavoriteActivities() {
  return (
    <>
    <div className=' m-12'>
        <h1 className='text-3xl font-bold text-center p-4'>Favorite Activitie</h1>
        <div className='flex flex-wrap gap-9 justify-center'>
        <div className=' w-96 rounded-2xl  bg-blue-900 ' >
            <section className=' p-3 flex gap-2'>
            <img className='h-16 rounded-2xl ' src="https://img.freepik.com/premium-vector/business-investment-logo-template_269830-1275.jpg" alt="" />
                <h1 className='text-2xl font-bold flex flex-col justify-end pb-2 '>Investments</h1>
            </section>
            <p className='px-6 pb-6'>Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment</p>
        </div>
        <div className='h-30 w-96 rounded-2xl bg-blue-900 ' >
            <section className=' p-3 flex gap-2'>
            <img className='h-16   rounded-2xl ' src="https://i.pinimg.com/550x/78/1d/67/781d6783a1465bcfd437146c334f783c.jpg" alt="" />
                <h1 className='text-2xl font-bold flex flex-col justify-end pb-2 '>Cricket</h1>
            </section>
            <p className='px-6 pb-6'>I love to paly cricket and specially love to bat . basically play in small ground and with tenis ball</p>
        </div>
        <div className='h-30 w-96 rounded-2xl bg-blue-900' >
            <section className=' p-3 flex gap-2'>
            <img className='h-16   rounded-2xl ' src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699401600&semt=ais" alt="" />
                <h1 className='text-2xl font-bold flex flex-col justify-end pb-2 '>Reading Books</h1>
            </section>
            <p className='px-6 pb-6'>I love to read book . Basically  the self devlepment books are my favarite</p>
        </div>
        <div className='h-30 w-96 rounded-2xl bg-blue-900 ' >
            <section className=' p-3 flex gap-2'>
            <img className='h-16 object-cover w-16  rounded-2xl ' src="https://greatpeopleinside.com/wp-content/uploads/2017/05/HR-GR8-technology.jpg" alt="" />
                <h1 className='text-2xl font-bold flex flex-col justify-end pb-2 '>Tech Gagets</h1>
            </section>
            <p className='px-6 pb-6'>I love to play with tech gagets .Also learn new tech and use of morder technology </p>
        </div>
        </div>
    </div>
    </>
  )
}

export default FavoriteActivities

