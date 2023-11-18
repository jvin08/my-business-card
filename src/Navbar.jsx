import './App.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <a href={`mailto:line53inc@gmail.com`} className="btn email-btn"><img src="./icon_mail.png" className='icon-mail' alt='mail'/>Email</a>
            <a href="https://www.linkedin.com/in/jvin08/" className="btn in-btn"><img src='./in.png' className="icon-in" alt='linkedin'/>LinkedIn</a>
        </div>
    )
}
