const UploadProductForm = () => {
  return (
    <div className="max-w-2xl mx-auto bg-secondary p-8 rounded-lg shadow-lg">
      <h1 className="text-heading text-3xl font-bold text-center mb-8">
        Upload Product
      </h1>
      <form action="">
        <div className="mb-6">
          <label
            className="block text-gray-800 text-sm font-medium mb-2"
            for="productName"
          >
            Product Name
          </label>
          <input
            className="w-full px-4 py-3 bg-neutral-accent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-orange"
            id="productName"
            placeholder="e.g. Classic T-Shirt"
            type="text"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-800 text-sm font-medium mb-2"
            for="productDescription"
          >
            Product Description
          </label>
          <textarea
            className="w-full px-4 py-3 bg-neutral-accent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-orange"
            id="productDescription"
            placeholder="e.g. High-quality cotton t-shirt..."
            rows="4"
          ></textarea>
        </div>

        <div className="mb-8">
          <label className="block text-gray-800 text-sm font-medium mb-2">
            Product Image
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-neutral-accent">
            <div className="space-y-1 text-center">
              <span className="material-icons text-gray-400 text-5xl">
                cloud_upload
              </span>
              <div className="flex text-sm text-body">
                <label
                  className="relative cursor-pointer bg-secondary rounded-md font-medium text-primary hover:text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                  for="file-upload"
                >
                  <span>Upload a file</span>
                  <input
                    className="sr-only"
                    id="file-upload"
                    name="file-upload"
                    type="file"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-body">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <button
          className="w-full bg-primary text-white font-bold py-3 px-4 rounded-md transition duration-300"
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
};
export default UploadProductForm;
