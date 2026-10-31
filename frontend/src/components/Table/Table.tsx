import "./Table.scss";

interface TableProps {
  headers: string[];
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ headers, children }) => {
  return (
    <table className="products__table">
      <thead className="products__table--head">
        <tr>
          {headers.map((name) => (
            <th key={name} className="products__table--head--item">
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="products__table--body">{children}</tbody>
    </table>
  );
};
