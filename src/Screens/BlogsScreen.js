import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listBlogs } from "../actions/productActions";
import Base from "../components/core/Base";
import MessageBox from "../components/MessageBox";

export default function BlogsScreen(props) {
  const dispatch = useDispatch();
  const blogsList = useSelector((state) => state.blogsList);
  const { loading, error, blogs } = blogsList;
  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);
  return (
    <Base>
    <div className="container-fluid  p-4">
      {loading ? (
        <div className="row center">
          <h1>Loading .. </h1>
        </div>
      ) : error ? (
        <MessageBox variant="danger">{error}<Link to={props.match.path}>refresh</Link></MessageBox>
      ) : (
        <div>
          {blogs.map((blog, index) => (
            <Link key={index} to={`/blog/${blog.id}`}>
              <div
                className=" border mt-4 p-4"
                style={{ backgroundColor: "white" }}
              >
                <h5 className="text-danger">{blog.name}</h5>
                <br />
                <p className="text-dark text-right">
                  -{blog.addedDate.substring(0, 10)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
    </Base>
  );
}
