import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import photoUrl from '../images/paul.png';

export default function Info() {

  return (
    <div className="info">
      <img src={photoUrl} className="info--photo" alt="Me" />
      <h1 className="info--name">Paul Riddell</h1>
      <h3 className="info--role">Senior Software Engineer</h3>
      <h4 className="info--website"></h4>
      <div className="info-buttons-container">
        <Button sx={{ ml: 6, textTransform: 'capitalize' }}
          startIcon={<MailIcon />}
          className="info--email--btn"
          onClick={() => window.location = 'mailto:paul_riddell@yahoo.co.uk'}
          variant="contained">Email</Button>
        <Button sx={{ ml: 6, textTransform: 'capitalize' }}
          startIcon={<LinkedInIcon />}
          className="info--linkedin--btn"
          onClick={() => window.open('https://www.linkedin.com/in/paulriddell', '_blank')}
          variant="contained">LinkedIn</Button>
      </div>
    </div>
  )
}
