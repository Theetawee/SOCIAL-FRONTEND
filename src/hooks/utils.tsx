
const utils = () => {


const dataURLtoBlob = async (dataFile: string): Promise<Blob> => {
    try {
        const binary = atob(dataFile.split(",")[1]);
        const array: number[] = [];
        let i = 0;
        const len = binary.length;
        while (i < len) {
            array.push(binary.charCodeAt(i));
            i++;
        }
        const blob = new Blob([new Uint8Array(array)], {
            type: "image/webp",
        });

        return blob;
    } catch (error) {
        console.error("Error converting data URL to blob:", error);
        throw error;
    }
};




  return {dataURLtoBlob}
}

export default utils
