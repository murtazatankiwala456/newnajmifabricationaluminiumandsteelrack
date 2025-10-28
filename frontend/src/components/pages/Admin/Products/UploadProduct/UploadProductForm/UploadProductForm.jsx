const UploadProductForm = () => {
  return (
    <div class="max-w-2xl mx-auto bg-secondary p-8 rounded-lg shadow-lg">
      <h1 class="text-heading text-3xl font-bold text-center mb-8">
        Upload Product
      </h1>
      <form action="">
        <div class="mb-6">
          <label
            class="block text-gray-800 text-sm font-medium mb-2"
            for="productName"
          >
            Product Name
          </label>
          <input
            class="w-full px-4 py-3 bg-neutral-accent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-orange"
            id="productName"
            placeholder="e.g. Classic T-Shirt"
            type="text"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-800 text-sm font-medium mb-2"
            for="productDescription"
          >
            Product Description
          </label>
          <textarea
            class="w-full px-4 py-3 bg-neutral-accent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-orange"
            id="productDescription"
            placeholder="e.g. High-quality cotton t-shirt..."
            rows="4"
          ></textarea>
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-800 text-sm font-medium mb-2"
            for="productSize"
          >
            Product Size
          </label>
          <input
            class="w-full px-4 py-3 bg-neutral-accent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bright-orange"
            id="productSize"
            placeholder="e.g. Small, Medium, Large"
            type="text"
          />
        </div>
        <div class="mb-8">
          <label class="block text-gray-800 text-sm font-medium mb-2">
            Product Image
          </label>
          <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md bg-neutral-accent">
            <div class="space-y-1 text-center">
              <span class="material-icons text-gray-400 text-5xl">
                cloud_upload
              </span>
              <div class="flex text-sm text-body">
                <label
                  class="relative cursor-pointer bg-secondary rounded-md font-medium text-primary hover:text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary"
                  for="file-upload"
                >
                  <span>Upload a file</span>
                  <input
                    class="sr-only"
                    id="file-upload"
                    name="file-upload"
                    type="file"
                  />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs text-body">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <button
          class="w-full bg-primary text-white font-bold py-3 px-4 rounded-md transition duration-300"
          type="submit"
        >
          Upload
        </button>
      </form>
    </div>
  );
};
export default UploadProductForm;
