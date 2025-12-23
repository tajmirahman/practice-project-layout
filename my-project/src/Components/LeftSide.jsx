import { use } from "react";
import { NavLink, } from "react-router-dom";

const categoryPromise= fetch ('/categories.json').then
// eslint-disable-next-line no-unexpected-multiline
((res)=>res.json());

const LeftSide = () => {
    const categories=use(categoryPromise);
    // console.log(categories)

    return (
        <div className="space-y-2">
            {
                categories.map(category=><NavLink 
                    key={category.id}
                    className="btn bg-base-300 w-full"
                    >{category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSide;