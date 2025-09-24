import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Feedback() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rating: 0,
        feedback: "",
        suggestions: "",
        contactBack: false,
        likedPart: "",
        tags: [],
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleRating = (rating) => {
        setFormData({ ...formData, rating });
    };

    const handleTagClick = (tag) => {
        setFormData((prev) => {
            const alreadySelected = prev.tags.includes(tag);
            return {
                ...prev,
                tags: alreadySelected
                    ? prev.tags.filter((t) => t !== tag)
                    : [...prev.tags, tag],
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Feedback Submitted:", formData);
        setSubmitted(true);
    };

    const tagsList = ["UI", "Projects", "Animations", "Dark Mode", "Speed"];

    return (
        <section
            id="feedback"
            className="min-h-screen bg-gray-50 dark:bg-yellow-100 py-20 px-6 flex items-center justify-center transition-colors duration-500"
        >
            <div className="w-full max-w-3xl bg-blue-500   dark:bg-black-900 rounded-2xl shadow-2xl p-10">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-black mb-2">
                    💬 We Value Your Feedback
                </h1>
                <p className="text-center text-gray-900 dark:text-gray-900 mb-8 text-lg sm:text-xl">
                    Your thoughts help me improve and deliver better projects 🚀
                </p>

                {submitted ? (
                    <div className="text-center text-green-600 dark:text-green-400 text-lg font-semibold">
                        ✅ Thank you for your valuable feedback!
                    </div>
                ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300  font-medium">
                                Name<span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="mt-2 w-full p-4 rounded-xl border  dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm hover:shadow-md"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                Email (optional)
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-2 w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm hover:shadow-md"
                            />
                        </div>

                        {/* Rating */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                How would you rate my portfolio?
                            </label>
                            <div className="flex space-x-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        onClick={() => handleRating(star)}
                                        className={`cursor-pointer text-2xl transition-transform transform hover:scale-110 ${formData.rating >= star
                                            ? "text-yellow-400"
                                            : "text-gray-400 dark:text-gray-500"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Feedback */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                Feedback
                            </label>
                            <textarea
                                name="feedback"
                                placeholder="Write your feedback here..."
                                value={formData.feedback}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="mt-2 w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm hover:shadow-md"
                            ></textarea>
                        </div>

                        {/* Suggestions */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                Any suggestions for improvement?
                            </label>
                            <input
                                type="text"
                                name="suggestions"
                                value={formData.suggestions}
                                onChange={handleChange}
                                className="mt-2 w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm hover:shadow-md"
                            />
                        </div>

                        {/* Dropdown */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-medium">
                                Which part did you like the most?
                            </label>
                            <select
                                name="likedPart"
                                value={formData.likedPart}
                                onChange={handleChange}
                                className="mt-2 w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm hover:shadow-md"
                            >
                                <option value="">Select...</option>
                                <option value="design">Design</option>
                                <option value="projects">Projects</option>
                                <option value="skills">Skills</option>
                            </select>
                        </div>

                        {/* Tags */}
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                What features did you like the most?
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {tagsList.map((tag) => (
                                    <button
                                        type="button"
                                        key={tag}
                                        onClick={() => handleTagClick(tag)}
                                        className={`px-4 py-2 rounded-full border transition hover:scale-105 ${formData.tags.includes(tag)
                                            ? "bg-blue-600 text-white border-blue-700 shadow-md"
                                            : "bg-gray-100 dark:bg-gray-700 dark:text-gray-300 border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Checkbox */}
                        <div className="flex items-center mt-2">
                            <input
                                type="checkbox"
                                name="contactBack"
                                checked={formData.contactBack}
                                onChange={handleChange}
                                className="mr-2 w-4 h-4 accent-blue-600 dark:accent-blue-400"
                            />
                            <span className="text-gray-700 dark:text-gray-300">
                                Do you want me to contact you back?
                            </span>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105"
                        >
                            🚀 Submit Feedback
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
