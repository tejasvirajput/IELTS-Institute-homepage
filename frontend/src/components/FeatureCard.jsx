const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="card bg-base-200 shadow-xl p-6 text-center rounded-xl hover:shadow-2xl transition-shadow">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-base">{desc}</p>
    </div>
  );
};

export default FeatureCard;
