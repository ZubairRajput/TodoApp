import { useState } from "react"


const Todo=()=> {

    const [inputdata,setInputdata]=useState('');
    const [item,setItem]=useState([]);

    const addItem=()=>{
        //previous data store
        if(!inputdata){
        }else{
            setItem([...item,inputdata]);
            setInputdata(''); 
        }}

   const deleteItem=(id)=>{
    const updateItem=item.filter((elem,ind)=>{
        return ind!==id;
    });
    setItem(updateItem);
   }

   const removeAl=()=>{
setItem([]);
   }

  return (
    <>
   {/* for backround div */}
    <div className="main-div">
<div className="child-div">
     <figure>
<figcaption>Add your list here</figcaption>
     </figure>
     
     <div className="addItems">
       <input type="text"  placeholder="add itmes plzz"
       value={inputdata} 
       onChange={(e)=>setInputdata(e.target.value)}       
       />
       <i class="fa-sharp fa fa-cart-plus add-btn" type="Add Item" onClick={addItem} ></i>
     </div>
     
     <div className="showItems">
     {
     item.map((elem,ind)=>{
        return(

            <div className="eachItem" key={ind}>
               <h3>{elem}</h3>
               <i class="fa-sharp fa fa-trash add-btn" type="Delete Items" onClick={()=>deleteItem(ind)}></i>
            </div> 
        )
     })
     
     }
            
     </div>

     <div className="showItems">
       <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAl} ><span>ChecK List</span></button>
     </div>

</div>
    </div>
  </>
  
  )


}

export default Todo