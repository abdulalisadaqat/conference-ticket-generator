export default function ImageInput({
  ref,
  selectedFile,
  imagePreviewUrl,
  handleImageChange,
  handleRemoveImage,
}) {
  return (
    <>
      <label htmlFor="filePicker" className="block text-primary-200">
        Upload Avatar
      </label>
      <div className="relative place-items-center space-y-3.5 border-2 border-dashed border-primary-500 rounded-xl p-3.5 bg-primary/10 has-focus:outline-2 outline-offset-[3px] outline-primary-500 hover:bg-primary/20">
        <input
          type="file"
          id="filePicker"
          name="filePicker"
          accept={["image/png, image/jpeg"]}
          ref={ref}
          onChange={(e) => handleImageChange(e.target.files[0])}
          className="absolute inset-0 h-full cursor-pointer opacity-0"
          hidden={selectedFile}
          required
        />
        {selectedFile ? (
          <>
            <div className="flex w-12 h-12 items-center justify-center bg-primary-700/50 border border-primary-700 rounded-xl overflow-hidden">
              <img
                src={imagePreviewUrl}
                alt="uploaded photo"
                width={48}
                height={48}
                className="size-full object-cover"
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="px-2 py-1 bg-primary-700/50 text-xs text-primary-300/80 rounded underline underline-offset-2 cursor-pointer"
                onClick={handleRemoveImage}>
                Remove image
              </button>

              <button
                type="button"
                className="px-2 py-1 bg-primary-700/50 text-xs text-primary-300 rounded cursor-pointer"
                onClick={() => ref.current.click()}>
                Change image
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex w-12 h-12 items-center justify-center bg-primary-700/50 border border-primary-700 rounded-xl overflow-hidden">
              <img
                src="images/icon-upload.svg"
                alt="upload icon"
                width={30}
                height={30}
              />
            </div>
            <p className="text-center text-primary-300 leading-none">
              <span className="hidden md:block">
                Drag and drop or click to upload
              </span>
              <span className="md:hidden">Select a photo to upload</span>
            </p>
          </>
        )}
      </div>
    </>
  );
}
