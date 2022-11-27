import { useEffect, useRef, useState } from "react";
import * as React from 'react';
import axios from 'axios';
import Category from './category'




function Data() {

    // Variable to store data from spreadsheets
    const [data2, setData] = useState([]);
    const [categories2, setCategories] = useState([]);
    const data = useRef(null)
    const categories = useRef([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios({
                    method: 'get',
                    url: 'https://script.google.com/macros/s/AKfycbwMLqxzTwU-nJtUGL8tWeD6lpdKND8BnG261z_tVMriH3wuezulAHTUVdPKfo-bCX7FEA/exec'
                });
                data.current = response.data.data
                cleanData()
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    function cleanData() {
        // Variable con la fecha y hora local del momento
        const now = new Date()
        var cleanedData = []

        // Delete all the data before the date  
        data.current.forEach(e => {

            if (new Date(e.date) < now) {
                cleanedData.push(e)
            }
        });
        data.current = cleanedData


        //make a list of categories deleteing duplicates
        data.current.forEach(e => {
            var index = categories.current.findIndex(x => x === e.category);
            if (index === -1) {
                categories.current.push(e.category)
            }
        });
        setData(data.current)
        setCategories(categories.current)
    }





    return (
       
            <span>
                {categories2.map((c) => (
                    <Category key={c} title={c} data={data2}></Category>
                ))
                }

            </span>
    


    )
}


export default Data;