import Loader from "@/app/components/Loader";

export default function Loading() {
  return (
    <div className="grid min-h-[60vh] place-items-center bg-base">
      <Loader />
    </div>
  );
}
