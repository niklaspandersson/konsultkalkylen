import Post from "../Post";
import IncomeParameters from "./IncomeParameters";
export default function Income({ data, setData }) {
  return (
    <Post heading="Inkomster" summary={data.summary}>
      <IncomeParameters data={data} setData={setData} />
    </Post>
  );
}
