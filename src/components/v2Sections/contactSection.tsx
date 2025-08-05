// components/EnquiryForm.tsx
export default function EnquiryForm() {
  return (
    <section className="flex flex-col md:flex-row gap-2">
      {/* Left: Form */}
      <div className="flex-1  flex flex-col justify-center w-[50%]">
        <h1 className="text-4xl font-semibold mb-10">Enquire Now</h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Full Name*"
            required
            className="p-4 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Company Name (optional)"
            className="p-4 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email*"
            required
            className="p-4 border border-gray-300 rounded-md col-span-1 md:col-span-2"
          />
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Code"
              className="w-20 p-4 border border-gray-300 rounded-md"
            />
            <input
              type="tel"
              placeholder="999 9999 999"
              className="flex-1 p-4 border border-gray-300 rounded-md"
            />
          </div>
          <textarea
            placeholder="Describe your query here (optional)"
            className="p-4 border border-gray-300 rounded-md col-span-1 md:col-span-2 min-h-[100px]"
          />
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-md mt-2 w-fit"
          >
            Send Enquiry
          </button>
        </form>
      </div>

      {/* Right: Image */}
      <div
        className="flex-1 bg-cover bg-center w-[50%]"
        style={{ backgroundImage: `url('/images/newimages/spoon1.svg')` }}
      >
        {/* Optional: Add alt content or leave empty */}
      </div>
    </section>
  );
}
