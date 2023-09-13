
import { useState } from "react";
import styles from "./styleform.module.scss";


export default function CForm(){
    const[Formdata,setformdata]=useState({
        username :"",
        ScholarID :"",
        Hostel :"",
        RoomNo :"",
        Category:"",
        description:"",
        Forwardedto:"",
        Imagefile:""
    })

    const[Storedata,setstoredata]=useState([]);

    function handleInput(e){
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);
        setformdata({
            ...Formdata,
            [name]:value
        })
    }

    function handleFileInputChange(e){
        const name = e.target.files[0]?e.target.files[0].name:" ";
        setformdata({
            ...Formdata,Imagefile :name,
        });
    }

    function handleDragOver(e){
        // console.log("dragover");
        e.preventDefault();
    }

    function handleDrop(e){
        // console.log('drop');
        e.preventDefault();

        const file = e.dataTransfer.files[0];

        if(file){
            const name = file.name;
            setformdata({
                ...Formdata,
                Imagefile:name,
            })
        }
    }

    function handleSubmit(e){
        e.preventDefault();

        const Finaldata = { ...Formdata, id:new Date().getTime().toString() }
         
        console.log(Finaldata);

        setstoredata([...Storedata, Finaldata]);

        console.log(Storedata);
        
        setformdata({
            username :"",
            ScholarID :"",
            Hostel :"",
            RoomNo :"",
            Category:"",
            description:"",
            Forwardedto:"",
            Imagefile:""
        })
        
    }

    return(
        < div>                  
                <div className={styles.Title}>Complaint form</div>  

                <div className={styles.CForm}>
                        <form className={styles.ComplaintForm}  onSubmit={handleSubmit}>
                            <div className={styles.form_group}>
                                <input type="text" id="username" value={Formdata.username} name ="username" onChange={handleInput} autoFocus
                                required />
                                <label htmlFor="username">Name</label>
                            </div>
                            <div className={styles.form_group}>
                                <input type="text" id="ScholarID" name="ScholarID" value={Formdata.ScholarID} onChange={handleInput} required/>
                                <label htmlFor="scholar ID">Scholar ID</label>
                            </div>
                            <div className={styles.form_group}>
                                <select name="Hostel" onChange={handleInput} required>
                                        <option value="No input" id="No_input" name="Hostel" onChange={handleInput}>Select</option>
                                        <option value="BH1"  id="BH1" name ="Hostel" onChange={handleInput}>BH1</option>
                                        <option value="BH2"  id="BH2" name ="Hostel" onChange={handleInput}>BH2</option>
                                        <option value="BH3"  id="BH3" name ="Hostel" onChange={handleInput}>BH3</option>
                                        <option value="BH4"  id="BH4" name ="Hostel" onChange={handleInput}>BH4</option>
                                        <option value="BH5"  id="BH5" name ="Hostel" onChange={handleInput}>BH5</option>
                                        <option value="BH6"  id="BH6" name ="Hostel" onChange={handleInput}>BH6</option>
                                        <option value="BH7"  id="BH7" name ="Hostel" onChange={handleInput}>BH7</option>
                                        <option value="BH8"  id="BH8" name ="Hostel" onChange={handleInput}>BH8</option>
                                        <option value="BH9A" id="BH9A" name ="Hostel" onChange={handleInput}>BH9A</option>
                                        <option value="BH9B" id="BH9B" name ="Hostel" onChange={handleInput}>BH9B</option>
                                        <option value="BH9C" id="BH9C" name ="Hostel" onChange={handleInput}>BH9C</option>
                                        <option value="BH9D" id="BH9D" name ="Hostel" onChange={handleInput}>BH9D</option>
                                        <option value="PGH"  id="PGH" name ="Hostel" onChange={handleInput}>PGH</option>
                                        <option value="PGH"  id="PGH" name ="Hostel" onChange={handleInput}>GH1</option>
                                        <option value="PGH"  id="PGH" name ="Hostel" onChange={handleInput}>GH2</option>
                                        <option value="PGH"  id="PGH" name ="Hostel" onChange={handleInput}>GH3</option>
                                </select>
                                <label htmlFor="hostel">Hostel</label>
                            </div>
                            <div className={styles.form_group}>
                                <input type="text" id="RoomNo" value={Formdata.RoomNo} onChange={handleInput} name="RoomNo" required/>
                                <label htmlFor="RoomNo">Room Number</label>
                            </div>
                            <div className={styles.form_group}>
                                <select name="Category">
                                        <option value="No input" id="No_input" name="Category" onChange={handleInput} >Select</option>
                                        <option value="Cat1"  id="Cat1" name="Category" onChange={handleInput}>Category-1</option>
                                        <option value="cat2"  id="Cat2" name="Category" onChange={handleInput}>Category-2</option>
                                        <option value="Cat3"  id="Cat3" name="Category" onChange={handleInput}>Category-3</option>
                                </select>
                                <label htmlFor="category">Category</label>
                            </div>
                            <div className={styles.form_group}>
                                <textarea type="text" id="description" value={Formdata.description} name="description" onChange={handleInput} autoComplete="off" rows="5" cols="40" required/>
                                <label htmlFor="description">Description</label>
                            </div>
                            <div className={styles.photoUpload}>
                                    <p>Upload Your Photo</p>
                                    <div className={styles.photoupload_inner} onDragOver={handleDragOver} 
                                    onDrop={handleDrop} >
                                            <img src="https://res.cloudinary.com/dlx4meooj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1694535132/UC%20VYATHA/Frame_58066_1_nnkr62.jpg?_s=public-apps" alt="" draggable="true" onDragStart={(e)=>e.preventDefault()}></img>
                                        <div className={styles.photouploadcontent}>
                                            <span className={styles.Dragdrop}>Drag and Drop File</span>
                                            <span className={styles.or}>-OR-</span>
                                        </div>
                                        
                                        <label id="Browsebutton">
                                            BROWSE
                                            <input type="file" name="Imagefile" id="imagebrowse" accept=".jpg, .jpeg, .png" onChange={handleFileInputChange}  required />
                                        </label>
                                        <span id="Imagefile">{Formdata.Imagefile}</span>
                                        {/* <progress></progress>    */}
                                    </div>
                            </div>
                            <div className={styles.form_group}>
                                <input type="text" id="Forwarded" value={Formdata.Forwardedto} name="Forwardedto" onChange={handleInput} required/>
                                <label htmlFor="Forwarded">Forwarded to</label>
                            </div>
                            <div className={styles.captcha}>
                                <div>Captch Here</div>
                            <button type="submit" >Submit</button>
                            </div>
                        </form>        
                </div>
        </div>        
    )
}