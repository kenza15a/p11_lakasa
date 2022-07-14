//import { useEffect, useState } from "react"
import annoncesTab from "./data.json";
export default class AnnonceService {
    constructor() {
        this.annoncesTab = annoncesTab;
        console.log(this.annoncesTab);
    }
    getAnnonceById(id) {
        //  let annoceData = [];
        const annoceData = this.annoncesTab.find((annonce) => annonce.id === id);

        //annoceData = this.annoncesTab.filter(x => x.id === id);


        console.table(annoceData)
        return annoceData;
    }
}
