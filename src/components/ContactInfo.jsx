import './ContactInfo.css'
import phoneIcon from '../assets/phone.png'
import mailIcon from '../assets/mail.png'

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <p>contact:</p>
      <p><img src={phoneIcon} alt="Phone" /> 080-5108-8316</p>
      <p><img src={mailIcon} alt="Email" /> hj.santiago13@gmail.com</p>
    </div>
  )
}
