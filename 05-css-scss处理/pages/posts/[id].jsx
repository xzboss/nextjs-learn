import PostsLayout from "./layout";
import style from "../../styles/post.module.css";
import styleScss from "../../styles/post.module.scss";
export default function Post({ postData }) {
  console.log(
    <style jsx>
      {`
        h2 {
          color: green;
        }
      `}
    </style>,
    ";;;"
  );
  return (
    <PostsLayout>
      <h1 className={style.text}>
        ---{postData.title}----{postData.date}
      </h1>
      <h1 className={styleScss.textScss}>
        ---{postData.title}----{postData.date}
      </h1>
      <h2 style={{ fontSize: "20px" }}>
        ---{postData.title}----{postData.date}
      </h2>
      <style jsx>
        {`
          h2 {
            color: green;
          }
        `}
      </style>
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
