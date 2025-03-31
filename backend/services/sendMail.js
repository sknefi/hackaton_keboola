// Endpoint pre odosielanie e-mailu
app.post('/send-email', async (req, res) => {
	// Očakávame, že telo požiadavky obsahuje: subject, text a employees (pole e-mailov)
	const { subject, text, employees } = req.body;
  
	if (!subject || !text || !employees || !Array.isArray(employees)) {
	  return res.status(400).json({ success: false, message: 'Nedefinované potrebné parametre.' });
	}
  
	// Vytvorenie transportéra pre službu Gmail s použitím poskytnutých prihlasovacích údajov
	let transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
		user: 'jakub@temponisiai.tech',
		pass: '#^tBwir1'
	  }
	});
  
	// Zostavenie e-mailu – viacerí príjemcov sú spojený reťazcom oddeleným čiarkami
	let mailOptions = {
	  from: 'jakub@temponisiai.tech',
	  to: employees.join(', '),
	  subject: subject,
	  text: text
	};
  
	try {
	  let info = await transporter.sendMail(mailOptions);
	  console.log('Email sent:', info.messageId);
	  res.json({ success: true, messageId: info.messageId });
	} catch (error) {
	  console.error('Error sending email:', error);
	  res.status(500).json({ success: false, error: error.toString() });
	}
  });