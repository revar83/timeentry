import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {IProject} from "../../types/project";
import {projects_data} from "../../data/productData"
export interface IProjectArr {
  projects:IProject[]
}
const initialState:IProjectArr ={
  projects:projects_data
};


const initializePage = (state:IProjectArr) => {
  state.projects = [];
}

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    // addProject: (state:any, { payload }) => {
    //     state.projects = payload;
    //   },
  },
});

export const {
} = projectSlice.actions;

export default projectSlice;
