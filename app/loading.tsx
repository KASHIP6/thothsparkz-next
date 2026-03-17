import Loader from "./components/Loader";

export default function Loading() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#000",
      }}
    >
      <Loader />
    </div>
  );
}

