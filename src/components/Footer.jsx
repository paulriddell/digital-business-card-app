import IconButton from '@mui/material/IconButton';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GithubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <div className="footer">
      <IconButton>
        <XIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <FacebookIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <InstagramIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={() => window.open('https://github.com/paulriddell', '_blank')}>
        <GithubIcon fontSize="large" />
      </IconButton>
    </div>
  )
}
