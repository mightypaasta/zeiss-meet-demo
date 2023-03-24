export interface EventData{
    name: string,
    participants: string[],
    region:string,
    // MAKE SURE THAT THE DATE TIME IN DATABASE AND IN THE FRONT END ARE COMPATIBLE
    // IF NOT THEN HOW TO MAKE IT COMPATIBLE????
    eventDateTime: string,
    description:string
    oragnizerId:string

}