'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    text: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      fetch('/api/defaults')
        .then(res => res.json())
        .then(data => setFormData({
          to: data.to || '',
          subject: data.subject || '',
          text: data.text || ''
        }));
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setMessage('Email sent successfully!');
        setFormData({ to: '', subject: '', text: '' });
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to send email');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred while sending the email');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-3xl min-w-[500px] bg-white rounded-lg shadow-lg p-8 mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Mailgun Test</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-gray-700">To:</label>
            <input
              type="email"
              id="to"
              name="to"
              value={formData.to}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
              placeholder="recipient@example.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
              placeholder="Email subject"
            />
          </div>

          <div>
            <label htmlFor="text" className="block text-sm font-medium text-gray-700">Message:</label>
            <textarea
              id="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full rounded border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2"
              placeholder="Your message here"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          >
            {status === 'loading' ? 'Sending...' : 'Send Email'}
          </button>
        </form>

        {message && (
          <div className={`mt-4 p-4 rounded text-center ${
            status === 'success' ? 'bg-green-100 text-green-700' : 
            status === 'error' ? 'bg-red-100 text-red-700' : ''
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  );
} 