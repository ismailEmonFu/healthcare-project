import React from 'react';
import './AdmissionGuide.css';

const AdmissionGuide = () => {
    return (
        <>
            <div className="admissionGuide">
                <h2>Welcome To Good Health Hospital</h2>
                <small>Your doctor or the clinic staff will have made the necessary reservations for your admission and guided you to the Business Office to complete your pre-admission registration and undergo financial counselling so that you understand how the payment process works and what you can expect to pay.You will be contacted the day before your admission date and advised of the details of the room you have been allocated.</small>
                <h2>Admission Time</h2>
                <small>On the day of your admission, you may arrive at the hospital 2 hours before your procedure time.However, if your doctor has informed you that you will need blood on standby for surgery, you must check into the hospital before 1 pm, one day before your surgery date, or on Saturday before 11am if your surgery has been scheduled for a Monday, for blood grouping and cross-matching.</small>
                <h2>Where To Go</h2>
                <small>When you arrive at the hospital, proceed directly to the room allocated to you. Once there, one of our nurses will process your check-in.If you are unsure of where to go, the Concierge at the main lobby will be pleased to assist you.</small>
                <h2>What To Bring</h2>
                <small>Your nurse will need the following things from you to complete your admission.
                    Your doctor’s referral letter
                    Identity card/passport/birth certificate/FIN card
                    Any medical benefits card or letter of guarantee from your insurance company/employer (only applicable for companies that have credit arrangements with the hospital)
                    Basic toiletries, towels and robes are available in your room. You will need to bring other personal toiletries eg. toothbrush and shaving kit.</small>
            </div>
        </>
    );
};

export default AdmissionGuide;