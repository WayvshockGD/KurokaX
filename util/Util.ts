export default class Util {
    static formatString(str: string, ...strings: string[]) {
        for (let s = 0; s < strings.length; s++) {
            str = str.replace(`{${s}}`, strings[s]);
        }
        return str;
    }
}