
function Loader({ isLoading }) {
  return isLoading && <div className="text-2xl">Loading...</div>;
}

export { Loader };
