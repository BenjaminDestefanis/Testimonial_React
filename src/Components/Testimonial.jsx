import React from "react"; 
import './Testimonial.css';

import { SecondComponent } from "./SecondComponent";

                        //Opcion
 function Testimonial( /* props */ { name , charge , imagen} ){
    return(
        <div className="testi-container">
            
            <img 
            className="testi-img"
            src={imagen}
            alt="Primer imagen"
            />


            <div className="testi-text">
                <p className="testi-name"> { name } </p>
                <p className="testi-charge"> { charge }</p>

                <p className="testi-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptates, molestiae quasi dolore consequatur ducimus, suscipit repellat earum animi iste cupiditate deleniti dolorum maxime sapiente voluptatum voluptas tempore, unde repudiandae.</p>

                <SecondComponent />
            </div>




        </div>

        
    )
}

export default Testimonial;



