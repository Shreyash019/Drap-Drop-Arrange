import React, { useState } from 'react';
import toast from "react-hot-toast";
import { Helmet } from 'react-helmet';

const AddIdea = ({ handleNewData, setIdeaTabOpen }) => {
    const maxLengths = 100;

    const [formData, setFormData] = useState();

    const [remainingChars, setRemainingChars] = useState(80)

    const handleChange = (e) => {
        if (e.target.value.length > maxLengths) {
            toast.error(`${`Input can't be more than ${maxLengths} characters`}`);
        } else {
            setFormData(e.target.value);
            setRemainingChars(maxLengths - e.target.value.length);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData) {
            toast.error(`You don't have an idea.`);
            return
        }
        handleNewData(formData);
        console.log(formData)
        setIdeaTabOpen(false)
    };

    return (
        <section className='h-screen'>
            <div className='flex items-center justify-center bg-blue rounded-b-xl border-b-[10px] py-8 lg:p-10'>
                <div className='m-1 w-full h-auto flex flex-wrap items-center justify-center'>
                    <div className='sm:w-[90%] w-3/5 h-auto'>
                        <textarea
                            className='w-full h-auto overflow-auto outline-none border p-2 sm:text-sm '
                            placeholder='Items...'
                            name="items"
                            value={formData}
                            maxLength={maxLengths}
                            onChange={handleChange}
                        ></textarea>
                        <p className={` text-xs ${remainingChars < 15 ? "text-red" : "text-white"}`}>{remainingChars} characters remaining</p>
                    </div>
                    <div className='sm:w-4/5 w-1/5 p-2 flex items-center justify-center'>
                        <button className='bg-primary_button text-white px-4 py-1 rounded-md font-bold' onClick={handleSubmit}>Submit</button>
                    </div>
                    <Helmet><title>Drag Drop & Arrange | New Idea</title></Helmet>
                </div>
            </div>
            <div className='w-full h-full fixed backdrop-blur-[1px]' onClick={()=>setIdeaTabOpen(false)}></div>
        </section>

    );
};

export default AddIdea;
