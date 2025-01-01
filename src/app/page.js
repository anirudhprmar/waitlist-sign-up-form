'use client'
import { useState } from "react";

export default function Home() {

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState('')
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Something went wrong');
            }
            setSuccess(true);
            setEmail('');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    
    
    

    return (
        <main className="min-h-screen w-full bg-slate-950">
            {/* Grid background with mask */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            </div>



            {/* Content container */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                <h1 className="text-center text-4xl font-bold text-white mb-6">
                    Join our Waitlist
                </h1>
                <p className="text-center text-gray-300 max-w-2xl mx-auto mb-8">
                    Be the first to experience our innovative new product! Join our waitlist by submitting your email and get instant access as soon as we launch. Don't miss your chance to be among the first to try it out!
                </p>
                
                <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
                    <input 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        type="email" 
                        placeholder="Email" 
                        required
                        className="p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-500"
                    /> 
                     {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button 
                        type="submit"
                        disabled = {loading}
                        className="p-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                    >
                        {loading ? 'Joining...' : 'Join Waitlist'} 
                    </button>
                </form>
            </div>
        </main>
        
    )
}