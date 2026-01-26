'use client';

import styles from '../app/contact/contact.module.css';

export default function ContactForm() {
    return (
        <form className={styles.form} onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = {
                name: formData.get('name'),
                company: formData.get('company'),
                email: formData.get('email'),
                message: formData.get('message'),
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
            } catch (error) {
                alert('An error occurred. Please try again later.');
            }
        }}>
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
