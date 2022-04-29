import Post from "../Post";
import IncomeParameters from "./IncomeParameters";
export default function Income({ data, setData }) {

  const rows = [{ title: 'Debiterad tid', ...data.summary }];

  return (
    <Post heading="Inkomster" summary={data.summary} rows={rows}>
      <IncomeParameters data={data} setData={setData} />
    </Post>
  );
}
