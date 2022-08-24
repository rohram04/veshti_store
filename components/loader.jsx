export default function Loader({
  show = true,
  stroke = "#ffffff",
  height = 24,
  width = 24,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      // width="24"
      // height="24"
      viewBox={"0 0 24 24"}
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={"animate-spin " + (show ? "" : "hidden")}
      height={height}
      width={width}
    >
      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38" />
    </svg>
  );
}

export function PageLoader() {
  return (
    <div className=" inset-0 mx-auto fixed overflow-y-auto min-h-full w-full flex items-center justify-center">
      <Loader height={50} width={50} stroke="#000000" />
    </div>
  );
}
