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
                    {' Left sidebar...'}
                </aside>
                {/* Main content */}
                <article className='container__middle'>
                    {' Main content Article ...'}
                </article>

                {/* Right sidebar */}
                <nav className='container__right'>
                    {' Right sidebar...'}
                </nav>
            </main>
        </div>
    </>
  )
}

export default HolyGrailLayout