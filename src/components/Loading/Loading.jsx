import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Loader type="Rings" color="#00BFFF" height={200} width={200} />
    </div>
  );
};

export default Loading;
