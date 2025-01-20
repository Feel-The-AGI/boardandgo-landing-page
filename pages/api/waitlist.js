import dbConnect from '../../lib/dbConnect';
import WaitlistEntry from '../../models/WaitlistEntry';
import { sendWaitlistNotification } from '../../lib/emailService';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    const { email} = req.body;
    
    // Get IP address from request
    // const ipAddress = req.headers['x-forwarded-for'] ||
    //                  req.connection.remoteAddress;
    const ipAddress = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.connection.remoteAddress;


    // Create new waitlist entry
    const entry = await WaitlistEntry.create({
      email,
    });

    // Send email notification
   try {
  await sendWaitlistNotification(entry);
} catch (emailError) {
  console.error('Email notification failed:', emailError.message);
}

    res.status(201).json({ success: true, data: entry });
    
  } catch (error) {
    if (error.code === 11000) { // Duplicate email error
      return res.status(400).json({ 
        success: false, 
        message: 'This email is already on the waitlist' 
      });
    }
    res.status(500).json({ success: false, message: error.message });
  }
}
