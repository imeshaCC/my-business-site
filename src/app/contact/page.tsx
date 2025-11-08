export default function ContactPage() {
  return (
    <div className="mx-auto mt-10 max-w-2xl">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2 text-black/70">
        Send us a message to schedule a viewing or ask about availability and delivery.
      </p>

      <div className="mt-6 rounded-xl border p-6">
        <div className="space-y-2 text-sm">
          <div>Email: <a href="mailto:info@mybusiness.com" className="text-blue-700 underline">info@mybusiness.com</a></div>
          <div>Phone: <a href="tel:+3541234567" className="text-blue-700 underline">+354 123 4567</a></div>
          <div>Location: Reykjavík, Iceland</div>
        </div>
      </div>

      {/* Map placeholder or embed later */}
    </div>
  );
}