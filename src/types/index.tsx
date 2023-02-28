export type ImageProp = Record<string, ReturnType<typeof require>>
export type SvgProps = Record<string, ReturnType<typeof require>>


export interface JobProps{
    "id": number,
    "applicationStatus": number,
    "jobId": number,
    "job": {
        "id": number,
        "description": string,
        "project": {
            "id": number,
            "name": string
        }
    }
}
