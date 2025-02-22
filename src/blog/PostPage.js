import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import MenuBar from "../components/MenuBar"
import Footer from "../components/Footer"

let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function zerosAreHard(n) {
  if (n < 10) {
    n = "0" + n;
  }
  return n;
}

let now = new Date();
let day = days[ now.getDay() ];
let month = months[ now.getMonth() ];
let date = now.getDate();
let hours = zerosAreHard(now.getHours());
let minutes = zerosAreHard(now.getMinutes());
let seconds = zerosAreHard(now.getSeconds());
let year = now.getFullYear();

let blogPostPagePrompt = "Current login: " + day + " " + month + " " + date + " " + hours +":" + minutes + ":" + seconds + " " + year;

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!data) return null;
    return (
      <Layout>
        <div>
          <span >{ blogPostPagePrompt }<br />
          Welcome to MarioGeorgiev.COM!</span>
          <br /><br />
          <MenuBar />
          <p>[mariog@MarioGeorgiev ~]$ cat /var/www/blog/post.md</p>
        </div>
        <div>
          <h1>{post.title}</h1>
          <p>{post.date} || Time to Read: {data.markdownRemark.timeToRead} Minutes</p>
          <Link to="/blog/">&#8656; Back to Posts</Link>
          <hr />
        </div>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
        <Footer />
      </Layout>
    );
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
    }
  }
`;
