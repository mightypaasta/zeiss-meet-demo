
export default class AppUtils {

    public static getHttpSchema(hostname: string) {
        let isLocalHost = hostname.includes('localhost');
        return isLocalHost ? 'http' : 'https';
    }


}
