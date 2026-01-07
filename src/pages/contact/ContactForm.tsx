import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>

      <form className="space-y-6">
        <input className="w-full p-3 bg-black/40 border border-yellow-500/20 rounded-lg text-white" placeholder="Your Name" />
        <input className="w-full p-3 bg-black/40 border border-yellow-500/20 rounded-lg text-white" placeholder="Email" />
        <textarea rows={5} className="w-full p-3 bg-black/40 border border-yellow-500/20 rounded-lg text-white" placeholder="Message" />
        <button className="w-full bg-yellow-500 text-black py-4 rounded-lg font-bold flex items-center justify-center">
          <Send className="mr-2" /> Send Message
        </button>
      </form>
    </div>
  );
}
