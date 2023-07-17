
import './AboutPage.css'

export default function AboutPage() {
    return (
        <div id='about-section'>
            <h1>About </h1>
            <p id='website-name'><img id='logo-img' alt='' src="https://i.pinimg.com/564x/a9/6f/4f/a96f4ff523ceb1ac12bbe6ea9378a866.jpg" />Common Interests</p>


            <div className='about-wrapper'>
                <div className='me-div'>
                    <img src='https://avatars.githubusercontent.com/u/53248578?v=4' />
                </div>
                <div className="about-word-section">
                    <p>Hi, my name is Carmen Lee and thank you for visiting my site! This site is a clone of Pinterest with a food theme in mind. It was built using the following: </p>
                    <div className='center-logo-names'>
                        <div className='name-logo'>


                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" className='logo-images' />

                            <span>React/Redux</span>
                        </div>
                        <div className='name-logo'>



                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" className='logo-images' />

                            <span>Flask-SQLAlchemy</span>
                        </div>
                        <div className='name-logo'>

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className='logo-images' />

                            <span>Javascript</span>
                        </div>
                        <div className='name-logo'>

                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" className='logo-images' />

                            <span>Python</span>
                        </div>
                    </div>
                    <p>If you'd like to contact me, or see what other projects I'm working on, check out my LinkedIn and Github below!</p>
                    <div className='my-links-section'>
                        <a href="https://github.com/lee2278">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/carmen-lee-52061690/">
                            <i class="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
