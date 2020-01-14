//import React from "react";

const Like = props => {
  let result = '<i class="fa fa-star';
  result += props.liked
    ? '" aria-hidden="true" />'
    : '-o" aria-hidden="true" />';
  console.log(result);
  return result;
};

// const Like = props => {
//     let classes = "fa fa-star";
//     if (!props.liked) classes += "-o";
//     return (
//       <i
//         //onClick={props.onClick}
//         className={classes}
//         aria-hidden="true"
//       />
//     );
//   };

{/* <Link // to={"/editProjectData/" + element.id}
  to={"/projectsList/editProjectData/" + element.id}
  onClick={() =>
    store.dispatch(
      "setSelectedProject",
      store.state.projectsList.filter(p => p.id === element.id)[0]
    )
  }
></Link>; */}

export default Like;
