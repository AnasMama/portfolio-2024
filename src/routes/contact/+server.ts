import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import Mailjet from 'node-mailjet';
import {
	MJ_APIKEY_PRIVATE,
	MJ_APIKEY_PUBLIC,
	MJ_SENDER_EMAIL,
	RECIPIENT_EMAIL
} from '$env/static/private';

const mailjet = Mailjet.apiConnect(
	MJ_APIKEY_PUBLIC || 'your-api-key',
	MJ_APIKEY_PRIVATE || 'your-api-secret'
);

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, email, message, honeypot } = await request.json();

		if (honeypot) {
			console.log('Bot detected, submission blocked.');
			return json({ success: false, message: 'Bot detected' }, { status: 400 });
		}

		const emailData = {
			Messages: [
				{
					From: {
						Email: MJ_SENDER_EMAIL,
						Name: 'Portfolio Contact Form'
					},
					To: [
						{
							Email: RECIPIENT_EMAIL,
							Name: 'Destinataire'
						}
					],
					Subject: `Nouveau message de ${name} via le formulaire de contact`,
					TextPart: `Message de ${name} (${email}):\n\n${message}`,
					HTMLPart: `<h3>Nouveau message de ${name}</h3><p>Email: ${email}</p><p>Message: ${message}</p>`
				}
			]
		};

		const response = (await mailjet.post('send', { version: 'v3.1' }).request(emailData)) as {
			body: { Messages: { Status: string }[] };
		};

		if (response.body.Messages[0].Status === 'success') {
			return json({ success: true, message: 'Email sent successfully' });
		} else {
			throw new Error('Email sending failed');
		}
	} catch (error) {
		console.error('Error sending email:', error);
		return json({ success: false, message: 'Failed to send email' }, { status: 500 });
	}
};
