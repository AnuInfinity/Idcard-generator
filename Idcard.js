import React, { useState } from 'react'
import './idcard.css'
function Idcard() {
    const [formdata,setFormdata]=useState({
        name:'',
        dob:'',
        course:'',
        idnumber:'',
        issuedate:'',
        expirydate:'',
        companyname:'Company Name',
        companyservice:'Company Service'
    })
    const [image,setImage]=useState(null)

    const handlechange=(e)=>{
        const {name,value}=e.target
        setFormdata({...formdata,[name]:value})
    }
    const handleimage=(event)=>{
        const file=event.target.files[0]
        if(file){
            const imageurl=URL.createObjectURL(file)
            setImage(imageurl)
        }
    }
  return (
    <div>
        <div className='container'>
            <h1 className='title'>ID CARD GENARATOR</h1>
            <div className='form'>
                <input type='text' name='name' value={formdata.name}
                    onChange={handlechange} placeholder='Enter your name'/>

                <input type='date' name='dob' value={formdata.dob}
                    onChange={handlechange} placeholder='Enter your Birth date'/>
                    
                <input type='text' name='course' value={formdata.course}
                    onChange={handlechange} placeholder='Enter your course'/>
                
                <input type='text' name='idnumber' value={formdata.idnumber}
                    onChange={handlechange} placeholder='Enter your ID number'/>

                <input type='month' name='issuedate' value={formdata.issuedate}
                    onChange={handlechange} placeholder='Enter your Issue Date'/>

                <input type='month' name='expirydate' value={formdata.expirydate}
                    onChange={handlechange} placeholder='Enter your Expiry Date'/>

                <input type='file' accept='image/*'
                onChange={handleimage}/>
            </div>
            <div className='cardpreview'>
                <h2 className='cardtitle'>IDENTIFICATION CARD</h2>
                <div className='carddetails'>
                    <div>
                    <center><img src={image} className='image' alt='no figure'/></center>
                    <h3><center>Photo</center></h3>
                    </div>
                    <div>
                        <p><strong>Name:</strong>{formdata.name}</p>
                        <p><strong>DOB:</strong>{formdata.dob}</p>
                        <p><strong>Id Number:</strong>{formdata.idnumber}</p>
                        <p><strong>Course:</strong>{formdata.course}</p>
                        <p><strong>Issue Date:</strong>{formdata.issuedate}</p>
                        <p><strong>Expiry Date:</strong>{formdata.expirydate}</p>
                        <div className='company'>
                            <h3>{formdata.companyname}</h3>
                            <h4>{formdata.companyservice}</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default Idcard