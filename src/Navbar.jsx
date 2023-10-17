import './App.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <a href={`mailto:line53inc@gmail.com`} className="btn email-btn"><img src="../src/assets/icon_mail.png" className='icon-mail' alt='mail'/>Email</a>
            <a href="/" className="btn in-btn"><img src='../src/assets/in.png' className="icon-in" alt='linkedin'/>LinkedIn</a>
        </div>
    )
}