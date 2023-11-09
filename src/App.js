import './index.css';

const faqs = [{
  "title": "How do I sign in to my account on a website?",
  "text": "To sign in to your account:\n1. Visit the website's login page.\n2. Enter your username or email and password.\n3. Click the 'Sign In' or 'Log In' button.\n4. You'll be redirected to your account dashboard if the information is correct."
},
{
  "title": "What should I do if I forgot my password?",
  "text": "If you forget your password:\n1. Click on the 'Forgot Password' or 'Reset Password' link on the login page.\n2. Follow the instructions to reset your password, which usually involves receiving a reset link via email.\n3. Set a new password."
},
{
  "title": "How can I change my password on the website?",
  "text": "To change your password:\n1. Log in to your account.\n2. Go to your account settings or profile page.\n3. Look for the 'Change Password' or 'Password Settings' option.\n4. Enter your current password and your new desired password.\n5. Save or update your password."
},
{
  "title": "How do I delete my account on a website?",
  "text": "To delete your account:\n1. Log in to your account.\n2. Navigate to your account settings or profile page.\n3. Look for the 'Delete Account' or 'Close Account' option.\n4. Follow the instructions to confirm and delete your account. Be aware that this is usually irreversible."
},
{
  "title": "What should I do if I can't sign in or encounter login issues?",
  "text": "If you can't sign in or face login issues:\n1. Double-check your username/email and password for accuracy.\n2. Ensure that the 'Caps Lock' key is off.\n3. Try a password reset if you've forgotten your password.\n4. Contact customer support for further assistance."
},
{
  "title": "Is it safe to store my personal information on the website?",
  "text": "Websites often use encryption and security measures to protect user data. However, it's essential to research the website's privacy and security policies, use strong and unique passwords, and be cautious about sharing sensitive information."
},
{
  "title": "How can I secure my account against unauthorized access?",
  "text": "To secure your account:\n- Use strong, unique passwords for each site.\n- Enable two-factor authentication (2FA) if available.\n- Be cautious about phishing emails and scams.\n- Regularly update your password.\n- Monitor your account activity for any suspicious behavior."
}
];

export default function App() {
  return (
    <Accordian />
  );
}

function Accordian(){
  return(
    <div>
      Frequently Asked Questions?
    </div>
  );
}