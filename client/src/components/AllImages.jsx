import React, { useState } from "react";
import Loader from "./Loader";

const AllImages = () => {
  const [Uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");
  let allPosts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]); // Access the files array and select the first file
  };
  return (
    <>
      <div className="flex justify-between mt-8 px-4 font-sans">
        <h1 className="font-mono">Awesome Image uploader</h1>
        {!Uploading && (
          <div className="text-center">
            <form>
              <label htmlFor="imageUpload">
                <div className="bg-gray-200 mx-[7.5rem] h-[200px] flex justify-center items-center rounded-lg">
                  {selectedFile ? (
                    <p>{selectedFile.name}</p> // Display filename if a file is selected
                  ) : (
                    <p>Select Image</p>
                  )}
                  <input
                    type="file"
                    name="imageUpload"
                    id="imageUpload"
                    className="hidden"
                    onChange={handleFileChange} // Remove the parentheses
                  />
                </div>
              </label>
              {selectedFile && (
                <button className="bg-gray-100 px-4 py-3 rounded-md mt-3 ">
                  Upload Image
                </button>
              )}
            </form>
            <div className="flex justify-center items-center flex-wrap gap-4 mx-24 min-h-screen ">
              {!Uploading &&
                allPosts.map((i) => (
                  <div className="w-80 rounded-[8px]" key={i}>
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                      alt="image"
                      className="rounded-md"
                    />
                  </div>
                ))}
            </div>
          </div>
        )}

        {Uploading && <Loader />}
      </div>
    </>
  );
};

export default AllImages;
