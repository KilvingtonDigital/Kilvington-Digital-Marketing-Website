'use client';

import { useState } from 'react';

import styles from '../app/contact/contact.module.css';

export default function ContactForm() {
    const [startTime] = useState(() => Date.now());

    return (
        <form className={styles.form} onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = {
                name: formData.get('name'),
                company: formData.get('company'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                message: formData.get('message'),
                sms_consent: formData.get('sms_consent') === 'on',
                // Anti-Spam Fields
                role_title_check: formData.get('role_title_check'),
                submission_time: Date.now() - startTime
            };

            try {
                const response = await fetch('/api/send', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    alert('Inquiry Sent Successfully!');
                    (e.target as HTMLFormElement).reset();
                } else {
                    alert('Failed to send inquiry. Please try again.');
                }
            } catch {
                alert('An error occurred. Please try again later.');
            }
        }}>
            {/* Honeypot Field - Hidden from humans */}
            <div className={styles.honeyPot} aria-hidden="true">
                <input
                    type="text"
                    name="role_title_check"
                    tabIndex={-1}
                    autoComplete="off"
                    placeholder="Job Title"
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Name</label>
                <input name="name" type="text" className={styles.input} required placeholder="Enter your name" />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Business Name</label>
                <input name="company" type="text" className={styles.input} required placeholder="Your Brand" />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Email Address</label>
                <input name="email" type="email" className={styles.input} required placeholder="you@company.com" />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number</label>
                <input name="phone" type="tel" className={styles.input} required placeholder="(555) 555-5555" />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Message / Territory Request</label>
                <textarea name="message" className={styles.textarea} required placeholder="I'm interested in securing the [Industry] market in [City]..."></textarea>
            </div>

            <div className={styles.formGroup} style={{ flexDirection: 'row', alignItems: 'flex-start', gap: '10px', marginTop: '10px', marginBottom: '10px' }}>
                <input type="checkbox" name="sms_consent" id="sms_consent_contact" required style={{ marginTop: '5px', transform: 'scale(1.2)' }} />
                <label htmlFor="sms_consent_contact" className={styles.label} style={{ fontSize: '0.85rem', lineHeight: '1.4', fontWeight: 'normal', textTransform: 'none', cursor: 'pointer' }}>
                    I consent to receive text messages and emails from Kilvington Digital regarding my inquiry. I understand I can reply STOP to opt out of texts at any time. Message and data rates may apply.
                </label>
            </div>

            <button type="submit" className={styles.submitBtn}>SEND INQUIRY</button>
        </form>
    );
}
