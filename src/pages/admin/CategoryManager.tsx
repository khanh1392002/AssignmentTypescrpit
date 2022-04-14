import React, { useEffect, useState }  from 'react';
import { list, remove } from '../../api/category';
import { TypeCategories } from '../../types/category';
import { Link } from 'react-router-dom';

export type CATEGORY = {
    _id: string | number,
    name: string
}

function CategoryManager(){
    const [category, setCategory] = useState<CATEGORY[]>([]);

    const getCategory = async () => {
        const response = await list();
        setCategory(response.data);
    }

    // console.log(list());

    const handleRemove = async (_id: number | string) => {
        const response = await remove(_id);
        const confirm = window.confirm("Bạn có muốn xoá không");
        if(confirm){
            if(response.status === 200){
                getCategory();
            }
        }
    }

    useEffect(()=> {
        getCategory();
    }, []);

    return (
        <div className='container'>
            <div style={{margin: '20px 0px 20px 0px', textAlign: 'center'}}>
                <h1>Category</h1>
            </div>
            <div>
                <Link to={'create'}> <button className='btn btn-success' style={{margin: '0px 0px 25px 0px'}}>Add new</button> </Link>
            </div>
            <table className="table" style={{margin: '0px 20px 0px 20px'}}>
                    <thead>
                        <tr>
                            <td scope="col">ID</td>
                            <td >Name</td>
                            <td >Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            category.map((category, index) => (
                                 <tr  key={index}>
                                    <td scope="row">{index + 1}</td>
                                    <td>{category.name}</td>
                                    <td > <Link to={`edit/${category._id}`} > <button className='btn btn-warning'>Edit</button> </Link> </td>
                                    <td> <button onClick={() => handleRemove(category._id)} className='btn btn-danger'>Delete</button> </td>
                                </tr>
                            ))
                        }
                    </tbody>
               </table>
                <Link to={'/admin'}><button className='btn btn-dark'>Back</button></Link> 
           </div>    
    )
}
export default CategoryManager;