// src/sections/DocumentsSection.tsx

const DocumentsSection = () => {
  return (
    <section
      id="documents"
      className="bg-gradient-to-r from-[#7B0A02] to-[#101010] py-12 px-4 flex flex-col items-center w-full"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Policies & Terms
        </h2>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          {/* Кнопка 1 – AML/CTF Policy */}
          <a
            href="/aml-ctf-policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white text-center py-3 md:py-3.5 rounded-md font-semibold text-gray-900 hover:bg-gray-100 transition shadow-md"
          >
            AML / CTF Policy
          </a>

          {/* Кнопка 2 – Terms & Conditions */}
          <a
            href="/terms-and-conditions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white text-center py-3 md:py-3.5 rounded-md font-semibold text-gray-900 hover:bg-gray-100 transition shadow-md"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </section>
  );
};

export default DocumentsSection;
