import SalaryParameters from "./SalaryParameters";
import Post from "../Post";

export default function Salary({ data, setData }) {
  return (
    <Post heading="Uttag" rows={data.rows}>
      <SalaryParameters data={data} setData={setData} />
    </Post>
  );
}
