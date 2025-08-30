import React, { useState } from "react";
import axios from "axios";

const ProfileModal = ({ user, onUpdate, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [profilePic, setProfilePic] = useState(user?.photoURL || "");
  const [uploading, setUploading] = useState(false);

  // Image upload handler
  const handleImageUpload = async (e) => {
    const image = e.target.files[0];
    if (!image) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("image", image);

    try {
      const imagUploadUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_upload_key
      }`;
      const res = await axios.post(imagUploadUrl, formData);
      setProfilePic(res.data.data.url);
    } catch (error) {
      console.log("Image upload failed:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleUpdate = () => {
    onUpdate({ displayName: name, email, photoURL: profilePic });
    setIsOpen(false);
  };

  return (
    <>
      {/* Avatar button to open modal */}
      <div className="avatar cursor-pointer" onClick={() => setIsOpen(true)}>
        <div className="w-12 rounded-full">
          <img src={profilePic} alt="User Avatar" />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <h2 className="text-xl text-black font-semibold mb-4">Profile</h2>

            {/* Profile Image */}
            <div className="mb-3 flex flex-col items-center gap-2">
              <img
                src={profilePic}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input file-input-bordered w-full max-w-xs mt-2"
              />
              {uploading && (
                <p className="text-sm text-gray-500">Uploading...</p>
              )}
            </div>

            {/* Name */}
            <div className="mb-3">
              <label className="block text-black text-sm font-medium">Name</label>
              <input
                type="text"
                className="input input-bordered w-full mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="block text-sm text-black font-medium">Email</label>
              <input
                type="email"
                className="input input-bordered w-full mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="btn btn-secondary"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-success"
                onClick={handleUpdate}
                disabled={uploading}
              >
                Update
              </button>
              <button className="btn btn-error" onClick={onLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileModal;
