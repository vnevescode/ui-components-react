import React from 'react'

const HolyGrailLayout = () => {
  return (
    <>
        <div className="container">
            <header>
                {'This is the Header ... '}
            </header>
            <main className='container__main'>
                {/* Left sidebar */}
                <aside className='conteiner__left'>

                </aside>
                {/* Main content */}
                <article className='container__middle'>
                    {' Main content Article ...'}
                </article>

            </main>
        </div>
    </>
  )
}

export default HolyGrailLayout