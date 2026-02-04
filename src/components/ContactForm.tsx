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
                message: formData.get('message'),
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
                <label className={styles.label}>Message / Territory Request</label>
                <textarea name="message" className={styles.textarea} required placeholder="I'm interested in securing the [Industry] market in [City]..."></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>SEND INQUIRY</button>
        </form>
    );
}
