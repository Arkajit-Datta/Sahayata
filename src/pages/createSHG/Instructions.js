import React from "react";
import { Link } from "react-router-dom";
import Button from "../../comps/Button";
import Navbar from "../../comps/Navbar";
import "./createSGH.css";
function Instructions() {
  return (
    <div className="container">
      <Navbar />
      <div className="header-1">Create a self-help group</div>
      <div className="box">
        <div className="box-header">Instructions</div>
        <div className="box-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, blandit
          pellentesque massa nullam nec. Nisl sit risus, ultrices ac faucibus
          facilisi sed. Ipsum, gravida massa metus elementum, placerat tristique
          sed in vel. Enim mauris auctor amet, turpis est a ac. In sit bibendum
          sollicitudin nulla. Suscipit hac etiam congue fermentum, gravida
          aliquam pellentesque sapien. Orci adipiscing lacus quam sit tincidunt
          id viverra amet massa. Nibh purus sit amet ullamcorper pellentesque
          odio amet volutpat adipiscing. Sed amet eget sit laoreet ac, duis.
          Pretium condimentum lectus aliquam aliquet eget eu hac sit. Adipiscing
          nibh nisl magnis lacus ullamcorper.
          <ul>
            <li>Morbi est quisque ut varius sem.</li>
            <li>Aliquam arcu nisl purus quisque vel congue nibh quisque et.</li>
            <li>cras arcu pellentesque purus donec massa. </li>
            <li>Vitae volutpat sem faucibus risus viverra non eu. </li>
            <li>
              ravida dui imperdiet arcu accumsan. Id nulla eget amet adipiscing
              et eu.
            </li>
            <li>Mi sapien, aliquam eget phasellus.</li>
            <li>Quisque id non magna enim ut et.</li>
            <li>
              {" "}
              Maecenas senectus mattis volutpat magna elementum egestas
              adipiscing.{" "}
            </li>
            <li>Nibh sollicitudin etiam gravida turpis aenean.</li>
          </ul>
          Pellentesque odio ullamcorper semper gravida ornare eget. Nulla
          egestas augue pulvinar sit leo molestie. Interdum diam posuere auctor
          lacus cras eu.
        </div>
        <Link className="button-cshg" to={"/form1"}>
          <Button  text={"Create SHG"}/>
        </Link>
      </div>
    </div>
  );
}

export default Instructions;
