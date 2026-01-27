'use client';

import { useState } from 'react';
import styles from './TerritoryModal.module.css';

interface TerritoryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TerritoryModal({ isOpen, onClose }: TerritoryModalProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        website: '',
        location: '',
        county: '',
        industry: '',
        customIndustry: '',
        customCounty: ''
    });

    const [territoryStatus, setTerritoryStatus] = useState<{ message: string; color: string } | null>(null);

    // Centralized logic to check availability based on current form state
    const checkAvailability = (industry: string, county: string) => {
        if (!industry || !county) {
            setTerritoryStatus(null);
            return;
        }

        if (industry === 'Other' || county === 'Other') {
            setTerritoryStatus({
                message: '🌐 CHECKING CUSTOM MARKET AVAILABILITY...',
                color: 'var(--c-grey-mid)'
            });
            return;
        }

        // 1. Check SOLD OUT Territories (User's existing clients)
        if (industry === 'Tree Service' && county === 'Wake County') {
            setTerritoryStatus({
                message: '⛔ TERRITORY SECURED. PARTNER ACTIVE. JOIN WAITLIST.',
                color: '#FF4444' // Red
            });
            return;
        }
        if (industry === 'Fence Installation' && (county === 'Lee County' || county === 'Cumberland County')) {
            setTerritoryStatus({
                message: '⛔ TERRITORY SECURED. PARTNER ACTIVE. JOIN WAITLIST.',
                color: '#FF4444' // Red
            });
            return;
        }
        if (industry === 'Custom Home Builder' && county === 'Moore County') {
            setTerritoryStatus({
                message: '⛔ TERRITORY SECURED. PARTNER ACTIVE. JOIN WAITLIST.',
                color: '#FF4444' // Red
            });
            return;
        }

        // 2. Check Tiered Availability (General Logic)
        if (county === 'Wake' || county === 'Mecklenburg') {
            setTerritoryStatus({
                message: '⚠️ HIGH DEMAND. LIMITED AVAILABILITY. VERIFICATION REQUIRED.',
                color: '#FFD700' // Gold/Yellow
            });
        } else if (county === 'Moore' || county === 'Lee') {
            setTerritoryStatus({
                message: '✅ TERRITORY OPEN. SECURE IMMEDIATELY.',
                color: 'var(--c-green-acid)'
            });
        } else if (county === 'Chatham' || county === 'Harnett') {
            setTerritoryStatus({
                message: '🚀 EMERGING MARKET. PRIME OPPORTUNITY.',
                color: '#00BFFF' // Deep Sky Blue
            });
        } else {
            setTerritoryStatus({
                message: '✅ CHECKING REAL-TIME AVAILABILITY...',
                color: 'var(--c-grey-mid)'
            });
        }
    };

    const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndustry = e.target.value;
        setFormData(prev => ({ ...prev, industry: selectedIndustry }));
        checkAvailability(selectedIndustry, formData.county);
    };

    const handleCountyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCounty = e.target.value;
        setFormData(prev => ({ ...prev, county: selectedCounty }));
        checkAvailability(formData.industry, selectedCounty);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const finalIndustry = formData.industry === 'Other' ? formData.customIndustry : formData.industry;
        const finalCounty = formData.county === 'Other' ? formData.customCounty : formData.county;

        // Visual feedback immediately
        if (territoryStatus?.message.includes('TERRITORY SECURED')) {
            alert(`Notice: ${finalCounty} is currently secured for ${finalIndustry}. You have been added to the priority waitlist.`);
            onClose();
            // Still send data for waitlist
        }

        const data = {
            ...formData,
            industry: finalIndustry,
            territory: finalCounty, // Mapping county to territory for email clarity
            message: `Territory Check: ${territoryStatus?.message || 'Check Request'}`
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                if (!territoryStatus?.message.includes('TERRITORY SECURED')) {
                    alert(`Request received for ${finalIndustry} in ${finalCounty}. We are verifying availability.`);
                    onClose();
                }
            } else {
                alert('Failed to send request. Please try again.');
            }
        } catch (_error) {
            alert('An error occurred. Please try again later.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>✕</button>

                <h2 className={styles.title}>SECURE YOUR TERRITORY</h2>
                <p className={styles.subtitle}>
                    We only partner with one business per industry, per territory. Check availability now.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            className={styles.input}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Business Name</label>
                        <input
                            type="text"
                            name="company"
                            className={styles.input}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.gridRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Industry</label>
                            <select
                                name="industry"
                                className={styles.input}
                                required
                                onChange={handleIndustryChange}
                                aria-label="Select Industry"
                            >
                                <option value="">Select Industry...</option>
                                <option value="Tree Service">Tree Service</option>
                                <option value="Fence Installation">Fence Installation</option>
                                <option value="Custom Home Builder">Custom Home Builder</option>
                                <option value="Roofing">Roofing & Storm Restoration</option>
                                <option value="HVAC">HVAC Services</option>
                                <option value="Epoxy Flooring">Epoxy Flooring</option>
                                <option value="Spray Foam">Spray Foam Insulation</option>
                                <option value="Land Clearing">Land Clearing & Excavation</option>
                                <option value="Mold Remediation">Mold Remediation</option>
                                <option value="Other">Other (Specify)</option>
                            </select>
                            {formData.industry === 'Other' && (
                                <input
                                    type="text"
                                    name="customIndustry"
                                    placeholder="Enter Industry..."
                                    className={`${styles.input} ${styles.customInput}`}
                                    required
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Target Territory</label>
                            <select
                                name="county"
                                className={styles.input}
                                required
                                onChange={handleCountyChange}
                                aria-label="Select County"
                            >
                                <option value="">Select County...</option>
                                <option value="Alamance County">Alamance County</option>
                                <option value="Alexander County">Alexander County</option>
                                <option value="Alleghany County">Alleghany County</option>
                                <option value="Anson County">Anson County</option>
                                <option value="Ashe County">Ashe County</option>
                                <option value="Avery County">Avery County</option>
                                <option value="Beaufort County">Beaufort County</option>
                                <option value="Bertie County">Bertie County</option>
                                <option value="Bladen County">Bladen County</option>
                                <option value="Brunswick County">Brunswick County</option>
                                <option value="Buncombe County">Buncombe County</option>
                                <option value="Burke County">Burke County</option>
                                <option value="Cabarrus County">Cabarrus County</option>
                                <option value="Caldwell County">Caldwell County</option>
                                <option value="Camden County">Camden County</option>
                                <option value="Carteret County">Carteret County</option>
                                <option value="Caswell County">Caswell County</option>
                                <option value="Catawba County">Catawba County</option>
                                <option value="Chatham County">Chatham County</option>
                                <option value="Cherokee County">Cherokee County</option>
                                <option value="Chowan County">Chowan County</option>
                                <option value="Clay County">Clay County</option>
                                <option value="Cleveland County">Cleveland County</option>
                                <option value="Columbus County">Columbus County</option>
                                <option value="Craven County">Craven County</option>
                                <option value="Cumberland County">Cumberland County</option>
                                <option value="Currituck County">Currituck County</option>
                                <option value="Dare County">Dare County</option>
                                <option value="Davidson County">Davidson County</option>
                                <option value="Davie County">Davie County</option>
                                <option value="Duplin County">Duplin County</option>
                                <option value="Durham County">Durham County</option>
                                <option value="Edgecombe County">Edgecombe County</option>
                                <option value="Forsyth County">Forsyth County</option>
                                <option value="Franklin County">Franklin County</option>
                                <option value="Gaston County">Gaston County</option>
                                <option value="Gates County">Gates County</option>
                                <option value="Graham County">Graham County</option>
                                <option value="Granville County">Granville County</option>
                                <option value="Greene County">Greene County</option>
                                <option value="Guilford County">Guilford County</option>
                                <option value="Halifax County">Halifax County</option>
                                <option value="Harnett County">Harnett County</option>
                                <option value="Haywood County">Haywood County</option>
                                <option value="Henderson County">Henderson County</option>
                                <option value="Hertford County">Hertford County</option>
                                <option value="Hoke County">Hoke County</option>
                                <option value="Hyde County">Hyde County</option>
                                <option value="Iredell County">Iredell County</option>
                                <option value="Jackson County">Jackson County</option>
                                <option value="Johnston County">Johnston County</option>
                                <option value="Jones County">Jones County</option>
                                <option value="Lee County">Lee County</option>
                                <option value="Lenoir County">Lenoir County</option>
                                <option value="Lincoln County">Lincoln County</option>
                                <option value="Macon County">Macon County</option>
                                <option value="Madison County">Madison County</option>
                                <option value="Martin County">Martin County</option>
                                <option value="McDowell County">McDowell County</option>
                                <option value="Mecklenburg County">Mecklenburg County</option>
                                <option value="Mitchell County">Mitchell County</option>
                                <option value="Montgomery County">Montgomery County</option>
                                <option value="Moore County">Moore County</option>
                                <option value="Nash County">Nash County</option>
                                <option value="New Hanover County">New Hanover County</option>
                                <option value="Northampton County">Northampton County</option>
                                <option value="Onslow County">Onslow County</option>
                                <option value="Orange County">Orange County</option>
                                <option value="Pamlico County">Pamlico County</option>
                                <option value="Pasquotank County">Pasquotank County</option>
                                <option value="Pender County">Pender County</option>
                                <option value="Perquimans County">Perquimans County</option>
                                <option value="Person County">Person County</option>
                                <option value="Pitt County">Pitt County</option>
                                <option value="Polk County">Polk County</option>
                                <option value="Randolph County">Randolph County</option>
                                <option value="Richmond County">Richmond County</option>
                                <option value="Robeson County">Robeson County</option>
                                <option value="Rockingham County">Rockingham County</option>
                                <option value="Rowan County">Rowan County</option>
                                <option value="Rutherford County">Rutherford County</option>
                                <option value="Sampson County">Sampson County</option>
                                <option value="Scotland County">Scotland County</option>
                                <option value="Stanly County">Stanly County</option>
                                <option value="Stokes County">Stokes County</option>
                                <option value="Surry County">Surry County</option>
                                <option value="Swain County">Swain County</option>
                                <option value="Transylvania County">Transylvania County</option>
                                <option value="Tyrrell County">Tyrrell County</option>
                                <option value="Union County">Union County</option>
                                <option value="Vance County">Vance County</option>
                                <option value="Wake County">Wake County</option>
                                <option value="Warren County">Warren County</option>
                                <option value="Washington County">Washington County</option>
                                <option value="Watauga County">Watauga County</option>
                                <option value="Wayne County">Wayne County</option>
                                <option value="Wilkes County">Wilkes County</option>
                                <option value="Wilson County">Wilson County</option>
                                <option value="Yadkin County">Yadkin County</option>
                                <option value="Yancey County">Yancey County</option>
                                <option value="Other">Other / Out of State</option>
                            </select>
                            {formData.county === 'Other' && (
                                <input
                                    type="text"
                                    name="customCounty"
                                    placeholder="Enter City/State..."
                                    className={`${styles.input} ${styles.customInput}`}
                                    required
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                    </div>

                    {territoryStatus && (
                        <div
                            className={styles.statusBox}
                            style={{
                                borderColor: territoryStatus.color,
                                color: territoryStatus.color
                            }}
                        >
                            {territoryStatus.message}
                        </div>
                    )}

                    <div className={styles.formGroup}>
                        <label className={styles.label}>Website URL <span className={styles.labelOptional}>(Optional)</span></label>
                        <input
                            type="text"
                            name="website"
                            className={styles.input}
                            placeholder="www.yourbusiness.com"
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.gridRow}>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className={styles.input}
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Specific City (HQ)</label>
                            <input
                                type="text"
                                name="location"
                                className={styles.input}
                                placeholder="e.g. Apex"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <button type="submit" className={styles.submitButton}>CHECK AVAILABILITY</button>
                </form>
            </div>
        </div>
    );
}
