export default function Ripple() {
  return (
    <div
      aria-hidden
      className="relative mx-auto flex h-16 w-16 md:h-16 md:w-16 items-center justify-center"
    >
      <span className="ripple-ring" style={{ animationDelay: "0s" }} />
      <span className="ripple-ring" style={{ animationDelay: "1.15s" }} />
      <span className="ripple-ring" style={{ animationDelay: "2.3s" }} />
      <span className="relative h-2 w-2 rounded-full bg-ink" />
    </div>
  );
}
