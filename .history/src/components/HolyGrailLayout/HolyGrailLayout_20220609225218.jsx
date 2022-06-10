import React from 'react'
import './HolyGrailLayout.styles.css'

const HolyGrailLayout = () => {
  return (
    <>
        <div className="container">
            <header className='container_header'>
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
            <footer>
                {'This is the Footer'}
            </footer>
        </div>
    </>
  )
}

export default HolyGrailLayout