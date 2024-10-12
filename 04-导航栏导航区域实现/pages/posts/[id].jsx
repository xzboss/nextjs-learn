import PostsLayout from "./layout";
export default function Post({ postData }) {
  console.log(postData, ";;;");
  return (
    <PostsLayout>
      <h1>
        ---{postData.title}----{postData.date}
      </h1>
    </PostsLayout>
  );
}
export async function getStaticProps({ params }) {
  console.log(params, "@@@@[id]");
  return {
    props: { postData: { id: params.id, title: params.id + "deeed", date: "2010-11-11" } },
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
      {
        params: {
          id: "3",
        },
      },
      {
        params: {
          id: "4",
        },
      },
    ],
    fallback: false,
  };
}
