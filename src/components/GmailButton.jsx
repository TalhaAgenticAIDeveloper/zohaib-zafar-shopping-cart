import '../styles/GmailButton.css';

export default function GmailButton() {
  const handleGmailClick = () => {
    const gmailUrl = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=nayabjewellery90@gmail.com&su=Order%20Inquiry&body=Hello,%20I%20would%20like%20to%20place%20an%20order.';
    window.open(gmailUrl, '_blank');
  };

  return (
    <button
      className="gmail-button"
      onClick={handleGmailClick}
      aria-label="Email us"
      title="Email us for orders"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    </button>
  );
}
