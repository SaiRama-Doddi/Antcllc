import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-black/40 border border-yellow-500/20 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>

      <div className="space-y-6 text-gray-400">
        <div className="flex gap-4">
          <MapPin className="text-yellow-500" />
          <p>Al Natlah Trading & Contracting LLC<br />Oman</p>
        </div>

        <div className="flex gap-4">
          <Phone className="text-yellow-500" />
          <p>24813345 / 24812856</p>
        </div>

        <div className="flex gap-4">
          <Mail className="text-yellow-500" />
          <p>info@antcllc.com</p>
        </div>
      </div>
    </div>
  );
}
