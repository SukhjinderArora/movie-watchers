import { useParams, useLocation, useNavigate } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <WrappedComponent
      {...props}
      params={params}
      location={location}
      navigate={navigate}
    />
  );
};

export default withRouter;
