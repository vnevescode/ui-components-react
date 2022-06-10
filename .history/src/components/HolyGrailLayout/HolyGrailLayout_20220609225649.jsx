import React from 'react'
import './HolyGrailLayout.styles.css'

const HolyGrailLayout = () => {
  return (
    <>
        <div className="container">
            <header className='container__header'>
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
                    {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci a scelerisque purus semper eget duis. Consequat semper viverra nam libero justo laoreet sit amet cursus. Consectetur purus ut faucibus pulvinar elementum integer enim. Duis convallis convallis tellus id interdum. Hendrerit dolor magna eget est. Faucibus a pellentesque sit amet porttitor eget dolor. Purus sit amet luctus venenatis lectus magna. Turpis nunc eget lorem dolor sed. Sit amet mattis vulputate enim nulla aliquet. Diam sollicitudin tempor id eu nisl nunc. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi.'}
                </article>

                {/* Right sidebar */}
                <nav className='container__right'>
                    {' Right sidebar...'}
                </nav>
            </main>
            <footer className='container__footer'>
                {'This is the Footer'}
            </footer>
        </div>
    </>
  )
}

export default HolyGrailLayout