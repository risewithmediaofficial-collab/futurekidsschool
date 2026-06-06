import SendIcon from "@mui/icons-material/Send";

function ContactForm() {
  return (
    <div className="section-card rounded-[2rem] p-6 md:p-8">
      <div className="mb-6">
        <p className="font-display text-3xl font-extrabold text-black">
          Send an Enquiry
        </p>
        <p className="mt-2 text-sm leading-7 text-black/65">
          Share your child&apos;s age, your preferred visit timing, and any
          questions. We can connect this to a real form handler later.
        </p>
      </div>

      <form className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-black">Parent Name</span>
          <input
            type="text"
            placeholder="Enter parent name"
            className="w-full rounded-[1.35rem] border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[#d91f26] focus:ring-4 focus:ring-red-100"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-black">Phone Number</span>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="w-full rounded-[1.35rem] border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[#d91f26] focus:ring-4 focus:ring-red-100"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-black">Email</span>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full rounded-[1.35rem] border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[#d91f26] focus:ring-4 focus:ring-red-100"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-black">Message</span>
          <textarea
            rows="5"
            placeholder="Tell us about your enquiry"
            className="w-full rounded-[1.35rem] border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[#d91f26] focus:ring-4 focus:ring-red-100"
          />
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d91f26] px-6 py-3 font-black text-white transition hover:bg-black"
        >
          Send Message
          <SendIcon fontSize="small" />
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
