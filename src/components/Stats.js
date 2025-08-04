export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list! 💼</em>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100) || 0;
  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? "You got everything! Ready to go! ✈️"
          : `💼 you have ${numItems} items on your list, and you already packed ${numPacked} (${percentPacked}%)`}
      </em>
    </footer>
  );
}
