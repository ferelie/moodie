export default function Header(props) {
  const { fugaz } = props;

  return (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1 className={`text-base sm:text-3xl textGradient ` + fugaz.className}>
        Moodie
      </h1>
      <div className="flex items-center justify-between">PLACEHOLDER</div>
    </header>
  );
}
