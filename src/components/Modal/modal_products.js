import React from "react";

const modal = props =>(
    <div>

    <header>{props.title}</header>
    <section className="modal_content">
        {props.children}
    </section>

     <section className="modal_actions">
         <button>cancel</button>
         <button>confirm</button>

     </section>
    </div>
);


export default modal;