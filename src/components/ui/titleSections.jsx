function TitleSections({ title, subtitle }) {
  return (
    <div>
      <h3 className="text-xl font-bold relative lineUnderline">{title}</h3>
      <p className="mt-4 font-medium">{subtitle}</p>
    </div>
  );
}

export { TitleSections };
