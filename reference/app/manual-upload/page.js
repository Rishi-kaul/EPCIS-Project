"use client";
import { useState } from "react";

export default function DocumentUploadPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [file, setFile] = useState(null);
  const [documentNumber, setDocumentNumber] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  // Document categories and their subcategories
  const documentCategories = {
    "Educational Documents": {
      subcategories: [
        "High School Marksheet",
        "High School Certificate",
        "Intermediate Marksheet",
        "Intermediate Certificate",
        "Bachelor's Degree",
        "Master's Degree",
        "Other Educational Certificates"
      ],
      requiresDocNumber: true,
      requiresExpiry: false
    },
    "Identity Documents": {
      subcategories: [
        "Passport",
        "Driver's License",
        "National ID Card",
        "Voter ID",
        "SSN Card"
      ],
      requiresDocNumber: true,
      requiresExpiry: true
    },
    "Professional Certificates": {
      subcategories: [
        "Technical Certifications",
        "Professional License",
        "Work Experience Certificate",
        "Training Certificates"
      ],
      requiresDocNumber: true,
      requiresExpiry: true
    },
    "Verification Documents": {
      subcategories: [
        "Address Proof",
        "Bank Statements",
        "Police Clearance",
        "Medical Certificates"
      ],
      requiresDocNumber: false,
      requiresExpiry: true
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate upload
    console.log({
      category: selectedCategory,
      subCategory: selectedSubCategory,
      documentNumber,
      issueDate,
      expiryDate,
      file
    });
    alert("Document submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Document Upload</h1>
          <p className="mt-2 text-gray-400">Please select the appropriate document category and fill in the required details</p>
        </div>

        <div className="bg-gray-800 shadow-xl rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Document Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Document Category *
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedSubCategory("");
                }}
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              >
                <option value="">Select Category</option>
                {Object.keys(documentCategories).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Subcategory Selection */}
            {selectedCategory && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Document Type *
                </label>
                <select
                  value={selectedSubCategory}
                  onChange={(e) => setSelectedSubCategory(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Document Type</option>
                  {documentCategories[selectedCategory].subcategories.map((sub) => (
                    <option key={sub} value={sub}>
                      {sub}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Document Details */}
            {selectedCategory && selectedSubCategory && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Document Number */}
                {documentCategories[selectedCategory].requiresDocNumber && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Document Number *
                    </label>
                    <input
                      type="text"
                      value={documentNumber}
                      onChange={(e) => setDocumentNumber(e.target.value)}
                      required
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Enter document number"
                    />
                  </div>
                )}

                {/* Issue Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Issue Date *
                  </label>
                  <input
                    type="date"
                    value={issueDate}
                    onChange={(e) => setIssueDate(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Expiry Date */}
                {documentCategories[selectedCategory].requiresExpiry && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="date"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    />
                  </div>
                )}
              </div>
            )}

            {/* File Upload */}
            {selectedSubCategory && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Upload Document *
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-600 border-dashed rounded-lg">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-400">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium text-blue-500 hover:text-blue-400"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={(e) => setFile(e.target.files[0])}
                          required
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-400">
                      PDF, PNG, JPG up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button */}
            {selectedSubCategory && (
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
                >
                  Upload Document
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>Need help? Contact support at support@example.com</p>
        </div>
      </div>
    </div>
  );
}
