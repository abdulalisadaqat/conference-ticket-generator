import { useRef, useState } from "react";
import ErrorMessage from "./errorMessage";
import InputField from "./inputField";
import ImageInput from "./imageInput";

export default function Form({ setStep, setData }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const inputRef = useRef();
  const year = new Date().getFullYear();

  const [formValues, setFormValues] = useState({});

  function handleImageChange(file) {
    if (file) {
      if (file.size > 512000) {
        setErrors({
          ...errors,
          image: "File too large. Please upload a photo under 500KB!",
        });
      } else {
        setSelectedFile(file);
        setImagePreviewUrl(URL.createObjectURL(file));
        setErrors({ ...errors, image: null });
      }
    }
  }

  function handleRemoveImage() {
    setSelectedFile(null);
    setImagePreviewUrl(null);
    inputRef.current.value = null;
    setErrors({ ...errors, image: "Photo is required!" });
  }

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({ ...formValues, [name]: value });

    // setting errors manually
    if (!value || value === " ") {
      switch (name) {
        case "fullName":
          setErrors({ ...errors, fullName: "Full name is required!" });
          break;
        case "email":
          setErrors({
            ...errors,
            email: "Please enter a valid email address!",
          });
          break;
        case "username":
          setErrors({ ...errors, username: "username is required!" });
          break;
      }
    } else {
      setErrors({ ...errors, [name]: null });
    }

    // setting errors: dynamic way
    // const errorName = e.target.name.split("-");
    // if (!value) {
    //   setErrors({
    //     ...errors,
    //     [name]: `${
    //       errorName[0].slice(0, 1).toUpperCase() + errorName[0].slice(1)
    //     }${errorName[1] ? " " + errorName[1] : ""} is required!`,
    //   });
    //   return;
    // }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    setData({ image: imagePreviewUrl, ...formValues });
    setTimeout(() => {
      setStep(2);
      setIsLoading(false);
    }, 1500);
  }

  return (
    <>
      <section className="text-center">
        <h1 className="mx-auto mt-8 max-w-2xl text-[26px] leading-tight text-primary font-bold xs:text-3xl sm:text-4xl md:mt-12 md:text-5xl">
          Your Journey to Coding Conf {year} Starts Here!
        </h1>
        <p className="mt-4 text-lg leading-tight text-primary-300 sm:text-xl">
          Secure your spot at next year's biggest coding conference.
        </p>
      </section>

      <section className="mx-auto mt-8 max-w-md">
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="space-y-5">
          {/* Image input */}
          <div className="space-y-2">
            <ImageInput
              ref={inputRef}
              selectedFile={selectedFile}
              imagePreviewUrl={imagePreviewUrl}
              handleImageChange={handleImageChange}
              handleRemoveImage={handleRemoveImage}
            />

            {errors.image ? (
              <ErrorMessage message={errors.image} />
            ) : (
              <div className="flex items-center gap-2">
                <img src="images/icon-info.svg" alt="info icon" />
                <p className="text-xs tracking-tighter text-primary-500 sm:text-sm">
                  Upload your photo (JPG or PNG, max size: 500KB).
                </p>
              </div>
            )}
          </div>

          {/* Full name input */}
          <div className="space-y-2">
            <InputField
              label="Full Name"
              type="text"
              id="fullName"
              onChange={handleInputChange}
              required
            />

            {errors.fullName && <ErrorMessage message={errors.fullName} />}
          </div>

          {/* Email input */}
          <div className="space-y-2">
            <InputField
              label="Email Address"
              type="email"
              id="email"
              placeholder="example@gmail.com"
              onChange={handleInputChange}
              required
            />

            {errors.email && <ErrorMessage message={errors.email} />}
          </div>

          {/* Username input */}
          <div className="space-y-2">
            <InputField
              label="GitHub Username"
              type="text"
              id="username"
              placeholder="@username"
              onChange={handleInputChange}
              required
            />

            {errors.username && <ErrorMessage message={errors.username} />}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="block w-full h-12 cursor-pointer border-0 rounded-xl p-1 bg-secondary-500 text-center text-lg font-black text-primary-900 focus:outline-2 outline-primary-500 outline-offset-[3px] disabled:brightness-75 disabled:cursor-not-allowed hover:brightness-95 hover:shadow-[0px_4px_0px_rgb(255,135,120)]">
            {isLoading ? (
              <span className="block mx-auto size-6 rounded-full border-4 border-primary-900/70 border-b-secondary-500 animate-spin" />
            ) : (
              "Generate My Ticket"
            )}
          </button>
        </form>
      </section>
    </>
  );
}
