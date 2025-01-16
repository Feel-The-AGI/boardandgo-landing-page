import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'contact.boardandgo@gmail.com',
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

export async function sendWaitlistNotification(entry) {
  const { email, location } = entry;
  
  const mailOptions = {
    from: 'contact.boardandgo@gmail.com',
    to: 'contact.boardandgo@gmail.com',
    subject: '🎉 New Waitlist Signup!',
    html: `
      <h2>New User Joined the Waitlist!</h2>
      <p><strong>Email:</strong> ${email}</p>
      <h3>Location Details:</h3>
      <ul>
        <li><strong>Continent:</strong> ${location.continent || 'N/A'}</li>
        <li><strong>Country:</strong> ${location.country || 'N/A'}</li>
        <li><strong>Region:</strong> ${location.region || 'N/A'}</li>
        <li><strong>City:</strong> ${location.city || 'N/A'}</li>
        <li><strong>Coordinates:</strong> ${location.latitude}, ${location.longitude}</li>
      </ul>
      <p><strong>Signup Time:</strong> ${new Date().toLocaleString()}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Failed to send email notification:', error);
    return false;
  }
}
