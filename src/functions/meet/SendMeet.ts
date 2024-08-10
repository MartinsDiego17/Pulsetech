interface DataMeetConfig {
    date: string,
    hour: string,
    userName: string,
    phone_number: string,
    description: string,
    isActive: boolean
}

export const sendMeet = (dataMeet : DataMeetConfig) => {
    console.log(dataMeet);
    return 1;
}