import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsBlog } from "../actions/productActions";
import Base from "../components/core/Base";
import MessageBox from "../components/MessageBox";

export default function Blogcreen(props) {
    const dispatch = useDispatch();
    const blogId = props.match.params.blogId;
    const blogDetails = useSelector((state) => state.blogDetails);
    const { loading, error, blog } = blogDetails;
    useEffect(() => {
      dispatch(detailsBlog(blogId));
    }, [dispatch, blogId]);
    return (
      <Base>
        <div className="container  p-4">
        {loading ? (
          <div className="row center">
            <h1>Loading .. </h1>
          </div>
        ) : error ? (
          <MessageBox variant="danger">{error}<Link to={props.match.path}>refresh</Link></MessageBox>
        ) : (
                <div>
                    <Link to="/blogs" className=' font-weight-bold text-danger m-2'>Back to main page</Link>
                <div  className=" mt-4">
                   <h5 className='font-weight-bold'>{blog[0].name}</h5>
                </div>
                <div  className=" mt-4 ">
                   <p className='text-secondary'>{blog[0].description}</p>
                </div>
              </div> 
        )}
      </div>
      </Base>
    );
}