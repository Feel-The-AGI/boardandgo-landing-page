import { sendWaitlistNotification } from '../../lib/emailService';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const testEntry = {
      email: 'test@example.com',
      location: {
        continent: 'NA',
        country: 'United States',
        region: 'California',
        city: 'San Francisco',
        latitude: 37.7749,
        longitude: -122.4194
      }
    };

    // Test email notification
    const emailSent = await sendWaitlistNotification(testEntry);

    if (emailSent) {
      res.status(200).json({ success: true, message: 'Test email sent successfully!' });
    } else {
      throw new Error('Failed to send test email');
    }
  } catch (error) {
    console.error('Test failed:', error);
    res.status(500).json({ success: false, message: error.message });
  }
}
