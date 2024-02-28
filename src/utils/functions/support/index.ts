import axios from "axios";

export async function support(data: any): Promise<any> {
    const result = await axios.post(`support/post`, data).then((result: any) => { return result.data })
    return result
}

export async function verifyMail(data: any): Promise<any> {
    const result = await axios.post(`support/verify-mail`, data).then((result: any) => { return result.data })
    return result
}