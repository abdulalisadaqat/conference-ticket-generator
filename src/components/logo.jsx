export default function Logo({ className = "" }) {
  return (
    <img
      src="images/logo-full.svg"
      alt="logo"
      width={200}
      height={30}
      className={`mx-auto block w-40 xs:w-44 sm:w-48 md:w-52 lg:w-56 ${className}`}
    />
  );
}
