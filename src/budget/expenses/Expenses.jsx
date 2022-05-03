import Post from "../Post";

export default function Income({ data, setData }) {
  return <Post heading="Andra utgifter" rows={data.rows} />;
}
