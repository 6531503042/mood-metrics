const InsightCard = ({ category, expanded, onToggle }) => {
  const getRiskColor = (risk = 'medium') => {
    switch (risk.toLowerCase()) {
      case 'high':
        return 'bg-red-500/20 border-red-500';
      case 'medium':
        return 'bg-yellow-500/20 border-yellow-500';
      case 'low':
        return 'bg-green-500/20 border-green-500';
      default:
        return 'bg-blue-500/20 border-blue-500';
    }
  };

  return (
    <div 
      className={`${getRiskColor(category.risk)} border p-4 rounded-lg backdrop-blur-lg 
        transition-all duration-300 hover:scale-[1.02] relative overflow-hidden
        shadow-sm hover:shadow-md`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="font-semibold text-lg">{category.title}</h3>
          <button onClick={onToggle} aria-expanded={expanded}>
            {expanded ? '▲' : '▼'}
          </button>
        </div>
        <p className="text-sm text-gray-600">{category.description}</p>
      </div>
    </div>
  );
};

export default InsightCard;
