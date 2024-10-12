export default function Post({ postData }) {
  console.log(postData, ";;;");
  return (
    <h1>
      ---{postData.title}----{postData.date}
    </h1>
  );
}
export async function getStaticProps({ params }) {
  console.log(params, "@@@@[id]");
  return {
    props: { postData: { id: params.id, title: "deeed", date: "2010-11-11" } },
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: ["001"],
        },
      },
      {
        params: {
          id: ["002",'002-001'],
        },
      },
    ],
    fallback: false,
  };
}

