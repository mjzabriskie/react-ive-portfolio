function Nav({currentSection, setCurrentSection}) {
    return (
        <ul className='d-flex flex-wrap justify-content-center nav'>
            <li className={`nav-item m-3 ${currentSection === 'About' && 'nav-item-active'}`} onClick={() => setCurrentSection('About')}>About</li>
            <li className={`nav-item m-3 ${currentSection === 'Portfolio' && 'nav-item-active'}`} onClick={() => setCurrentSection('Portfolio')}>Portfolio</li>
            <li className={`nav-item m-3 ${currentSection === 'Contact' && 'nav-item-active'}`} onClick={() => setCurrentSection('Contact')}>Contact</li>
            <li className={`nav-item m-3 ${currentSection === 'Resume' && 'nav-item-active'}`} onClick={() => setCurrentSection('Resume')}>Resume</li>
        </ul>
    );
}

export default Nav;