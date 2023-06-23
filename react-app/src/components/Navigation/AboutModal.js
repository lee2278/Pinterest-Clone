
import { useModal } from "../../context/Modal"
import './AboutModal.css'

export default function AboutModal() {

    return (
        <div id='about-section'>
            <h1>About <span id='website-name'><img id='logo-img' src="https://i.pinimg.com/564x/a9/6f/4f/a96f4ff523ceb1ac12bbe6ea9378a866.jpg" />Common Interests</span></h1>
            <div className="about-word-section">
                <p>Hi, my name is Carmen Lee and thank you for visiting my site! This site is a clone of Pinterest with a food theme in mind. It was built using the following: </p>
                <div className='center-logo-names'>
                    <div className='name-logo'>
                        <img className='logo-images' src='https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg' />
                        <span>React/Redux</span>
                    </div>
                    <div className='name-logo'>
                        <img className='logo-images' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-OGXhTO3KRY3AJsWE2Ot8vwlIeG7KOs2hA&usqp=CAU' />
                        <span>Flask-SQLAlchemy</span>
                    </div>
                    <div className='name-logo'>
                        <img className='logo-images' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhWvVU2cwJaO3FvkBsBzDOvEs0oxbOSFsXw&usqp=CAU' />
                        <span>Javascript</span>
                    </div>
                    <div className='name-logo'>
                        <img className='logo-images' src='https://i.pinimg.com/originals/a8/53/14/a8531424a5fac660e4261f72ca817141.png' />
                        <span>Python</span>
                    </div>
                </div>
                <p>If you'd like to contact me, or see what other projects I'm working on, check out my LinkedIn and Github below!</p>
            </div>
            <div className='my-links-section'>
                <a href="https://github.com/lee2278">
                    <img id='github-logo' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
                </a>
                <a href="https://www.linkedin.com/in/carmen-lee-52061690/">
                    <img id='linkedin-logo' src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" />
                </a>
            </div>
        </div>

    )


}
