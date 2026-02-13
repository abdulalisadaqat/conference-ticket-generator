export default function ErrorMessage({ message = "This field is required!" }) {
  return (
    <div className="flex items-center gap-2">
      <img src="images/icon-info.svg" alt="info icon" />
      <p className="text-xs tracking-tighter text-secondary-700 sm:text-sm">
        {message}
      </p>
    </div>
  );
}
