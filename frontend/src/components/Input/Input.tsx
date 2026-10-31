import "./Input.scss";

type Props = {
  query: string,
  setQuery: (value: string) => void,
}

export const Input: React.FC<Props> = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      className="input"
      placeholder="Type Product Name"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};
