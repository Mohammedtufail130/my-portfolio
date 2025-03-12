import React from 'react';
import axios from 'axios';
import { Send } from 'lucide-react';

interface ContactProps {
    formData: { fullname: string; email: string; message: string };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    formValid: boolean;
}

const Contact: React.FC<ContactProps> = ({ formData, handleInputChange, formValid }) => {
    const [status, setStatus] = React.useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Sending...');

        // Your EmailJS service details
        const serviceID = 'service_moqcoqh';
        const templateID = 'template_7pkjx5m';
        const publicKey = 'vgE3m4BpkH1lQEsse';

        // Prepare data for EmailJS
        const data = {
            service_id: serviceID,
            template_id: templateID,
            user_id: publicKey,
            template_params: {
                fullname: formData.fullname,
                from_email: formData.email,
                message: formData.message,
            }
        };

        try {
            const res = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
            console.log('EmailJS response:', res.data);
            setStatus('Message sent successfully!');
            // Optionally, clear the form here:
            // setFormData({ fullname: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('Failed to send message.');
        }
    };

    return (
        <article className="bg-[#1e1e1f] border border-[#333] rounded-[20px] p-4 md:p-8 mb-20">
            <header className="mb-6">
                <h2 className="text-2xl md:text-3xl text-white relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[3px] after:bg-gradient-to-r after:from-[#f5c45a] after:to-[#f5a63a] after:rounded-md">
                    Contact
                </h2>
            </header>

            {/* Embedded Map */}
            <div className="h-[250px] md:h-[380px] rounded-[16px] border border-[#333] overflow-hidden mb-8">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9987268484597!2d77.594562!3d12.971599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168f92b0cc01%3A0x8c4d8ed7d42a78c8!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1681991234567!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(1) invert(1)' }}
                    loading="lazy"
                ></iframe>

            </div>

            {/* Contact Form */}
            <section>
                <h3 className="text-xl md:text-2xl text-white mb-6">Contact Form</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="fullname"
                            placeholder="Full name"
                            required
                            className="bg-transparent text-white border border-[#333] rounded-[14px] p-4 focus:border-[#f5c45a] outline-none"
                            value={formData.fullname}
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            required
                            className="bg-transparent text-white border border-[#333] rounded-[14px] p-4 focus:border-[#f5c45a] outline-none"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="w-full min-h-[120px] max-h-[200px] bg-transparent text-white border border-[#333] rounded-[14px] p-4 focus:border-[#f5c45a] outline-none resize-y"
                        value={formData.message}
                        onChange={handleInputChange}
                    ></textarea>

                    <button
                        type="submit"
                        disabled={!formValid}
                        className={`relative bg-gradient-to-br from-[#404042] to-[#313133] text-[#f5c45a] py-4 px-6 rounded-[14px] flex items-center gap-2 ${!formValid
                            ? 'opacity-70 cursor-not-allowed'
                            : 'hover:bg-gradient-to-br hover:from-[#f5c45a] hover:to-[#f5a63a] hover:text-white'
                            }`}
                    >
                        <Send size={18} />
                        <span>Send Message</span>
                    </button>
                </form>

                {status && (
                    <p className="mt-4 text-center text-white">{status}</p>
                )}
            </section>
        </article>
    );
};

export default Contact;
