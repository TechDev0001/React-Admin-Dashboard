const Card = ({ title, value, icon: Icon, bg = "bg-white" }) => {
  return (
    <div className={`p-6 rounded shadow ${bg} dark:bg-gray-800`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">{title}</h3>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
        </div>
        {Icon && <Icon className="w-10 h-10 text-gray-400 dark:text-gray-200" />}
      </div>
    </div>
  );
};

export default Card;
