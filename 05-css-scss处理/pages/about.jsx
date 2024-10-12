let count = 1;

export default function About(props) {
  console.log(props, ";;;");
  return (
    <h1>
      {props.response.msg}
      {props.count + 1}
    </h1>
  );
}
// export async function getStaticProps() {
//   const res = await fetch("http://127.0.0.1:4523/m1/3215020-2070618-default/deposit/return/list", { method: "get" });
//   const response = await res.json();
//   console.log(response, "///");
//   return {
//     props: { response: response, count: ++count },
//   };
// }
export async function getServerSideProps(context) {
  console.log(context.query, "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
  const res = await fetch("http://127.0.0.1:4523/m1/3215020-2070618-default/deposit/return/list", { method: "get" });
  const response = await res.json();
  return {
    props: { response: response, count: ++count },
  };
}
