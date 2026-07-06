const categories = [
  "🌐 Websites",
  "🤖 AI Tools",
  "💻 Coding",
  "📄 Notes",
  "🛣️ Roadmaps",
  "🎯 Placement",
];

export default function CategoryGrid() {
  return (
    <section className="categorySection">
      {categories.map((item) => (
        <div key={item} className="category">
          {item}
        </div>
      ))}
    </section>
  );
}