export interface Iseat {
    seatID: string;
    assertUserid: string;
    assertUsername: string;
    seatType: string;
    team: string;
    startDate: string;
    endDate: string;
    odcId: string;
    imageUrl: string;
  }
  
  
  export interface Iseatlayout {
    id: number;
    location: string;
    building: string;
    floor: string;
    
    odcname: string;
    managercubicalid: string[];
    bayid: any;
    bayVal: any;
    confroom: any;
   }
   
   export interface Ilocation {
    id: number;
    locations: string;
    buildings: any;
    
   } 