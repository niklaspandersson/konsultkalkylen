import Post from "../Post";
import IncomeParameters from "./IncomeParameters";
export default function Income({ data, setData }) {
  return (
    <Post heading="Inkomster" rows={data.rows}>
      <IncomeParameters data={data} setData={setData} />
    </Post>
  );
}
