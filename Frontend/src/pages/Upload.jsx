import { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Post uploaded:", res.data);

      // Clear form
      setImage(null);
      setCaption("");
      e.target.reset();

      alert("Post uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800">
          Create Post
        </h2>

        <div className="space-y-2">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Upload Image
          </label>

          <input
            type="file"
            name="image"
            accept="image/*"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="block w-full text-sm text-gray-600
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:bg-blue-50 file:text-blue-700
              file:font-medium
              hover:file:bg-blue-100
              cursor-pointer"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="caption"
            className="block text-sm font-medium text-gray-700"
          >
            Enter Caption
          </label>

          <input
            type="text"
            name="caption"
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            required
            placeholder="Write a caption..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500
              focus:border-blue-500 transition"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg
            font-medium hover:bg-blue-700
            transition duration-200"
        >
          Upload Post
        </button>
      </form>
    </div>
  );
};

export default Upload;