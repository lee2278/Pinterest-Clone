import "./ShowSplashPage.css"

export default function ShowSplashPage() {

    return (
        <div className='splash-page-container'>
            <div className='center-container'>
                <div className='main-word-section'>
                    <p className='page-words-top'>Get your next</p>
                    <span className='page-words-bottom'>weeknight dinner idea</span>
                    <span className='dot dot-1'>.</span>
                    <span className='dot dot-2'>.</span>
                    <span className='dot dot-3'>.</span>
                </div>



            </div>

            <div className='pics-container'>
                <img className='pics pic-1' src='https://capstone-pin.s3.us-west-1.amazonaws.com/a1dffbe20ebb424a863e61a349e8bc46.jpg' alt='' />
                <img className='pics pic-2' src='https://capstone-pin.s3.us-west-1.amazonaws.com/d568910d03de49a9b13a538b4ef8ca38.jpg' alt='' />
                <img className='pics pic-3' src='https://capstone-pin.s3.us-west-1.amazonaws.com/dee98bb5b7624ae8be9dadf732b729b9.jpg' alt='' />
                <img className='pics pic-4' src='https://capstone-pin.s3.us-west-1.amazonaws.com/cda29a4fba344c2ba0b34da44004a0aa.jpg' alt='' />
                <img className='pics pic-5' src='https://capstone-pin.s3.us-west-1.amazonaws.com/078c0183d45743deb71140129a2f1bc8.jpg' alt='' />

            </div>

            <div className='splash-page-footer'>
                <div className='github-linkedin-links'>
                    <a href="https://www.linkedin.com/in/carmen-lee-52061690/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/lee2278" target="_blank">
                        <i className="fa-brands fa-github" ></i>
                    </a>
                    <p>Site created by Carmen Lee </p>
                </div>

            </div>

        </div>


    )
}
