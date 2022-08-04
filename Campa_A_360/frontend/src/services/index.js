import axios from "axios";
import { BASE_URL } from "../constants";

export const Service = {
    getAllCities: async() => {
        const res = await axios.get(`${BASE_URL}/list`);

        if(!res)
        return new Error('Some error occured');

        return res.data;
    },
    getSelectedCity: async(city) => {
        const res = await axios.get(`${BASE_URL}/place?city=${city}`)

        if(!res) return new Error("Selected City not found");

        return res.data;
    },
    getCollegeWithId: async(college_id) => {
        const res = await axios.get(`${BASE_URL}/college/${college_id}`)

        if(!res) return new Error("Error with specific college")

        return res.data;
    },
    getVirtualViewData: async(college_id) => {
        const res = await axios.get(`${BASE_URL}/vr/${college_id}`)

        if(!res) return new Error("Error with specific college's virtual view data");
        console.log(res.data.vr);
        return res.data.vr;
    }
}