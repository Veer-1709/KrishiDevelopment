import { Link } from "react-router-dom";
import Menu from "../inc/Menu";
import { useEffect, useState } from "react";
function Home(){
  let [products,setProducts]=useState([]);

    async function getproduct() {
        var resp=await fetch("http://localhost:2000/product/sel");
        var data=await resp.json();

        console.log(data)
        setProducts(data)
        
    }

    useEffect(()=>{
          getproduct();
    },[])

    return(
        <>
       <div>
 <Menu/>
  <img className="ban" src="images/Baner.png" />
  <div className="container mainarea">
    <div className="row">
      <div className="col-md-12">
        <div className="row">
          {products.map((p)=>
          <div className="col-md-3">
            <div className="card">
              <img className="card-img-top"src={"http://localhost:2000/product_img/"+p.pimg} alt="Card image" />
              <div className="card-body">
                <h4 className="card-title">{p.pname}</h4>
                <p className="card-text">Rs. {p.pprice}</p>

                <div className="row">
                  <div className="col-md-4">
                    <button data-bs-toggle="modal" data-bs-target={"#myModal"+p._id} className="btn btn-success">Details</button>                   
                  </div>

                  <div className="col-md-8">
                    <Link className="btn btn-primary" to={"/contact"}>Buy Now</Link>                   
                  </div>

                </div>

              </div>
            </div>

<div className="modal" id={"myModal"+p._id}>
  <div className="modal-dialog">
    <div className="modal-content">
      {/* Modal Header */}
      <div className="modal-header">
        <h4 className="modal-title">{p.pname}</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" />
      </div>
      {/* Modal body */}
      <div className="modal-body">
        {p.pdetails}
      </div>
      {/* Modal footer */}
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


          </div>
         )}
         
        </div>
      </div>
    </div>
  </div>
 
  <p className="footer"> © @ All right reserved Abc</p>
</div>

        </>
    )
}
export default Home;