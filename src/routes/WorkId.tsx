import { useLocation } from "react-router-dom";

const WorkId = () => {
	const location = useLocation();

	return <div className="animate-opacity-fade">{location.pathname}</div>;
};

export default WorkId;
