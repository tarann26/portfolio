import { useState } from "react";

interface FeatureSearchProps {
  features: string[];
}

const FeatureSearch = ({ features }: FeatureSearchProps) => {
  const [selected, setSelected] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelected(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mb-4">
      <label className="block mb-2 text-sm font-medium">Jump to Feature</label>
      <select
        className="w-full border rounded p-2 bg-background"
        value={selected}
        onChange={handleChange}
      >
        <option value="">Select feature...</option>
        {features.map((feature, idx) => (
          <option key={idx} value={`feature-${idx}`}> 
            {feature.slice(0, 40)}
            {feature.length > 40 ? "..." : ""}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FeatureSearch;
